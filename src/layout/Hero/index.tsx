import React from 'react'
import heroes from '@/components/Heroes'
import { Hero as HeroType } from '@/types/Layout/Hero/types'

type Props = HeroType

export const Hero: React.FC<Props> = (props) => {
  const { type } = props
  console.log('Hero component props:', props) // Debugging line

  if (type && type in heroes) {
    const SelectedHero = heroes[type]
    const heroProps = props[type]
    console.log('SelectedHero:', SelectedHero, 'heroProps:', heroProps) // Debugging line

    return (
      // @ts-ignore because of the 'type' key not aligning across hero types
      <SelectedHero {...heroProps} />
    )
  }
  return null
}
