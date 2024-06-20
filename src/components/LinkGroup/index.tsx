import React from 'react'
import { Link, LinkAppearances, LinkGroup as LinkGroupType } from '@/types/Fields/Link/types'
import { Button } from '../Button'
import PopOut from '../PopOut'
import classes from './index.module.scss'

const LinkGroup: React.FC<{
  links?: Link[]
  gradient?: boolean
  url?: string
  centered?: boolean
}> = (props) => {
  const { links, gradient, url, centered } = props
  return (
    <React.Fragment>
      {links?.map((link: Link, index: number) => (
        <Button
          centered={centered}
          key={index}
          className={classes.button}
          customUrl={url}
          appearance={link.link.appearance}
          gradient={gradient}
          linkFromCMS={link}
        />
      ))}
    </React.Fragment>
  )
}

export default LinkGroup
