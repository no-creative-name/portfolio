import { TimelineMax } from "gsap";
const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupIntroAnimation = (controller: any) => {
  const inTween = new TimelineMax()
    .from(".introContainer", 1.5, { opacity: 0 });

  const bgTween = new TimelineMax()
    .to("main", 1.0, { backgroundColor: "#163740" });

  new ScrollMagic.Scene({
    triggerElement: "#welcomeContainer",
    triggerHook: "onEnter",
    duration: "50%",
  })
    .setTween(inTween)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#welcomeContainer",
    triggerHook: "onEnter",
    offset: 50,
    duration: "100%"
  })
    .setTween(bgTween)
    .addTo(controller);
}