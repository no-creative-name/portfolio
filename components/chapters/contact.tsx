import { useRef, useContext, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimationContext } from "../../lib/context/animation-context";
import { useVideo } from "../../lib/context/video-context";

export const ContactChapter = () => {
  const [isImprintVisible, setIsImprintVisible] = useState(false);
  const chapter = useRef<HTMLDivElement | null>();
  const touchElements = useRef<(HTMLParagraphElement | null)[]>([null, null]);
  const { gsap } = useContext(AnimationContext);
  const { setCurrentVideo } = useVideo();
  const setCurrentVideoRef = useRef(setCurrentVideo);

  // Update the ref when setCurrentVideo changes
  useEffect(() => {
    setCurrentVideoRef.current = setCurrentVideo;
  }, [setCurrentVideo]);

  useEffect(() => {
    if (chapter.current && touchElements.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: chapter.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        })
        .to(touchElements.current[1], { x: 10, duration: 1.2 })
        .to(touchElements.current[0], {
          x: -10,
          duration: 0.3,
          rotation: -5,
          ease: "back.out",
        })
        .to(touchElements.current[0], {
          rotation: 0,
          duration: 0.3,
          ease: "back.out",
        });
    }
  }, [gsap]);

  useEffect(() => {
    if (chapter.current) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: chapter.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          console.log("Contact chapter center reached");
          setCurrentVideoRef.current("/media/fourth.mp4");
        },
        onEnterBack: () => {
          console.log("Contact chapter center reached (back)");
          setCurrentVideoRef.current("/media/fourth.mp4");
        }
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []); // Empty dependency array - ScrollTrigger is created only once

  useEffect(() => {
    if (isImprintVisible) {
      window.scroll({
        top: document.body.scrollHeight,
      });
    }
  }, [isImprintVisible]);

  const onImprintTriggerClick = () => {
    if (isImprintVisible) {
      setIsImprintVisible(false);
    } else {
      setIsImprintVisible(true);
    }
  };

  return (
    <div className="container" ref={(el) => (chapter.current = el)}>
      <div>
        <p className="headline-3">i&apos;m looking forward to get</p>
        <div id="touch-container">
          <p
            className="headline-1"
            id="touch-l"
            ref={(el) => (touchElements.current[0] = el)}
          >
            in
          </p>
          <p
            className="headline-1"
            id="touch-r"
            ref={(el) => (touchElements.current[1] = el)}
          >
            touch
          </p>
        </div>
        <p className="headline-2">with you</p>
      </div>
      <div id="contact-links-container">
        <a
          className="contact-link"
          href="https://github.com/no-creative-name"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <svg
            id="github"
            width="1024"
            height="1024"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
              transform="scale(64)"
              fill="#FFFFFF"
            />
          </svg>
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/kai-wissler-54765a165/"
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin"
        >
          <svg
            id="linkedin"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            fill="#FFFFFF"
            viewBox="0 0 382 382"
            xmlSpace="preserve"
          >
            <path
              d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
L341.91,330.654L341.91,330.654z"
            />
          </svg>
        </a>
      </div>
     {/*  <div className="hidden-icon">
        <div id="spotify-hover"></div>
        <a
          href="https://open.spotify.com/artist/2NGEe8HEMFZSrgvfi5KmWS?si=cjMmMM_JTUK1ibrqKPwq_w"
          target="_blank"
          rel="noreferrer"
          aria-label="spotify"
        >
          <svg
            id="spotify"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            height="168px"
            width="168px"
            version="1.1"
            viewBox="0 0 168 168"
          >
            <path d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z" />
          </svg>
        </a>
      </div> */}

      <div className={isImprintVisible ? "visible" : ""} id="imprint-container">
        <p
          className={isImprintVisible ? "headline-2" : "headline-3"}
          onClick={() => onImprintTriggerClick()}
          id="imprint-trigger"
        >
          Imprint
        </p>
        <div className={`imprint${isImprintVisible ? " visible" : ""}`}>
          <br />
          <p className="headline-3">Kai Wissler</p>
          <p className="headline-3">Eva-Popper-Weg 8/73</p>
          <p className="headline-3">1020 Wien, Austria</p>
          <p className="headline-3">kai.wissler96@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
