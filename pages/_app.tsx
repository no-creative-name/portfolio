import "../styles/globals.css";
import "../styles/home.css";
import type { AppProps } from "next/app";
import { AnimationContextProvider } from "../lib/context/animation-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimationContextProvider>
      <Component {...pageProps} />
    </AnimationContextProvider>
  );
}

export default MyApp;
