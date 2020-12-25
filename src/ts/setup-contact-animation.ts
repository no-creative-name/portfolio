import { Back, TimelineMax } from "gsap";

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupContactAnimation = (controller: any) => {
	const inTween = new TimelineMax()
		.to("#touchR", 1.2, { x: 10, })
		.to("#touchL", 0.3, { x: -10, ease: Back.easeOut });

	new ScrollMagic.Scene({
		triggerElement: "#contactLinksContainer",
		triggerHook: "onEnter",
		duration: "40%",
		offset: -100
	})
		.setTween(inTween)
		.addTo(controller);

	const bgTween = new TimelineMax()
		.to("main", 1.0, { backgroundColor: "#3A9AB6" });

	new ScrollMagic.Scene({
		triggerElement: "#contactLinksContainer",
    triggerHook: "onEnter",
    duration: "100%"
	})
		.setTween(bgTween)
		.addTo(controller);
}