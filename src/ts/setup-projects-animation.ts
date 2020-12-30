import { Back, TimelineMax } from "gsap";
import { BG_COLORS } from "./constants";

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupProjectsAnimation = (controller: any) => {
  const inTween = new TimelineMax()
    .from("#projects-container :nth-child(1)", 1.5, {
      x: "-100vw",
      ease: Back.easeOut,
    })
    .from("#projects-container :nth-child(2)", 1.5, {
      x: "100vw",
      ease: Back.easeOut,
    })
    .from("#projects-container :nth-child(3)", 1.5, {
      x: "-100vw",
      ease: Back.easeOut,
    })
    .from("#projects-container :nth-child(4)", 1.5, {
      x: "100vw",
      ease: Back.easeOut,
    })
    .from("#projects-container :nth-child(5)", 1.5, {
      x: "-100vw",
      ease: Back.easeOut,
    });

	new ScrollMagic.Scene({
    triggerElement: "#projects-container",
    triggerHook: "onEnter",
    duration: "80%",
    offset: 200,
	})
		.setTween(inTween)
		.addTo(controller);

	const bgTween = new TimelineMax()
		.to("main", 1.0, { backgroundColor: BG_COLORS[4] });

	new ScrollMagic.Scene({
		triggerElement: "#projects-container",
		triggerHook: "onEnter",
		duration: "100%"
	})
		.setTween(bgTween)
		.addTo(controller);
}