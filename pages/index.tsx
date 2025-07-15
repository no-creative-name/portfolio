import type { NextPage } from "next";
import Head from "next/head";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useLayoutEffect } from "react";
import { considerMobileMenuBar } from "../lib/consider-mobile-menu-bar";
import { IntroChapter } from "../components/chapters/intro";
import { AnimationContext } from "../lib/context/animation-context";
import { VideoProvider } from "../lib/context/video-context";
import { WelcomeChapter } from "../components/chapters/welcome";
import { WebDevChapter } from "../components/chapters/web-dev";
import { SkillsChapter } from "../components/chapters/skills";
import { ContactChapter } from "../components/chapters/contact";

const Home: NextPage = () => {
  const { gsap } = useContext(AnimationContext);

  useLayoutEffect(() => {
    considerMobileMenuBar();

    gsap.registerPlugin(ScrollTrigger);
    
    // Single background color animation that spans the entire page
    gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    })
  }, [gsap]);

  return (
    <div>
      <Head>
        <title>Kai Wissler</title>
        <meta name="description" content="Portfolio of Kai Wissler" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/BebasNeue-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <VideoProvider>
        <main>
          <WelcomeChapter />
          <IntroChapter />
          <WebDevChapter />
          <SkillsChapter />
          <ContactChapter />
        </main>
      </VideoProvider>

      <footer></footer>
    </div>
  );
};

export default Home;
