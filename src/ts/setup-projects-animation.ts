import { gsap } from "gsap";
import { BG_COLORS } from "./constants";

export const setupProjectsAnimation = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#projects-container",
        start: "top 300px",
        end: "bottom 100%",
        scrub: true,
      },
    })
    .from("#projects-container :nth-child(1)", {
      x: "-100vw",
      ease: "back-out",
    })
    .from("#projects-container :nth-child(2)", {
      x: "100vw",
      ease: "back-out",
    })
    .from("#projects-container :nth-child(3)", {
      x: "-100vw",
      ease: "back-out",
    })
    .from("#projects-container :nth-child(4)", {
      x: "100vw",
      ease: "back-out",
    })
    .from("#projects-container :nth-child(5)", {
      x: "-100vw",
      ease: "back-out",
    })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#projects-container",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    .from("main", {
      backgroundColor: BG_COLORS[3],
    })
    .to("main", {
      backgroundColor: BG_COLORS[4],
    });
};
