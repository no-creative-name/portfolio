import { gsap } from "gsap";
import { BG_COLORS } from "./constants";

export const setupIntroAnimation = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#intro-container",
        start: "top center",
        end: "+300px",
        scrub: true,
      },
    })
    .from("#self-portrait", {
      width: 0,
      borderWidth: 0,
      ease: "back.out",
    })
    .to("#self-portrait", {
      width: 300,
      borderWidth: 10,
      ease: "back.out",
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#intro-container",
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
};
