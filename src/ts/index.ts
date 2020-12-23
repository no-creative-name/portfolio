import '../scss/styles.scss';
import { Back, TimelineMax, TweenMax } from 'gsap';
import Typed from 'typed.js';

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

const setupIntroAnimation = () => {
	const inTween = new TimelineMax()
		.from(".introContainer", 1.5, {opacity: 0});

	const bgTween = new TimelineMax()
		.to("main", 1.0, {backgroundColor: "#163740"});
	
	new ScrollMagic.Scene({
		triggerElement: "#c1",
		triggerHook: "onEnter",
		duration: "50%",
	})
		.setTween(inTween)
		.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#c1",
		triggerHook: "onEnter",
		offset: 50
	})
		.setTween(bgTween)
		.addTo(controller);

	const video = (document.querySelector('#video') as HTMLImageElement);

	const videoScene = new ScrollMagic.Scene({
		triggerElement: "#video",
		triggerHook: "onEnter",
		duration: "200%",
	})
	.addTo(controller);

	const makeNumberStringComplete = (number: string) => {
		if(number.length === 3) return number;
		if(number.length === 2) return `0${number}`;
		if(number.length === 1) return `00${number}`;
	}

	videoScene.on('progress', (e: {progress: number}) => {
		const roundedProgress = Math.floor(e.progress * 150);
		video.src = `src/vid/walking-in-${e.progress > 0 ? makeNumberStringComplete((roundedProgress).toString()) : '001'}.png`
	})
}

const setupWebDevAnimation = () => {
	const webDevTween = new TimelineMax().add(() => {
		new Typed('#webDev #content', {
			strings: ["/web/dev"],
			typeSpeed: 50
		});
	});
	const bgTween = new TimelineMax()
		.to("main", 1.0, {backgroundColor: "#235867"});

	new ScrollMagic.Scene({
		triggerElement: "#webDev",
		triggerHook: "onCenter",
		duration: 0,
	})
		.setTween(webDevTween)
		.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#webDev",
		triggerHook: "onEnter",
	})
		.setTween(bgTween)
		.addTo(controller);
}

const setupSkillAnimation = () => {
	const skillBubbles = [].slice.call(document.querySelectorAll('.skills__skillBubble'));

	const bubbleTween = TweenMax
		.staggerFromTo(
			".skills__skillBubble",
			1,
			{left: "200%"},
			{left: 0, ease: Back.easeInOut},
			0.15
		);
	new ScrollMagic.Scene({
		triggerElement: ".skills",
		triggerHook: "onEnter",
		duration: "50%",
		offset: 100
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
		.to("main", 1.0, {backgroundColor: "#2F798E"});
		
	new ScrollMagic.Scene({
		triggerElement: ".skills",
		triggerHook: "onEnter",
	})
		.setTween(bgTween)
		.addTo(controller);
}

const setupContactAnimation = () => {
	const inTween = new TimelineMax()
		.to("#touch", 0.8, {x: "+=20", yoyo: true, repeat: 2})
		.to("#touch", 0.8, {x: "-=20", yoyo: true, repeat: 2})
		.to("#touch", 0.8, {x: 0});

	new ScrollMagic.Scene({
		triggerElement: "#c4",
		triggerHook: "onEnter",
		duration: "40%",
		offset: 100
	})
		.setTween(inTween)
		.addTo(controller);

	const bgTween = new TimelineMax()
		.to("main", 1.0, {backgroundColor: "#3A9AB6"});

	new ScrollMagic.Scene({
		triggerElement: "#c4",
		triggerHook: "onEnter",
	})
		.setTween(bgTween)
		.addTo(controller);
}

considerMobileMenuBar();
setupIntroAnimation();
setupWebDevAnimation();
setupSkillAnimation();
setupContactAnimation();