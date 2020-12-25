import { makeNumberStringComplete } from "./helpers/make-number-string-complete";
import { roundToNextMultiple } from "./helpers/round-to-next-multiple";

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupVideoAnimation = (controller: any) => {
  const video = (document.querySelector('#video--desktop') as HTMLImageElement);

  const videoScene = new ScrollMagic.Scene({
    triggerElement: "#video--desktop",
    triggerHook: "onEnter",
    duration: "200%",
  })
    .addTo(controller);

  videoScene.on('progress', (e: { progress: number }) => {
    const roundedProgress = Math.floor(e.progress * 150);
    video.src = `src/vid/walking-in-${roundedProgress > 0 ? makeNumberStringComplete(roundedProgress) : '001'}.png`
  })

}