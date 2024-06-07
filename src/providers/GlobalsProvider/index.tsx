import React, { createContext, useContext, ReactNode } from 'react'
import { Footer } from '@/types/Layout/Footer/types'
//import { SkillItem } from '@/types/Blocks/Skills/types'

export interface IGlobals {
  footer: Footer
  //skillsCollection?: SkillItem[]
}

export const GlobalsContext = createContext<IGlobals>({} as IGlobals)
export const useGlobals = (): IGlobals => useContext(GlobalsContext)

interface GlobalsProviderProps {
  footer: Footer
  //skillsCollection?: SkillItem[]
  children: ReactNode
}

export const GlobalsProvider: React.FC<GlobalsProviderProps> = ({
  footer,
  children,
  //skillsCollection,
}) => {
  return (
    <GlobalsContext.Provider value={{ footer /*skillsCollection*/ }}>
      {children}
    </GlobalsContext.Provider>
  )
}
