import { Back, TimelineMax } from "gsap";
const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupDescriptionAnimation = (controller: any) => {
  const inTween = new TimelineMax()
    .from("#descriptionContainer :nth-child(1)", 1.5, {
      x: "-100vw",
      ease: Back.easeOut,
    })
    .from("#descriptionContainer :nth-child(2)", 1.5, {
      x: "-100vw",
      ease: Back.easeOut,
    })
    .from("#descriptionContainer :nth-child(3)", 1.5, {
      x: "-100vw",
      ease: Back.easeOut,
    })
    .from("#descriptionContainer :nth-child(4)", 1.5, {
      x: "-100vw",
      ease: Back.easeOut,
    })
    .from("#descriptionContainer :nth-child(5)", 1.5, {
      x: "-100vw",
      ease: Back.easeOut,
    });

  const bgTween = new TimelineMax()
    .to("main", 1.0, { backgroundColor: "#235867" });

  new ScrollMagic.Scene({
    triggerElement: "#descriptionContainer",
    triggerHook: "onEnter",
    duration: "80%",
    offset: 200,
  })
    .setTween(inTween)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#descriptionContainer",
    triggerHook: "onCenter",
    duration: "100%"
  })
    .setTween(bgTween)
    .addTo(controller);
}