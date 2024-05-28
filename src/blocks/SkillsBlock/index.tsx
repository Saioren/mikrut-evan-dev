import React from 'react'
import { Skills as SkillsBlockType } from '@/types/Blocks/Skills/types'

const SkillsBlock: React.FC<SkillsBlockType> = (props) => {
  const { blockName, padding, position, richText, links } = props
  return <div>SkillsBlock</div>
}

export default SkillsBlock
