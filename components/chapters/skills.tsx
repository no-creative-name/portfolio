import { useRef, useContext, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimationContext } from "../../lib/context/animation-context";
import { useVideo } from "../../lib/context/video-context";

export const SkillsChapter = () => {
  const chapter = useRef<HTMLDivElement | null>();
  const skills = useRef<HTMLDivElement | null>();
  const { gsap } = useContext(AnimationContext);
  const { setCurrentVideo } = useVideo();
  const setCurrentVideoRef = useRef(setCurrentVideo);

  // Update the ref when setCurrentVideo changes
  useEffect(() => {
    setCurrentVideoRef.current = setCurrentVideo;
  }, [setCurrentVideo]);

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
    }
  }, [gsap]);

  useEffect(() => {
    if (chapter.current) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: chapter.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          console.log("Skills chapter center reached");
          setCurrentVideoRef.current("/media/third.mp4");
        },
        onEnterBack: () => {
          console.log("Skills chapter center reached (back)");
          setCurrentVideoRef.current("/media/third.mp4");
        }
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []); // Empty dependency array - ScrollTrigger is created only once

  return (
    <div className="container" ref={(el) => (chapter.current = el)}>
      <p className="headline-3">i&apos;ve been</p>
      <p className="headline-2">coding since 2015</p>
      <p className="headline-3">
        and here&apos;s what i&apos;ve learned so far:
      </p>
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
        <div className="skills__bar" id="skill-bubble-1" data-percentage="90">
          <div className="skills__bar-percentage"></div>
          <span>🎨</span>
          <span>Polishing Frontend</span>
        </div>
        <div className="skills__bar" id="skill-bubble-2" data-percentage="80">
          <div className="skills__bar-percentage"></div>
          <span>👥</span>
          <span>Managing Teams & Stakeholders</span>
        </div>
        <div className="skills__bar" id="skill-bubble-3" data-percentage="80">
          <div className="skills__bar-percentage"></div>
          <span>🔧</span>
          <span>Building Backend</span>
        </div>
        <div className="skills__bar" id="skill-bubble-4" data-percentage="70">
          <div className="skills__bar-percentage"></div>
          <span>🏗️</span>
          <span>Handling Infrastructure</span>
        </div>
        <div className="skills__bar" id="skill-bubble-5" data-percentage="15">
          <div className="skills__bar-percentage"></div>
          <span>🚗</span>
          <span>Parallel Parking</span>
        </div>
      </div>
    </div>
  );
};
