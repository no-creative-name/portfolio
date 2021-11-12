import { useContext, useRef, useEffect } from "react";
import { BG_COLORS } from "../../lib/constants";
import { AnimationContext } from "../../lib/context/animation-context";

export const WelcomeChapter = () => {
  const { gsap } = useContext(AnimationContext);
  const chapter = useRef<HTMLDivElement | null>();

  useEffect(() => {
    if (chapter.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: chapter.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .from("main", {
          backgroundColor: BG_COLORS[0],
        })
        .to("main", {
          backgroundColor: BG_COLORS[0],
        });
    }
  }, [gsap]);

  return (
    <div className="container" ref={(el) => chapter.current = el}>
      <h1>Kai Wißler</h1>
      <h2 className="headline-3">Web Developer</h2>
      <i className="arrow down"></i>
    </div>
  );
};
