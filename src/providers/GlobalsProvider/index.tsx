import React, { createContext, useContext, ReactNode } from 'react'
import { Footer } from '@/types/Layout/Footer/types'
import { SkillItem } from '@/types/Blocks/Skills/types'

export interface IGlobals {
  footer: Footer
}

export const GlobalsContext = createContext<IGlobals>({} as IGlobals)
export const useGlobals = (): IGlobals => useContext(GlobalsContext)

interface GlobalsProviderProps {
  footer: Footer
  skillsCollection?: SkillItem[]
  children: ReactNode
}

export const GlobalsProvider: React.FC<GlobalsProviderProps> = ({ footer, children }) => {
  return <GlobalsContext.Provider value={{ footer }}>{children}</GlobalsContext.Provider>
}
