import { useContext, useEffect, useRef } from "react";
import { BG_COLORS } from "../../lib/constants";
import { AnimationContext } from "../../lib/context/animation-context";

export const IntroChapter = () => {
  const chapter = useRef<HTMLDivElement | null>();
  const image = useRef<HTMLDivElement | null>();
  const { gsap } = useContext(AnimationContext);

  useEffect(() => {
    if (chapter.current && image.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: chapter.current,
            start: "top center",
            end: "+300px",
            scrub: true,
          },
        })
        .from(image.current, {
          width: 0,
          borderWidth: 0,
          ease: "back.out",
        })
        .to(image.current, {
          width: 300,
          borderWidth: 10,
          ease: "back.out",
        });

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
          backgroundColor: BG_COLORS[1],
        });
    }
  }, [gsap]);

  return (
    <div
      className="container"
      ref={(el) => (chapter.current = el)}
    >
      <p className="headline-3">Hi there!</p>
      <div className="portrait-wrapper">
        <div id="self-portrait" ref={(el) => (image.current = el)}/>
      </div>
      <p className="headline-2">I'm Kai.</p>
    </div>
  );
};
