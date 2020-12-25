import { Back, TimelineMax } from "gsap";
const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupIntroAnimation = (controller: any) => {
  const inTween = new TimelineMax()
    .from("#selfPortrait", 1.5, {
      width: 0,
      ease: Back.easeOut,
    });

  const bgTween = new TimelineMax()
    .to("main", 1.0, { backgroundColor: "#102c32" });

  new ScrollMagic.Scene({
    triggerElement: "#intro-container",
    triggerHook: "onCenter",
    duration: "30%",
  })
    .setTween(inTween)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#intro-container",
    triggerHook: "onCenter",
    duration: "100%"
  })
    .setTween(bgTween)
    .addTo(controller);
}