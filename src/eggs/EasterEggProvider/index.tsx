import React, { createContext, useContext } from 'react'

interface IEasterEgg {}

type EasterEggProviderProps = {
  children: React.ReactNode
}

const EasterEggContext = createContext<IEasterEgg>({} as IEasterEgg)
export const useEasterEgg = (): IEasterEgg => useContext(EasterEggContext)

const EasterEggProvider: React.FC<EasterEggProviderProps> = ({ children }) => {
  return <EasterEggContext.Provider value={{}}>{children}</EasterEggContext.Provider>
}

export default EasterEggProvider
