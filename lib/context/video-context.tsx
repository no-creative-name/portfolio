import React, { createContext, useContext, useRef, useState, useCallback } from "react";

interface VideoContextType {
  currentVideo: string | null;
  isPlaying: boolean;
  setCurrentVideo: (video: string) => void;
  clearQueuedVideo: () => void;
  playVideo: () => void;
  pauseVideo: () => void;
  videoRef: React.RefObject<HTMLVideoElement>;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentVideo, setCurrentVideoState] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queuedVideo, setQueuedVideo] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  const setCurrentVideo = useCallback((video: string) => {
    if (videoRef.current && nextVideoRef.current) {
      // If this is the same video, don't do anything
      if (currentVideo === video) {
        setQueuedVideo(video);
      }

      // If no video is currently playing, start the new video immediately
      if (!isPlaying) {
        setCurrentVideoState(video);
        setQueuedVideo(null);
        
        // Set the source and load the video
        videoRef.current.src = video;
        
        // Wait for the video to be loaded before playing
        const handleLoadedData = () => {
          if (videoRef.current) {
            videoRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch((error) => {
              console.error('Error playing video:', error);
            });
            videoRef.current.removeEventListener('loadeddata', handleLoadedData);
          }
        };
        
        videoRef.current.addEventListener('loadeddata', handleLoadedData);
        videoRef.current.load();
      } else {
        // If a video is playing, preload the next video
        console.log(`Preloading next video: ${video}`);
        setQueuedVideo(video);
        
        // Start loading the next video in the background
        nextVideoRef.current.src = video;
        nextVideoRef.current.load();
      }
    } else {
      setCurrentVideoState(video);
    }
  }, [isPlaying, currentVideo]);

  const playVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  }, []);

  const clearQueuedVideo = useCallback(() => {
    console.log("Clearing queued video");
    setQueuedVideo(null);
  }, []);

  const pauseVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleVideoEnded = useCallback(() => {
    console.log("video ended, queued video:", queuedVideo);
    setIsPlaying(false);
    
    // If there's a queued video, switch to it immediately
    if (queuedVideo && videoRef.current && nextVideoRef.current) {
      console.log(`Switching to preloaded video: ${queuedVideo}`);
      setIsTransitioning(true);
      
      // Swap the videos
      const tempSrc = videoRef.current.src;
      videoRef.current.src = nextVideoRef.current.src;
      nextVideoRef.current.src = tempSrc;
      
      // Update state
      setCurrentVideoState(queuedVideo);
      setQueuedVideo(null);
      
      // Start playing the new video immediately (it's already loaded)
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setIsTransitioning(false);
      }).catch((error) => {
        console.error('Error playing preloaded video:', error);
        setIsTransitioning(false);
      });
    }
  }, [queuedVideo, currentVideo]);

  const handleVideoPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleVideoPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <VideoContext.Provider value={{
      currentVideo,
      isPlaying,
      setCurrentVideo,
      clearQueuedVideo,
      playVideo,
      pauseVideo,
      videoRef
    }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/media/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <video
        ref={videoRef}
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isTransitioning ? 0 : 1
        }}
        onEnded={handleVideoEnded}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
      />
      <video
        ref={nextVideoRef}
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isTransitioning ? 1 : 0
        }}
      />
      {children}
    </VideoContext.Provider>
  );
}; 