import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useVideo } from "../../lib/context/video-context";

export const WelcomeChapter = () => {
  const chapter = useRef<HTMLDivElement | null>();
  const { setCurrentVideo } = useVideo();
  const setCurrentVideoRef = useRef(setCurrentVideo);

  // Update the ref when setCurrentVideo changes
  useEffect(() => {
    setCurrentVideoRef.current = setCurrentVideo;
  }, [setCurrentVideo]);

  useEffect(() => {
    if (chapter.current) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: chapter.current,
        start: "top bottom",
        end: "bottom bottom",
        onEnterBack: () => {
          console.log("Welcome chapter entered back - clearing queued video");
          // Clear any queued video when scrolling back to welcome
          setCurrentVideoRef.current("");
        }
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []); // Empty dependency array - ScrollTrigger is created only once

  return (
    <div className="container" ref={(el) => chapter.current = el}>
      <h1>Kai Wissler</h1>
      <h2 className="headline-3">Web Developer</h2>
      <i className="arrow down"></i>
    </div>
  );
};
