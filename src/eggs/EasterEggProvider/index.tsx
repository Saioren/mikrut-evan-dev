import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '../../utilities/useLocalStorage'
import toast from 'react-hot-toast'

interface IEasterEgg {
  easterEggGet: (n: number) => void
  eggCount: number
  setEggCount: React.Dispatch<React.SetStateAction<number>>
  hideEggOne: boolean
  setHideEggOne: React.Dispatch<React.SetStateAction<boolean>>
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
  const [eggOne, setEggOne] = useLocalStorage('eggOne', false)
  const [hideEggOne, setHideEggOne] = useLocalStorage('hideEggOne', false)
  // egg number one dependencies
  const [lockTrigger, setLockTrigger, removeLockTrigger] = useLocalStorage('lockTrigger', false)
  const [unlock, setUnlock, removeUnlock] = useLocalStorage('unlock', false)
  const [hideButton, setHideButton, removeButton] = useLocalStorage('hideButton', false)
  //egg number two dependencies

  //function to fire when aquiring easter egg
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
        setEggOne(true)
        initHideEggOne()
        break
    }
  }
  //hiding egg after completion
  function initHideEggOne() {
    setHideEggOne(true)
    removeLockTrigger()
    removeUnlock()
    removeButton()
  }

  return (
    <EasterEggContext.Provider
      value={{
        easterEggGet,
        eggCount,
        setEggCount,
        lockTrigger,
        setLockTrigger,
        unlock,
        setUnlock,
        hideButton,
        setHideButton,
        hideEggOne,
        setHideEggOne,
      }}
    >
      {children}
    </EasterEggContext.Provider>
  )
}

export default EasterEggProvider
