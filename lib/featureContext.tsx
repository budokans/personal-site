import React, { useState } from 'react';
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

  const openFeature = (id: number) => {
    setProjectToFeature(id);
    setShowFeature(true);
  }

  const closeFeature = () => {
    setShowFeature(false);
  }

  return (
    <CtxProvider 
      value={{projectToFeature, showFeature, openFeature, closeFeature}}>
        {children}
    </CtxProvider>
  )
}