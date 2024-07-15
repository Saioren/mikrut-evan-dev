import { Skill } from '@/types/Blocks/Skills/types'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import classes from './index.module.scss'
import PopOut from '../PopOut'
import FadeIn from '../FadeIn'
import XIcon from '@/icons/X'
import { AnimatePresence, motion } from 'framer-motion'
import { useWindowInfo } from '@faceless-ui/window-info'
import { useEasterEgg } from '@/eggs/EasterEggProvider'
import toast from 'react-hot-toast'

type Props = {
  skills: Skill[]
}

const SkillsDisplay: React.FC<Props> = (props) => {
  const { skills } = props
  const [skillShowcase, setSkillShowcase] = useState(false)
  const [activeSkill, setActiveSkill] = useState('')
  const showcaseRef = useRef<HTMLDivElement>(null)
  const { width } = useWindowInfo()
  const { lockTrigger, setUnlock, hideButton, setHideButton, eggOne } = useEasterEgg()

  function handleSkillClick(skillId: string) {
    setSkillShowcase(true)
    setActiveSkill(skillId)
  }

  function closeShowcase() {
    setSkillShowcase(false)
    setActiveSkill('')
  }

  const calculateOrder = (index: number) => {
    if (index >= 0 && index < 3) {
      return 1
    } else if (index >= 3 && index < 6) {
      return 2
    } else {
      return 3
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          ;() => {
            closeShowcase()
          }
        }
      })
    }, options)

    if (showcaseRef.current) {
      observer.observe(showcaseRef.current)
    }

    return () => {
      if (showcaseRef.current) {
        observer.unobserve(showcaseRef.current)
      }
    }
  }, [])

  function unlockFirstEgg() {
    toast.success(`You hear a 'click'`, {
      duration: 3000,
    })
    setUnlock(true)
    setHideButton(true)
  }

  return (
    <FadeIn order={width && width < 768 ? 4 : 1}>
      <PopOut animate wait={3}>
        <div className={classes.skillDisplay}>
          {
            /*collection?.*/ skills?.map((skill, index) => {
              const order = calculateOrder(index)
              return (
                <FadeIn order={order} key={index}>
                  <div className={classes.skillWrap}>
                    <AnimatePresence>
                      {skillShowcase && activeSkill === skill.skillId && (
                        <div ref={showcaseRef}>
                          <motion.div
                            key="showcase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={classes.skillShowcase}
                          >
                            <Image
                            unoptimized
                              onClick={() => handleSkillClick(skill.skillId)}
                              className={`${classes.activeImage} ${
                                classes[skill.skillId.toLowerCase()]
                              }`}
                              alt={skill.skillImage.alt}
                              src={skill.skillImage.url}
                              width={1200}
                              height={1200}
                            />
                            <button className={classes.x} onClick={() => closeShowcase()}>
                              <XIcon />
                            </button>
                            <FadeIn className={classes.skillName} order={0}>
                              <h3>{skill.skillName}</h3>
                            </FadeIn>
                            <FadeIn className={classes.skillInformation} order={1}>
                              <p>{skill.skillDescription}</p>
                            </FadeIn>
                            <FadeIn className={classes.documentation} order={2}>
                              <a
                                href={skill.skillLink}
                                target="_blank"
                                className={classes.documentationText}
                              >
                                official documentation
                              </a>
                              {/*<LinkGroup links={skill.skill.skillLink}/>*/}
                              {lockTrigger &&
                                skill.skillId === 'html' &&
                                !hideButton &&
                                !eggOne && (
                                  <button
                                    onClick={() => unlockFirstEgg()}
                                    className={classes.lockButton}
                                  />
                                )}
                            </FadeIn>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                    <Image
                    unoptimized
                      onClick={() => handleSkillClick(skill.skillId)}
                      className={`${classes.skillImage} ${classes[skill.skillId]}`}
                      alt={skill.skillId}
                      src={skill.skillImage.url}
                      width={1200}
                      height={1200}
                    />
                  </div>
                </FadeIn>
              )
            })
          }
        </div>
      </PopOut>
    </FadeIn>
  )
}

export default SkillsDisplay
