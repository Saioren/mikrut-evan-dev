import React from 'react'
import { Skills as SkillsBlockType } from '@/types/Blocks/Skills/types'
import classes from './index.module.scss'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Content from '@/components/Content'
import Padding from '@/layout/Padding'
import SkillsDisplay from '@/components/SkillsDisplay'
import BackgroundColors from '@/components/BackgroundColors'
import { useGlobals } from '@/providers/GlobalsProvider'
import { useWindowInfo } from '@faceless-ui/window-info'

const SkillsBlock: React.FC<SkillsBlockType> = (props) => {
  const { skills } = useGlobals()
  const { padding, position, content, heading } = props

  return position === 'right' ? (
    <Padding padding={padding}>
      <div className={[classes.skills, classes.skillsRight].join(' ')}>
        <Grid>
          {skills &&
            skills?.docs?.map((collection) => (
              <Cell cols={7} colsM={4} key={collection.id}>
                <BackgroundColors positions={['bottomLeft', 'right']} />
                <SkillsDisplay collection={collection} />
              </Cell>
            ))}
          <Cell className={classes.center} cols={7} colsM={5}>
            <Content content={content} heading={heading} headingLowImpact />
          </Cell>
        </Grid>
      </div>
      <div className={[classes.skills, classes.skillsLeft].join(' ')}>
        <Grid>
          <Cell cols={7} colsM={5} colsS={9}>
            <Content content={content} heading={heading} headingLowImpact />
          </Cell>
          {skills &&
            skills?.docs?.map((collection) => (
              <Cell cols={7} colsM={4} key={collection.id} colsS={9}>
                <BackgroundColors positions={['bottomLeft', 'right']} />
                <SkillsDisplay collection={collection} />
              </Cell>
            ))}
        </Grid>
      </div>
      <BackgroundColors positions={['bottomRight', 'left']} />
    </Padding>
  ) : position === 'left' ? (
    <Padding padding={padding}>
      <Grid className={classes.skills}>
        <Cell cols={7} colsM={5} colsS={9}>
          <Content content={content} heading={heading} headingLowImpact />
        </Cell>
        {skills &&
          skills?.docs?.map((collection) => (
            <Cell cols={7} colsM={4} key={collection.id} colsS={9}>
              <BackgroundColors positions={['bottomLeft', 'right']} />
              <SkillsDisplay collection={collection} />
            </Cell>
          ))}
      </Grid>
    </Padding>
  ) : (
    <div>Nothing to see here.</div>
  )
}

export default SkillsBlock
