import React, { forwardRef, useEffect, useRef, useState } from 'react'
import classes from './index.module.scss'
import { useEasterEgg } from '../EasterEggProvider'
import { BsQuestionCircleFill, BsUnlockFill } from 'react-icons/bs'
import { AiOutlineQuestion } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { FaArrowLeft } from 'react-icons/fa'

type EggObject = {
  eggName: boolean
  eggImage: React.ReactElement
  eggNumber: number
}

const EggModal = forwardRef<HTMLDivElement>((props, ref) => {
  const { eggOne, eggCount, totalEggs, eggOneAquired } = useEasterEgg()
  const hideEggTwo = false
  const [eggInfo, setEggInfo] = useState<number>(0)
  const [explaining, setExplaining] = useState(false)
  const eggRef = useRef()

  const eggPlural = totalEggs > 1 ? 's' : ''

  function displayEggInfo(egg: EggObject) {
    setEggInfo((prevState) => (prevState === 0 ? egg.eggNumber : prevState > 0 ? 0 : prevState))
  }

  function cantAccessEgg(n: number) {
    toast.error(`You have not found Easter Egg #${n} yet.`)
  }

  const EasterEgg = (props: any) => {
    return <div className={props.className}>{props.children}</div>
  }

  function formatDate(date: Date) {
    const daySuffixes = ['th', 'st', 'nd', 'rd']
    const day = date.getDate()
    const suffix =
      day % 10 <= 3 && day % 100 !== 11 && day % 100 !== 12 && day % 100 !== 13
        ? daySuffixes[day % 10]
        : daySuffixes[0]

    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString('en-US', options)
    const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })

    return `${formattedDate.replace(/\d+/, day + suffix)}, ${formattedTime}`
  }

  const easterEggs = [
    {
      eggTitle: 'The Lock Egg',
      eggName: eggOne,
      eggImage: React.createElement(EasterEgg, { className: classes.eggIcon }, <BsUnlockFill />),
      eggNumber: 1,
      eggDescription:
        'The first of the eggs; evasive yet straight-forward. Likes causing mischief and enjoys dark places.',
      eggAquired: eggOneAquired,
    },
    /*{
      eggTitle: 'Placeholder',
      eggName: hideEggTwo,
      eggImage: React.createElement(EasterEgg, { className: classes.eggIcon }, <BsUnlockFill />),
      eggNumber: 2,
    },*/
  ]

  return (
    <div ref={ref} className={classes.eggModal}>
      <div className={classes.relative}>
        <div className={classes.header}>
          <p>Welcome to your</p>
          <h4>Easter Egg Collection</h4>
        </div>
        <div>
          {eggCount === totalEggs ? (
            <p>You've found every egg!</p>
          ) : (
            <p>{`Egg count: ${eggCount}/${totalEggs}`}</p>
          )}
        </div>
        <div className={classes.eggCollection}>
          {easterEggs.map((egg) => {
            const formattedDateString = egg.eggAquired ? formatDate(new Date(egg.eggAquired)) : ''
            return (
              <React.Fragment>
                <div className={classes.egg}>
                  {!egg.eggName ? (
                    <div className={classes.hiddenEgg}>
                      <AiOutlineQuestion
                        className={classes.question}
                        onClick={() => cantAccessEgg(egg.eggNumber)}
                      />
                      <div className={classes.hideOverlay} />
                      {egg.eggImage}
                    </div>
                  ) : (
                    <div className={classes.foundEgg}>
                      <BsUnlockFill
                        className={classes.eggIcon}
                        onClick={() => displayEggInfo(egg)}
                      />
                    </div>
                  )}
                </div>
                {eggInfo === egg.eggNumber && (
                  <div className={classes.eggInfo}>
                    <div className={classes.back} onClick={() => displayEggInfo(egg)}>
                      <FaArrowLeft className={classes.arrow} /> <p>Go back</p>
                    </div>
                    <div className={classes.gridTop}>
                      <div className={classes.eggTitle}>{egg.eggTitle}</div>
                      <div className={classes.eggImage}>{egg.eggImage}</div>
                    </div>
                    <div className={classes.gridBottom}>
                      <div className={classes.eggDescription}>{egg.eggDescription}</div>
                      <div className={classes.eggAquired}>
                        <p>Aquired {formattedDateString}</p>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
        <div
          className={classes.whatOverlay}
          onMouseEnter={() => setExplaining(true)}
          onMouseLeave={() => setExplaining(false)}
        >
          <BsQuestionCircleFill className={classes.whatIsThis} />
        </div>
        {explaining && (
          <div className={classes.explaining}>
            <p>
              This is your <span className={classes.easterEggSpan}>Easter Egg</span> collection.
            </p>
            <p>{`I've hidden ${totalEggs} egg${eggPlural} throughout the site, and will add more in the future. Have fun!`}</p>
          </div>
        )}
      </div>
    </div>
  )
})

export default EggModal
