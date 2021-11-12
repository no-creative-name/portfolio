import { useRef, useContext, useEffect } from "react";
import { BG_COLORS } from "../../lib/constants";
import { AnimationContext } from "../../lib/context/animation-context";

export const ProjectsChapter = () => {
  const chapter = useRef<HTMLDivElement | null>();
  const { gsap } = useContext(AnimationContext);

  useEffect(() => {
    if (chapter.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: chapter.current,
            start: "top 300px",
            end: "bottom 100%",
            scrub: true,
          },
        })
        .from(chapter.current.children[0], {
          x: "-100vw",
          ease: "back-out",
        })
        .from(chapter.current.children[1], {
          x: "100vw",
          ease: "back-out",
        })
        .from(chapter.current.children[2], {
          x: "-100vw",
          ease: "back-out",
        })
        .from(chapter.current.children[3], {
          x: "100vw",
          ease: "back-out",
        })
        .from(chapter.current.children[4], {
          x: "-100vw",
          ease: "back-out",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#projects-container",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .from("main", {
          backgroundColor: BG_COLORS[3],
        })
        .to("main", {
          backgroundColor: BG_COLORS[4],
        });
    }
  }, [gsap]);

  return (
    <div className="container" ref={(el) => (chapter.current = el)}>
      <p className="headline-3">some stuff i did for fun:</p>
      <a
        className="project-link headline-1"
        href="http://listify.kaiwissler.de"
        target="_blank"
      >
        Listify
      </a>
      <p className="headline-3">
        Create Spotify playlists by combining different parameters
      </p>
      <a
        className="project-link headline-1"
        href="http://chordr.kaiwissler.de"
        target="_blank"
      >
        Chordr
      </a>
      <p className="headline-3">
        Display how chords are played in different inversions on the piano
      </p>
    </div>
  );
};
