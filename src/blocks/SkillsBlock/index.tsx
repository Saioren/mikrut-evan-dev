import React from 'react'
import { Skills as SkillsBlockType } from '@/types/Blocks/Skills/types'
import classes from './index.module.scss'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Content from '@/components/Content'
import Padding from '@/layout/Padding'
import SkillsDisplay from '@/components/SkillsDisplay'

const SkillsBlock: React.FC<SkillsBlockType> = (props) => {
  const { padding, position, content, heading, skills } = props

  return position === 'right' ? (
    <Padding padding={padding}>
      <Grid className={classes.skills}>
        <Cell cols={7} colsM={4}>
          <SkillsDisplay skills={skills} />
        </Cell>
        <Cell cols={7} colsM={5}>
          {position} {heading}
          <Content content={content} headingLowImpact={heading} />
        </Cell>
      </Grid>
    </Padding>
  ) : (
    <Padding padding={padding}>
      <Grid className={classes.skills}>
        <Cell cols={7} colsM={5}>
          {position} {heading}
          <Content content={content} headingLowImpact={heading} />
        </Cell>
        <Cell cols={7} colsM={4}>
          <SkillsDisplay skills={skills} />
        </Cell>
      </Grid>
    </Padding>
  )
}

export default SkillsBlock
