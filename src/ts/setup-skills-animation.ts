import { gsap } from "gsap";
import { BG_COLORS } from "./constants";

export const setupSkillsAnimation = () => {
  const skills = document.querySelector(".skills");
  const skillBubbles = [].slice.call(document.querySelectorAll(".skills__bar"));
  const skillLegendSteps = [].slice.call(
    document.querySelectorAll(".skills__legend-step-marker")
  );

  const timeline = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "top 70%",
        end: "bottom 90%",
        scrub: true,
      },
    })

  skillLegendSteps.map((step: HTMLElement) => {
    const baseHeight = skills.clientHeight + skillLegendSteps.length * 30 - 100;
    timeline.to(step, {
      duration: 1.5,
      height: `${baseHeight}px`,
    });
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
        trigger: "#skills-container",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    .from("main", {
      backgroundColor: BG_COLORS[2],
      ease: '',
    })
    .to("main", {
      backgroundColor: BG_COLORS[3],
      ease: '',
    });
};
