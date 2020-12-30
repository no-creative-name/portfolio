import { Back, TimelineMax } from "gsap";
import { BG_COLORS } from "./constants";

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupContactAnimation = (controller: any) => {
	const inTween = new TimelineMax()
		.to("#touch-r", 1.2, { x: 10, })
		.to("#touch-l", 0.3, { x: -10, rotation: -5, ease: Back.easeOut })
		.to("#touch-l", 0.3, { rotation: 0, ease: Back.easeOut });

	new ScrollMagic.Scene({
		triggerElement: "#contact-links-container",
		triggerHook: "onEnter",
		duration: "40%",
		offset: -100
	})
		.setTween(inTween)
		.addTo(controller);

	const bgTween = new TimelineMax()
		.to("main", 1.0, { backgroundColor: BG_COLORS[5] });

	new ScrollMagic.Scene({
		triggerElement: "#contact-links-container",
		triggerHook: "onEnter",
		duration: "100%"
	})
		.setTween(bgTween)
		.addTo(controller);
}