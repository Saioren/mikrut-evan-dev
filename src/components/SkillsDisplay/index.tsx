import { SkillItem } from '@/types/Blocks/Skills/types'
import Image from 'next/image'
import React from 'react'
import classes from './index.module.scss'
import PopOut from '../PopOut'
import FadeIn from '../FadeIn'

type SkillsDisplayProps = {
  skills?: SkillItem[]
}

const skills = [
  {
    skill: {
      skillName: 'Typescript',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'this is an id',
        url: '/typescript.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Typescript',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'this is an id',
        url: '/typescript.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Typescript',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'this is an id',
        url: '/typescript.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Typescript',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'this is an id',
        url: '/typescript.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Typescript',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'this is an id',
        url: '/typescript.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Typescript',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'this is an id',
        url: '/typescript.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Typescript',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'this is an id',
        url: '/typescript.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Typescript',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'this is an id',
        url: '/typescript.png',
      },
    },
  },
  {
    skill: {
      skillName: 'Typescript',
      skillDescription: 'This is a description!',
      skillImage: {
        id: 'this is an id',
        url: '/typescript.png',
      },
    },
  },
]

const SkillsDisplay: React.FC<SkillsDisplayProps> = () => {
  return (
    <FadeIn order={1}>
      <PopOut animate wait={3}>
        <div className={classes.skillDisplay}>
          {skills.map((skill) => (
            <div className={classes.skillWrap}>
              <Image
                className={classes.skillImage}
                alt={skill.skill.skillImage.id}
                src={skill.skill.skillImage.url}
                width={1200}
                height={1200}
              />
            </div>
          ))}
        </div>
      </PopOut>
    </FadeIn>
  )
}

export default SkillsDisplay
