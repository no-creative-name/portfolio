
import { Back, TimelineMax, TweenMax } from 'gsap';

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupSkillsAnimation = (controller: any) => {
	const skillBubbles = [].slice.call(document.querySelectorAll('.skills__skillBubble'));

	const bubbleTween = TweenMax
		.staggerFromTo(
			".skills__skillBubble",
			1,
			{ left: "200%", ease: Back.easeInOut },
			{ left: 0, ease: Back.easeOut },
			0.15
		);
	new ScrollMagic.Scene({
		triggerElement: ".skills",
		triggerHook: "onEnter",
		duration: "50%",
	})
		.setTween(bubbleTween)
		.addTo(controller);


	const percentageTimeline = new TimelineMax();

	skillBubbles.map((bubble: HTMLElement) => {
		const percentage = bubble.getAttribute('data-percentage');
		const selector = `#${bubble.id} > .percentage`;

		percentageTimeline
			.to(selector, 1.5, {
				width: `${percentage}%`,
			});
	});
	new ScrollMagic.Scene({
		triggerElement: ".skills",
		triggerHook: "onEnter",
		duration: "30%",
		offset: 200
	})
		.setTween(percentageTimeline)
		.addTo(controller);

	const bgTween = new TimelineMax()
		.to("main", 1.0, { backgroundColor: "#2F798E" });

	new ScrollMagic.Scene({
		triggerElement: ".skills",
		triggerHook: "onEnter",
    duration: "100%",
	})
		.setTween(bgTween)
		.addTo(controller);
}