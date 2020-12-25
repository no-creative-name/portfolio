import { TimelineMax } from 'gsap';

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

const completeString = '/web/dev';

export const setupWebDevAnimation = (controller: any) => {
  const codeBox = document.querySelector('.code-box__content');
  const bgTween = new TimelineMax()
    .to("main", 1.0, { backgroundColor: "#163740" });

  new ScrollMagic.Scene({
    triggerElement: ".code-box",
    triggerHook: "onEnter",
    duration: "30%",
  })
    .on('progress', (e: any) => {
      const numOfChars = completeString.split('').length;
      codeBox.innerHTML = completeString.slice(0, Math.floor(numOfChars * e.progress));
    })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: ".code-box",
    triggerHook: "onEnter",
    duration: "100%"
  })
    .setTween(bgTween)
    .addTo(controller);
}