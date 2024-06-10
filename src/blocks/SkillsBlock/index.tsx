import React from 'react'
import { Skills as SkillsBlockType } from '@/types/Blocks/Skills/types'
import classes from './index.module.scss'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Content from '@/components/Content'
import Padding from '@/layout/Padding'
import SkillsDisplay from '@/components/SkillsDisplay'
import { useGlobals } from '@/providers/GlobalsProvider'
import BackgroundColors from '@/components/BackgroundColors'

const SkillsBlock: React.FC<SkillsBlockType> = (props) => {
  const { padding, position, content, heading } = props
  //const { skillsCollection } = useGlobals()

  return position === 'right' ? (
    <Padding padding={padding}>
      <Grid className={classes.skills}>
        <Cell cols={7} colsM={4}>
          <SkillsDisplay /*skills={skillsCollection}*/ />
        </Cell>
        <Cell className={classes.center} cols={7} colsM={5}>
          <Content content={content} heading={heading} headingLowImpact />
        </Cell>
      </Grid>
      <BackgroundColors positions={['bottomRight', 'left']} />
    </Padding>
  ) : (
    <Padding padding={padding}>
      <Grid className={classes.skills}>
        <Cell cols={7} colsM={5}>
          {position} {heading}
          <Content content={content} heading={heading} headingLowImpact />
        </Cell>
        <Cell cols={7} colsM={4}>
          <SkillsDisplay /*skills={skillsCollection}*/ />
        </Cell>
      </Grid>
    </Padding>
  )
}

export default SkillsBlock
