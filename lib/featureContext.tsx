import React, { createContext, useContext, useState } from 'react';
import { ContextProps } from "../interfaces"

export const FeatureContext = createContext<Partial<ContextProps>>({});

export const FeatureContextProvider: React.FC = ({children}) => {
  const [projectToFeature, setProjectToFeature] = useState(0);
  const [showFeature, setShowFeature] = useState(true);

  const openFeature = (id: number) => {
    setProjectToFeature(id);
    setShowFeature(true);
  }

  const closeFeature = () => {
    setShowFeature(false);
  }

  return (
    <FeatureContext.Provider 
      value={{projectToFeature, showFeature, openFeature, closeFeature}}>
        {children}
    </FeatureContext.Provider>
  )
}

export function useFeatureContext() {
  return useContext(FeatureContext)
}