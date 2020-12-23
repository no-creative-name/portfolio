const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");

export const setupVideoAnimation = (controller: any) => {
  const video = (document.querySelector('#video') as HTMLImageElement);

  const videoScene = new ScrollMagic.Scene({
    triggerElement: "#video",
    triggerHook: "onEnter",
    duration: "200%",
  })
    .addTo(controller);

  const makeNumberStringComplete = (number: string) => {
    if (number.length === 3) return number;
    if (number.length === 2) return `0${number}`;
    if (number.length === 1) return `00${number}`;
  }

  videoScene.on('progress', (e: { progress: number }) => {
    const roundedProgress = Math.floor(e.progress * 150);
    video.src = `src/vid/walking-in-${e.progress > 0 ? makeNumberStringComplete((roundedProgress).toString()) : '001'}.png`
  })

}