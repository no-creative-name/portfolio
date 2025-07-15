import { useContext, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimationContext } from "../../lib/context/animation-context";
import { useVideo } from "../../lib/context/video-context";

const TYPED_STRING = "/web/dev";

export const WebDevChapter = () => {
  const chapter = useRef<HTMLDivElement | null>();
  const codeBox = useRef<HTMLSpanElement | null>();
  const { gsap } = useContext(AnimationContext);
  const { setCurrentVideo } = useVideo();
  const setCurrentVideoRef = useRef(setCurrentVideo);

  // Update the ref when setCurrentVideo changes
  useEffect(() => {
    setCurrentVideoRef.current = setCurrentVideo;
  }, [setCurrentVideo]);

  useEffect(() => {
    if (chapter.current && codeBox.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: codeBox.current,
          start: "bottom 110%",
          end: "center 70%",
          scrub: true,
          onUpdate: (self) => {
            if (codeBox.current) {
              const numOfChars = TYPED_STRING.split("").length;
              codeBox.current.innerHTML = TYPED_STRING.slice(
                0,
                Math.floor(numOfChars * self.progress)
              );
            }
          },
        },
      });
    }
  }, [gsap]);

  useEffect(() => {
    if (chapter.current) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: chapter.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          console.log("Web dev chapter center reached");
          setCurrentVideoRef.current("/media/second.mp4");
        },
        onEnterBack: () => {
          console.log("Web dev chapter center reached (back)");
          setCurrentVideoRef.current("/media/second.mp4");
        }
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []); // Empty dependency array - ScrollTrigger is created only once

  return (
    <div className="container" ref={(el) => (chapter.current = el)}>
      <p className="headline-2">my profession:</p>
      <div className="code-box" >
        <span className="code-box__content" ref={(el) => (codeBox.current = el)}></span>
        <span className="code-box__caret"></span>
      </div>
    </div>
  );
};
