import React from 'react'
import { Link, LinkAppearances, LinkGroup as LinkGroupType } from '@/types/Fields/Link/types'
import { Button } from '../Button'
import PopOut from '../PopOut'
import classes from './index.module.scss'

const LinkGroup: React.FC<{ links?: Link[]; gradient?: boolean; url?: string }> = (props) => {
  const { links, gradient, url } = props
  return (
    <React.Fragment>
      {links?.map((link: Link, index: number) => (
        <PopOut key={index} gradient={gradient} appearance={link.link.appearance} hover={true}>
          <Button customUrl={url} linkFromCMS={link} />
        </PopOut>
      ))}
    </React.Fragment>
  )
}

export default LinkGroup
