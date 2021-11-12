import { useContext, useEffect, useRef } from "react";
import { BG_COLORS } from "../../lib/constants";
import { AnimationContext } from "../../lib/context/animation-context";

const TYPED_STRING = "/web/dev";

export const WebDevChapter = () => {
  const chapter = useRef<HTMLDivElement | null>();
  const codeBox = useRef<HTMLDivElement | null>();
  const { gsap } = useContext(AnimationContext);

  useEffect(() => {
    if (chapter.current && codeBox.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: codeBox.current,
          start: "bottom 110%",
          end: "center center",
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
          backgroundColor: BG_COLORS[1],
        })
        .to("main", {
          backgroundColor: BG_COLORS[2],
        });
    }
  }, [gsap]);

  return (
    <div className="container" ref={(el) => (chapter.current = el)}>
      <p className="headline-2">my profession:</p>
      <div className="code-box" ref={(el) => (codeBox.current = el)}>
        <span className="code-box__content"></span>
        <span className="code-box__caret"></span>
      </div>
    </div>
  );
};
