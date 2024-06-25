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
import { useWindowInfo } from '@faceless-ui/window-info'

const SkillsDisplay: React.FC<{ collection: SkillCollection }> = (
  {
    /*collection*/
  },
) => {
  const [skillShowcase, setSkillShowcase] = useState(false)
  const [activeSkill, setActiveSkill] = useState('')
  const showcaseRef = useRef<HTMLDivElement>(null)
  const { width } = useWindowInfo()

  const skills = {
    id: '6660ce030212164877757c75',

    skills: [
      {
        skillName: 'Payload CMS',
        skillDescription:
          "Payload is the modern developer's CMS, powering applications in ways never done before. It's what this site is built in and is my preferred CMS to work with. ",

        skillImage: {
          id: '667058075e2428b5084c2cce',
          alt: 'Payload CMS',
          filename: 'payload.png',
          mimeType: 'image/png',
          filesize: 8964,
          width: 1024,
          height: 1024,
          createdAt: '2024-06-17T15:36:39.651Z',
          updatedAt: '2024-06-17T15:36:39.651Z',
          url: '/api/media/file/payload.png',
          thumbnailURL: null,
        },
        skillId: 'payloadcms',
        skillLink: 'https://payloadcms.com/',
        id: '6660ce0360a8686f908b6dad',
      },

      {
        skillName: 'Javascript',
        skillDescription:
          'I use Javascript everyday, making interactive websites only limited by the imagination.',

        skillImage: {
          id: '667058185e2428b5084c2cf3',
          alt: 'Javascript',
          filename: 'javascript.png',
          mimeType: 'image/png',
          filesize: 23059,
          width: 1024,
          height: 1024,
          createdAt: '2024-06-17T15:36:56.618Z',
          updatedAt: '2024-06-17T15:36:56.618Z',
          url: '/api/media/file/javascript.png',
          thumbnailURL: null,
        },
        skillId: 'javascript',
        skillLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        id: '6660ce1960a8686f908b6dd0',
      },

      {
        skillName: 'React',
        skillDescription:
          "React JS is the baseline of any Javascript developer today. A framework that unlocks the potential of what JS can do. I can't see myself coding Javascript without it anymore.",

        skillImage: {
          id: '667058285e2428b5084c2d2c',
          alt: 'React',
          filename: 'react.png',
          mimeType: 'image/png',
          filesize: 190723,
          width: 2300,
          height: 2000,
          createdAt: '2024-06-17T15:37:12.204Z',
          updatedAt: '2024-06-17T15:37:12.204Z',
          url: '/api/media/file/react.png',
          thumbnailURL: null,
        },
        skillId: 'react',
        skillLink: 'https://react.dev/',
        id: '6660ce1960a8686f908b6dd1',
      },

      {
        skillName: 'Typescript',
        skillDescription:
          'TypeScript levels up JavaScript in multiple ways, creating safer environments, and faster code writing. I find myself quite fond of it nowadays. ',

        skillImage: {
          id: '667058475e2428b5084c2d57',
          alt: 'Typescript',
          filename: 'typescript.png',
          mimeType: 'image/png',
          filesize: 30072,
          width: 1200,
          height: 1200,
          createdAt: '2024-06-17T15:37:43.918Z',
          updatedAt: '2024-06-17T15:37:43.918Z',
          url: '/api/media/file/typescript.png',
          thumbnailURL: null,
        },
        skillId: 'typescript',
        skillLink: 'https://www.typescriptlang.org/',
        id: '667058298d1bf75210e24932',
      },

      {
        skillName: 'Next.JS',
        skillDescription:
          "Calling themselves 'the React framework' Next.js is essentially the final component, tying together everything Javascript related in the modern age. Efficient and optimized, Next.js is called such for a reason. ",

        skillImage: {
          id: '6670585e5e2428b5084c2d7e',
          alt: 'Next.JS',
          filename: 'next.svg',
          mimeType: 'image/svg+xml',
          filesize: 1527,
          width: 1365,
          height: 1365,
          createdAt: '2024-06-17T15:38:06.622Z',
          updatedAt: '2024-06-17T15:38:06.622Z',
          url: '/api/media/file/next.svg',
          thumbnailURL: null,
        },
        skillId: 'nextjs',
        skillLink: 'https://nextjs.org/',
        id: '6670584a8d1bf75210e24933',
      },

      {
        skillName: 'HTML',
        skillDescription:
          "HTML is what makes the building blocks of the web, and has been since the late 90's. Chances are you've coded it yourself. With frameworks and packages however, you can power it up in many ways. ",

        skillImage: {
          id: '6670586e5e2428b5084c2da1',
          alt: 'HTML',
          filename: 'html.svg',
          mimeType: 'image/svg+xml',
          filesize: 480,
          width: 2183,
          height: 2500,
          createdAt: '2024-06-17T15:38:22.715Z',
          updatedAt: '2024-06-17T15:38:22.715Z',
          url: '/api/media/file/html.svg',
          thumbnailURL: null,
        },
        skillId: 'html',
        skillLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        id: '667058608d1bf75210e24934',
      },

      {
        skillName: 'Vercel',
        skillDescription:
          'My website deployment provider of choice. Completely free to use, it offers anything you want, and is highly dependable. ',

        skillImage: {
          id: '667991206e4a59871f128a42',
          alt: 'Vercel',
          filename: 'Vercel-2.svg',
          mimeType: 'image/svg+xml',
          filesize: 155,
          width: 75,
          height: 65,
          createdAt: '2024-06-24T15:30:40.695Z',
          updatedAt: '2024-06-24T15:30:40.695Z',
          url: '/api/media/file/Vercel-2.svg',
          thumbnailURL: null,
        },
        skillId: 'vercel',
        skillLink: 'https://vercel.com/docs',
        id: '667058708d1bf75210e24935',
      },

      {
        skillName: 'WordPress',
        skillDescription:
          "WordPress is the CMS used by around 50% of all websites on the internet. Popularized due to its ease of use and high customizability, I've learned all I need to know to work with it. ",

        skillImage: {
          id: '667058935e2428b5084c2e03',
          alt: 'WordPress',
          filename: 'wordpress.png',
          mimeType: 'image/png',
          filesize: 88979,
          width: 1024,
          height: 1024,
          createdAt: '2024-06-17T15:38:59.911Z',
          updatedAt: '2024-06-17T15:38:59.911Z',
          url: '/api/media/file/wordpress.png',
          thumbnailURL: null,
        },
        skillId: 'wordpress',
        skillLink: 'https://wordpress.com/',
        id: '667058848d1bf75210e24936',
      },

      {
        skillName: 'SCSS',
        skillDescription:
          'SCSS, or Sass, takes regular CSS to another level. Adding in special functionality that will make your life easier, and unlock your potential as a designer. ',

        skillImage: {
          id: '667991106e4a59871f1289f8',
          alt: 'SCSS',
          filename: 'scss-2.png',
          mimeType: 'image/png',
          filesize: 18885,
          width: 320,
          height: 320,
          createdAt: '2024-06-24T15:30:24.249Z',
          updatedAt: '2024-06-24T15:30:24.249Z',
          url: '/api/media/file/scss-2.png',
          thumbnailURL: null,
        },
        skillId: 'scss',
        skillLink: 'https://sass-lang.com/',
        id: '667058958d1bf75210e24937',
      },
    ],
    createdAt: '2024-06-05T20:43:47.688Z',
    updatedAt: '2024-06-25T13:51:04.958Z',
  }

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

  return (
    <FadeIn order={width && width < 768 ? 4 : 1}>
      <PopOut animate wait={3}>
        <div className={classes.skillDisplay}>
          {
            /*collection?.*/ skills?.skills?.map((skill, index) => {
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
                            </FadeIn>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                    <Image
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
