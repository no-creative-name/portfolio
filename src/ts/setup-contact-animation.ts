import { TimelineMax } from "gsap";

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupContactAnimation = (controller: any) => {
	const inTween = new TimelineMax()
		.to("#touch", 0.8, { x: "+=20", yoyo: true, repeat: 2 })
		.to("#touch", 0.8, { x: "-=20", yoyo: true, repeat: 2 })
		.to("#touch", 0.8, { x: 0 });

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