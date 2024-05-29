import React from 'react'
import { Link, LinkGroup as LinkGroupType } from '@/types/Fields/Link/types'
import { Button } from '../Button'

const LinkGroup: React.FC<{ links?: Link[] }> = (props) => {
  const { links } = props
  return (
    <div>
      {links?.map((link: Link, index: number) => (
        <Button key={index} linkFromCMS={link} />
      ))}
    </div>
  )
}

export default LinkGroup
