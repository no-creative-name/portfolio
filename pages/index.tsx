import type { NextPage } from "next";
import Head from "next/head";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useLayoutEffect } from "react";
import { considerMobileMenuBar } from "../lib/consider-mobile-menu-bar";
import { IntroChapter } from "../components/chapters/intro";
import { AnimationContext } from "../lib/context/animation-context";
import { WelcomeChapter } from "../components/chapters/welcome";
import { WebDevChapter } from "../components/chapters/web-dev";
import { SkillsChapter } from "../components/chapters/skills";
import { ProjectsChapter } from "../components/chapters/projects";
import { ContactChapter } from "../components/chapters/contact";

const Home: NextPage = () => {
  const { gsap } = useContext(AnimationContext);

  useLayoutEffect(() => {
    considerMobileMenuBar();

    gsap.registerPlugin(ScrollTrigger);
  }, [gsap]);

  return (
    <div>
      <Head>
        <title>Kai Wissler</title>
        <meta name="description" content="Portfolio of Kai Wissler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <WelcomeChapter />
        <IntroChapter />
        <WebDevChapter />
        <SkillsChapter />
        <ProjectsChapter />
        <ContactChapter />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
