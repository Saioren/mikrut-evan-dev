import { SkillItem } from '@/types/Blocks/Skills/types'
import Image from 'next/image'
import React, { useState } from 'react'
import classes from './index.module.scss'
import PopOut from '../PopOut'
import FadeIn from '../FadeIn'
import LinkGroup from '../LinkGroup'
import XIcon from '@/icons/X'
import { AnimatePresence, motion } from 'framer-motion'

type SkillsDisplayProps = {
  skills?: SkillItem[]
}

const skills = [
  {
    skill: {
      skillName: 'Payload CMS',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'payloadcms',
        url: '/payload.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Javascript',
      skillDescription: 'This is a description! 1',
      skillImage: {
        id: 'javascript',
        url: '/javascript.png',
      },
    },
  },
  {
    skill: {
      skillName: 'React',
      skillDescription: 'This is a description! 2',
      skillImage: {
        id: 'react',
        url: '/react.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Typescript',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'typescript',
        url: '/typescript.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Next.JS',
      skillDescription: 'This is a description! 3',
      skillImage: {
        id: 'nextjs',
        url: '/next.svg',
      },
    },
  },
  {
    skill: {
      skillName: 'HTML',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'html',
        url: '/html.svg',
      },
    },
  },
  {
    skill: {
      skillName: 'Vercel',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'vercel',
        url: '/vercel.svg',
      },
    },
  },
  {
    skill: {
      skillName: 'WordPress',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'wordpress',
        url: '/wordpress.png',
      },
    },
  },
  {
    skill: {
      skillName: 'SCSS',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'scss',
        url: '/scss.svg',
      },
    },
  },
]

const SkillsDisplay: React.FC<SkillsDisplayProps> = () => {
  const [skillShowcase, setSkillShowcase] = useState(false)
  const [activeSkill, setActiveSkill] = useState('')

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
      return 1 // First 3 elements
    } else if (index >= 3 && index < 6) {
      return 2 // Second 3 elements
    } else {
      return 3 // Third set of 3 elements
    }
  }

  const visibility = skillShowcase ? classes.shown : classes.hidden

  return (
    <FadeIn order={1}>
      <PopOut animate wait={3}>
        <div className={classes.skillDisplay}>
          {skills.map((skill, index) => {
            const formattedName = skill.skill.skillImage.id.toLowerCase()
            const order = calculateOrder(index)
            return (
              <FadeIn order={order} key={index}>
                <div className={classes.skillWrap}>
                  <AnimatePresence>
                    {skillShowcase && activeSkill === skill.skill.skillImage.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={classes.skillShowcase}
                      >
                        <Image
                          onClick={() => handleSkillClick(skill.skill.skillImage.id)}
                          className={`${classes.activeImage} ${classes[formattedName]}`}
                          alt={skill.skill.skillImage.id}
                          src={skill.skill.skillImage.url}
                          width={1200}
                          height={1200}
                        />
                        <button className={classes.x} onClick={() => closeShowcase()}>
                          <XIcon />
                        </button>
                        <FadeIn className={classes.skillName} order={0}>
                          <h3>{skill.skill.skillName}</h3>
                        </FadeIn>
                        <FadeIn className={classes.skillInformation} order={1}>
                          <p>{skill.skill.skillDescription}</p>
                        </FadeIn>
                        <FadeIn className={classes.documentation} order={2}>
                          <a className={classes.documentationText}>official documentation</a>
                          {/*<LinkGroup links={skill.skill.skillLink}/>*/}
                        </FadeIn>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Image
                    onClick={() => handleSkillClick(skill.skill.skillImage.id)}
                    className={`${classes.skillImage} ${classes[formattedName]}`}
                    alt={skill.skill.skillImage.id}
                    src={skill.skill.skillImage.url}
                    width={1200}
                    height={1200}
                  />
                </div>
              </FadeIn>
            )
          })}
        </div>
      </PopOut>
    </FadeIn>
  )
}

export default SkillsDisplay
