import '../scss/styles.scss';
import { considerMobileMenuBar } from './consider-mobile-menu-bar';
import { setupIntroAnimation } from './setup-intro-animation';
import { setupWebDevAnimation } from './setup-web-dev-animation';
import { setupSkillsAnimation } from './setup-skills-animation';
import { setupContactAnimation } from './setup-contact-animation';
import { setupImprint } from './setup-imprint';
import { setupProjectsAnimation } from './setup-projects-animation';

const ScrollMagic = require('scrollmagic');
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");
const controller = new ScrollMagic.Controller();

document.body.style.visibility = 'visible';

considerMobileMenuBar();
setupIntroAnimation(controller);
setupWebDevAnimation(controller);
setupProjectsAnimation(controller);
setupSkillsAnimation(controller);
setupContactAnimation(controller);
setupImprint();