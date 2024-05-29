import React from 'react'
import { Skills as SkillsBlockType } from '@/types/Blocks/Skills/types'
import classes from './index.module.scss'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Content from '@/components/Content'

const SkillsBlock: React.FC<SkillsBlockType> = (props) => {
  const { blockName, padding, position, content, header } = props
  return (
    <Grid className={classes.skills}>
      <Cell cols={7} colsM={8}>
        This is the skills block! {padding} {position} {header}
        <Content content={content} />
      </Cell>
    </Grid>
  )
}

export default SkillsBlock
