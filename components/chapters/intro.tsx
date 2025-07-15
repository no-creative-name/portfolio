import { useContext, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimationContext } from "../../lib/context/animation-context";
import { useVideo } from "../../lib/context/video-context";

export const IntroChapter = () => {
  const chapter = useRef<HTMLDivElement | null>();
  const { gsap } = useContext(AnimationContext);
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
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          console.log("Intro chapter center reached");
          setCurrentVideoRef.current("/media/first.mp4");
        },
        onEnterBack: () => {
          console.log("Intro chapter center reached (back)");
          setCurrentVideoRef.current("/media/first.mp4");
        }
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []); // Empty dependency array - ScrollTrigger is created only once

  return (
    <div
      className="container"
      ref={(el) => (chapter.current = el)}
    >
      <p className="headline-3" style={{zIndex: 10}}>Hi there!</p>
      <p className="headline-1" style={{zIndex: 10}}>I&apos;m Kai.</p>
    </div>
  );
};
