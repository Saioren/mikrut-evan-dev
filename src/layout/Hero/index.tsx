import React from 'react'
import heros from '@/components/Heroes/index'
import { HeroType } from '@/types/Hero/types'

type Props = HeroType

export const Hero: React.FC<Props> = (props) => {
  const { type } = props

  if (type && type in heros) {
    const SelectedHero = heros[type]
    const heroProps = props[type]

    return (
      // @ts-ignore because of the 'type' key not aligning across hero types
      <SelectedHero {...heroProps} />
    )
  }
  return null
}
