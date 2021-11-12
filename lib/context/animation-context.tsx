import { gsap } from "gsap";
import React from "react";

interface AnimationContext {
  gsap: GSAP;
}

const defaultValue = {
  gsap,
};

export const AnimationContext =
  React.createContext<AnimationContext>(defaultValue);

export const AnimationContextProvider: React.FC = ({ children }) => {
  return (
    <AnimationContext.Provider value={defaultValue}>
      {children}
    </AnimationContext.Provider>
  );
};
