import React, { useEffect, useRef, useState } from 'react';
import { ContextType } from "../interfaces"

export function createCtx<ContextType>() {
  const ctx = React.createContext<
    ContextType | undefined
  >(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c)
      throw new Error(
        "useCtx must be inside a Provider with a value"
      );
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export const [useFeatureContext, CtxProvider] = createCtx<
  ContextType
>();

type Props = {
  children: React.ReactNode;
};

export const FeatureContextProvider = ({children}: Props) => {
  const [projectToFeature, setProjectToFeature] = useState(0);
  const [showFeature, setShowFeature] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const openFeature = (id: number) => {
    setProjectToFeature(id);
    setShowFeature(true);
  }

  const closeFeature = () => {
    setShowFeature(false);
  }

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
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFeature]);

  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflow = showFeature ? "hidden" : "visible";
  }, [showFeature])

  return (
    <CtxProvider 
      value={{projectToFeature, showFeature, openFeature, closeFeature, node }}>
        {children}
    </CtxProvider>
  )
}