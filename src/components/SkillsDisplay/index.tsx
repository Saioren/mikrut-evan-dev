import { SkillItem } from '@/types/Blocks/Skills/types'
import React from 'react'

type SkillsDisplayProps = {
  skills?: SkillItem[]
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({ skills }) => {
  return <div>test</div>
}

export default SkillsDisplay
