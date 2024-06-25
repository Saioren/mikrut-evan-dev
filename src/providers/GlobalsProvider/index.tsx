import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'

export interface IGlobals {}

export const GlobalsContext = createContext<IGlobals>({} as IGlobals)

interface GlobalsProviderProps {
  children: ReactNode
}

export const GlobalsProvider: React.FC<GlobalsProviderProps> = ({ children }) => {
  return <GlobalsContext.Provider value={{}}>{children}</GlobalsContext.Provider>
}
