import '../scss/styles.scss';
import { TweenMax } from 'gsap';
import Typed from 'typed.js';

const fitty = require('fitty').default;

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");
const controller = new ScrollMagic.Controller();

const considerMobileMenuBar = () => {
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
}

const initFitty = () => {
	const fontContainers = [].slice.call(document.querySelectorAll('.fontContainer'));
	fontContainers.map(fontContainer => 
		[].slice.call(fontContainer.children).map(fontDiv => fitty(fontDiv))
	);
}

const setupIntroAnimation = () => {
	const inTween = new TimelineMax()
		.from(".introContainer", 1.5, {scale: 0.5});

	new ScrollMagic.Scene({
		triggerElement: "#fc1",
		triggerHook: "onEnter",
		duration: "50%",
	})
		.setTween(inTween)
		.addTo(controller);


	const outTween = new TimelineMax()
		.to(".introContainer", 1.5, {rotationY: 90, scale: 0.8, opacity: 0});

	new ScrollMagic.Scene({
		triggerElement: "#fc2",
		triggerHook: "onLeave",
		duration: "50%",
		offset: 500
	})
		.setTween(outTween)
		.addTo(controller);
}

const setupWebDevAnimation = () => {
	const webDevTween = new TimelineMax().add(() => {
		new Typed('#webDev #content', {
			strings: ["/web/dev"],
			typeSpeed: 50
		});
  
	})

	new ScrollMagic.Scene({
		triggerElement: "#webDev",
		triggerHook: "onCenter",
		duration: 0,
	})
		.setTween(webDevTween)
		.addTo(controller);
}

const setupSkillAnimation = () => {
	const skillBubbles = [].slice.call(document.querySelectorAll('.skills__skillBubble'));

	const bubbleTween = new TweenMax
		.staggerFromTo(
			".skills__skillBubble",
			1,
			{left: "200%"},
			{left: 0, ease: Back.EaseInOut},
			0.15
		);
	new ScrollMagic.Scene({
		triggerElement: ".skills",
		triggerHook: "onEnter",
		duration: "40%",
		offset: 200
	})
		.setTween(bubbleTween)
		.addTo(controller);


	const percentageTimeline = new TimelineMax();

	skillBubbles.map(bubble => {
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
	
}

considerMobileMenuBar();
initFitty();
setupIntroAnimation();
setupWebDevAnimation();
setupSkillAnimation();