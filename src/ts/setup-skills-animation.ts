
import { Back, TimelineMax, TweenMax } from 'gsap';
import { BG_COLORS } from './constants';

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupSkillsAnimation = (controller: any) => {
	const skills = document.querySelector('.skills');
	const skillBubbles = [].slice.call(document.querySelectorAll('.skills__bar'));
	const skillLegendSteps = [].slice.call(document.querySelectorAll('.skills__legend-step-marker'));

	const legendTimeline = new TimelineMax();
	const percentageTimeline = new TimelineMax();

	skillLegendSteps.map((step: HTMLElement) => {
		const baseHeight = skills.clientHeight + skillLegendSteps.length * 30 - 100;
		legendTimeline
			.to(step, 1.5, {
				height: `${baseHeight}px`,
			});
	});

	new ScrollMagic.Scene({
		triggerElement: ".skills",
		triggerHook: "onEnter",
		duration: "30%",
		offset: 300,
	})
		.setTween(legendTimeline)
		.addTo(controller);
		
	skillBubbles.map((bubble: HTMLElement) => {
		const percentage = bubble.getAttribute('data-percentage');
		const selector = `#${bubble.id} > .skills__bar-percentage`;

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
		.to("main", 1.0, { backgroundColor: BG_COLORS[3] });

	new ScrollMagic.Scene({
		triggerElement: ".skills",
		triggerHook: "onEnter",
		duration: "100%",
	})
		.setTween(bgTween)
		.addTo(controller);
}