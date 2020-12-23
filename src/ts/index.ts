import '../scss/styles.scss';
import { considerMobileMenuBar } from './consider-mobile-menu-bar';
import { setupIntroAnimation } from './setup-intro-animation';
import { setupVideoAnimation } from './setup-video-animation';
import { setupWebDevAnimation } from './setup-web-dev-animation';
import { setupSkillsAnimation } from './setup-skills-animation';
import { setupContactAnimation } from './setup-contact-animation';

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");
const controller = new ScrollMagic.Controller();

considerMobileMenuBar();
setupIntroAnimation(controller);
setupVideoAnimation(controller);
setupWebDevAnimation(controller);
setupSkillsAnimation(controller);
setupContactAnimation(controller);