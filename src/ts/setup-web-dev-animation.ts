import { gsap } from "gsap";
import { BG_COLORS } from "./constants";

const completeString = "/web/dev";

export const setupWebDevAnimation = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".code-box",
        start: "bottom 110%",
        end: "center center",
        scrub: true,
        onUpdate: (self) => {
          const codeBox = document.querySelector(".code-box__content");
          const numOfChars = completeString.split("").length;
          codeBox.innerHTML = completeString.slice(
            0,
            Math.floor(numOfChars * self.progress)
          );
        },
      },
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#web-dev-container",
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
};
