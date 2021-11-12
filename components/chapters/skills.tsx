import { useRef, useContext, useEffect } from "react";
import { BG_COLORS } from "../../lib/constants";
import { AnimationContext } from "../../lib/context/animation-context";

export const SkillsChapter = () => {
  const chapter = useRef<HTMLDivElement | null>();
  const skills = useRef<HTMLDivElement | null>();
  const { gsap } = useContext(AnimationContext);

  useEffect(() => {
    if (chapter.current && skills.current) {
      const skillBubbles = [].slice.call(
        document.querySelectorAll(".skills__bar")
      );
      const skillLegendSteps = [].slice.call(
        document.querySelectorAll(".skills__legend-step-marker")
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: skills.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: true,
        },
      });

      skillLegendSteps.map((step: HTMLElement) => {
        if (skills.current) {
          const baseHeight =
            skills.current.clientHeight + skillLegendSteps.length * 30 - 100;
          timeline.to(step, {
            duration: 1.5,
            height: `${baseHeight}px`,
          });
        }
      });

      skillBubbles.map((bubble: HTMLElement) => {
        const percentage = bubble.getAttribute("data-percentage");
        const selector = `#${bubble.id} > .skills__bar-percentage`;

        timeline.to(selector, {
          duration: 1.5,
          width: `${percentage}%`,
        });
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
          backgroundColor: BG_COLORS[2],
          ease: "",
        })
        .to("main", {
          backgroundColor: BG_COLORS[3],
          ease: "",
        });
    }
  }, [gsap]);

  return (
    <div className="container" ref={(el) => (chapter.current = el)}>
      <p className="headline-3">i've been</p>
      <p className="headline-2">coding since 2015</p>
      <p className="headline-3">and here's what i've learned so far:</p>
      <div className="skills" ref={(el) => (skills.current = el)}>
        <div className="skills__legend">
          <div className="skills__legend-step">
            <span>Baby Steps</span>
            <div className="skills__legend-step-marker"></div>
          </div>
          <div className="skills__legend-step">
            <span>Walking</span>
            <div className="skills__legend-step-marker"></div>
          </div>
          <div className="skills__legend-step">
            <span>Jogging</span>
            <div className="skills__legend-step-marker"></div>
          </div>
          <div className="skills__legend-step">
            <span>Running</span>
            <div className="skills__legend-step-marker"></div>
          </div>
          <div className="skills__legend-step">
            <span>Usain Bolt</span>
            <div className="skills__legend-step-marker"></div>
          </div>
        </div>
        <div className="skills__bar" id="skill-bubble-1" data-percentage="85">
          <div className="skills__bar-percentage"></div>
          <span>JavaScript</span>
        </div>
        <div className="skills__bar" id="skill-bubble-2" data-percentage="85">
          <div className="skills__bar-percentage"></div>
          <span>TypeScript</span>
        </div>
        <div className="skills__bar" id="skill-bubble-3" data-percentage="75">
          <div className="skills__bar-percentage"></div>
          <span>React</span>
        </div>
        <div className="skills__bar" id="skill-bubble-4" data-percentage="50">
          <div className="skills__bar-percentage"></div>
          <span>Web Components</span>
        </div>
        <div className="skills__bar" id="skill-bubble-5" data-percentage="75">
          <div className="skills__bar-percentage"></div>
          <span>SCSS</span>
        </div>
        <div className="skills__bar" id="skill-bubble-6" data-percentage="75">
          <div className="skills__bar-percentage"></div>
          <span>HTML5</span>
        </div>
      </div>
    </div>
  );
};
