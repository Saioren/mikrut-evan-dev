import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '../../utilities/useLocalStorage'
import toast from 'react-hot-toast'

interface IEasterEgg {
  easterEggGet: (n: number) => void
  eggCount: number
  totalEggs: number
  setRevealEggOne: React.Dispatch<React.SetStateAction<boolean>>
  revealEggOne: boolean
  setEggCount: React.Dispatch<React.SetStateAction<number>>
  eggOne: boolean
  eggOneAquired: Date | null
  setEggOneAquired: React.Dispatch<React.SetStateAction<Date | null>>
  lockTrigger: boolean
  setLockTrigger: React.Dispatch<React.SetStateAction<boolean>>
  unlock: boolean
  setUnlock: React.Dispatch<React.SetStateAction<boolean>>
  hideButton: boolean
  setHideButton: React.Dispatch<React.SetStateAction<boolean>>
}

type EasterEggProviderProps = {
  children: React.ReactNode
}

const EasterEggContext = createContext<IEasterEgg>({} as IEasterEgg)
export const useEasterEgg = (): IEasterEgg => useContext(EasterEggContext)

const EasterEggProvider: React.FC<EasterEggProviderProps> = ({ children }) => {
  // egg count
  const totalEggs = 1
  const [eggCount, setEggCount] = useLocalStorage('eggCount', 0)
  // each individual egg
  const [revealEggOne, setRevealEggOne] = useLocalStorage('revealEggOne', false)
  const [eggOne, setEggOne] = useLocalStorage('eggOne', false)
  const [eggOneAquired, setEggOneAquired] = useLocalStorage<Date | null>('eggOneAquired', null)
  // egg number one dependencies
  const [lockTrigger, setLockTrigger, removeLockTrigger] = useLocalStorage('lockTrigger', false)
  const [unlock, setUnlock, removeUnlock] = useLocalStorage('unlock', false)
  const [hideButton, setHideButton, removeButton] = useLocalStorage('hideButton', false)
  // egg number two dependencies

  // function to fire when acquiring easter egg
  function easterEggGet(n: number) {
    setEggCount((prevEggCount) => {
      const newEggCount = prevEggCount + 1
      toast.success(`Acquired Easter Egg #${n} | (${newEggCount}/${totalEggs})`, {
        duration: 4000,
      })
      return newEggCount
    })

    switch (n) {
      case 1:
        initHideEggOne()
        break
      // Add cases for other eggs if needed
      default:
        break
    }
  }

  // hiding egg after completion
  function initHideEggOne() {
    setEggOne(true)
    setEggOneAquired(new Date())
    removeLockTrigger()
    removeUnlock()
    removeButton()
  }

  return (
    <EasterEggContext.Provider
      value={{
        easterEggGet,
        eggCount,
        totalEggs,
        setEggCount,
        revealEggOne,
        setRevealEggOne,
        eggOne,
        lockTrigger,
        setLockTrigger,
        unlock,
        setUnlock,
        hideButton,
        setHideButton,
        eggOneAquired,
        setEggOneAquired,
      }}
    >
      {children}
    </EasterEggContext.Provider>
  )
}

export default EasterEggProvider
