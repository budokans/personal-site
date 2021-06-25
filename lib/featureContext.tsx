import React, { useEffect, useRef, useState } from "react";
import { ContextType } from "../interfaces";
import { createCtx } from "./createCtx";

const [useFeatureContext, CtxProvider] = createCtx<ContextType>();
export { useFeatureContext };

export const FeatureContextProvider: React.FC = ({ children }) => {
  const [projectToFeature, setProjectToFeature] = useState(0);
  const [showFeature, setShowFeature] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const openFeature = (id: number) => {
    setProjectToFeature(id);
    setShowFeature(true);
  };

  const closeFeature = () => {
    setShowFeature(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (node && node.current && node.current.contains(target)) {
      // inside click
      return;
    }
    // outside click
    setShowFeature(false);
  };

  useEffect(() => {
    if (showFeature) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFeature]);

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = showFeature
      ? "hidden"
      : "visible";
  }, [showFeature]);

  return (
    <CtxProvider
      value={{ projectToFeature, showFeature, openFeature, closeFeature, node }}
    >
      {children}
    </CtxProvider>
  );
};
