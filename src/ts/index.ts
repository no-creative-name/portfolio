import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../scss/styles.scss';
import { considerMobileMenuBar } from './consider-mobile-menu-bar';
import { setupIntroAnimation } from './setup-intro-animation';
import { setupWebDevAnimation } from './setup-web-dev-animation';
import { setupSkillsAnimation } from './setup-skills-animation';
import { setupContactAnimation } from './setup-contact-animation';
import { setupImprint } from './setup-imprint';
import { setupProjectsAnimation } from './setup-projects-animation';

document.body.style.visibility = 'visible';

gsap.registerPlugin(ScrollTrigger);

considerMobileMenuBar();
setupIntroAnimation();
setupWebDevAnimation();
setupSkillsAnimation();
setupProjectsAnimation();
setupContactAnimation();
setupImprint();