import '../scss/styles.scss';

const fitty = require('fitty').default;

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
  
const fontContainers = [].slice.call(document.querySelectorAll('.fontContainer'));

fontContainers.map(fontContainer => [].slice.call(fontContainer.children).map(fontDiv => fitty(fontDiv)));

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");
const controller = new ScrollMagic.Controller();

var tween = new TimelineMax().from(".fontContainer", 1.5, {rotationY: 90, scale: 0.8, opacity: 0});

// build scene
new ScrollMagic.Scene({
					triggerElement: "#fc1",
					triggerHook: "onEnter", // show, when scrolled 10% into view
					duration: "100%", // use full viewport
				})
				.setTween(tween)
				.addIndicators({name: "GSAP"}) // add indicators (requires plugin)
				.addTo(controller);