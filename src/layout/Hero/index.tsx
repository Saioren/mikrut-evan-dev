import React from 'react'
import heroes from '@/components/Heroes'
import { Hero as HeroType } from '@/types/Layout/Hero/types'

type Props = HeroType

export const Hero: React.FC<Props> = (props) => {
  const { type } = props

  if (type && type in heroes) {
    const SelectedHero = heroes[type]
    const heroProps = props[type as keyof HeroType] // heroProps will be the content of the specific hero type

    return (
      // @ts-ignore because of the 'type' key not aligning across hero types
      <SelectedHero {...heroProps} />
    )
  }

  return null
}
