import React from 'react'
import { Link, LinkGroup as LinkGroupType } from '@/types/Fields/Link/types'
import { Button } from '../Button'
import PopOut from '../PopOut'
import classes from './index.module.scss'

const LinkGroup: React.FC<{ links?: Link[]; gradient?: boolean }> = (props) => {
  const { links, gradient } = props
  return (
    <React.Fragment>
      {links?.map((link: Link, index: number) => (
        <PopOut gradient hover={true}>
          <Button key={index} linkFromCMS={link} />
        </PopOut>
      ))}
    </React.Fragment>
  )
}

export default LinkGroup
