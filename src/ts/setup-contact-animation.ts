import { gsap } from "gsap";
import { BG_COLORS } from "./constants";

export const setupContactAnimation = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#contact-container",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    })
    .to("#touch-r", { x: 10, duration: 1.2 })
    .to("#touch-l", { x: -10, duration: 0.3, rotation: -5, ease: "back.out" })
    .to("#touch-l", { rotation: 0, duration: 0.3, ease: "back.out" })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#contact-container",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      })
      .from("main", {
        backgroundColor: BG_COLORS[4],
      })
      .to("main", {
        backgroundColor: BG_COLORS[5],
      });
};
