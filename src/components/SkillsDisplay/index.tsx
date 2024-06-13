import { Skill, SkillCollection } from '@/types/Blocks/Skills/types'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import classes from './index.module.scss'
import PopOut from '../PopOut'
import FadeIn from '../FadeIn'
import LinkGroup from '../LinkGroup'
import XIcon from '@/icons/X'
import { AnimatePresence, motion } from 'framer-motion'
import { useGlobals } from '@/providers/GlobalsProvider'
import { RichText } from '../RichText'

/*const skills = [
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
]*/

const SkillsDisplay: React.FC<{ collection: SkillCollection }> = ({ collection }) => {
  const [skillShowcase, setSkillShowcase] = useState(false)
  const [activeSkill, setActiveSkill] = useState('')
  const showcaseRef = useRef<HTMLDivElement>(null)

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

  console.log(collection, collection?.skills)

  return (
    <FadeIn order={1}>
      <PopOut animate wait={3}>
        <div className={classes.skillDisplay}>
          {collection?.skills?.map((skill, index) => {
            const order = calculateOrder(index)
            return (
              <FadeIn order={order} key={index}>
                <div className={classes.skillWrap}>
                  <AnimatePresence>
                    {skillShowcase && activeSkill === skill.skillImage.id && (
                      <div ref={showcaseRef}>
                        <motion.div key={'modal'} className={classes.skillShowcase}>
                          <Image
                            onClick={() => handleSkillClick(skill.skillImage.id)}
                            className={`${classes.activeImage} ${
                              classes[skill.skillImage.id.toLowerCase()]
                            }`}
                            alt={skill.skillImage.id}
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
                            <a className={classes.documentationText}>official documentation</a>
                            {/*<LinkGroup links={skill.skill.skillLink}/>*/}
                          </FadeIn>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                  <Image
                    onClick={() => handleSkillClick(skill.skillImage.id)}
                    className={`${classes.skillImage} ${
                      classes[skill.skillImage.id.toLowerCase()]
                    }`}
                    alt={skill.skillImage.id}
                    src={skill.skillImage.url}
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
