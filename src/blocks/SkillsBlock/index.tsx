import React from 'react'
import { Skills as SkillsBlockType } from '@/types/Blocks/Skills/types'
import classes from './index.module.scss'
import { Cell, Grid } from '@faceless-ui/css-grid'

const SkillsBlock: React.FC<SkillsBlockType> = (props) => {
  const { blockName, padding, position, content } = props
  return (
    <Grid className={classes.skills}>
      <Cell cols={7} colsM={8}>
        This is the skills block!
      </Cell>
    </Grid>
  )
}

export default SkillsBlock
