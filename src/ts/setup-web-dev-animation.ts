import { TimelineMax } from 'gsap';
import Typed from 'typed.js';

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupWebDevAnimation = (controller: any) => {
  const webDevTween = new TimelineMax().add(() => {
    new Typed('#webDev #content', {
      strings: ["/web/dev"],
      typeSpeed: 50
    });
  });
  const bgTween = new TimelineMax()
    .to("main", 1.0, { backgroundColor: "#235867" });

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