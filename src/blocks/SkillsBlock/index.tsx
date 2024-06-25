import React from 'react'
import { Skills as SkillsBlockType } from '@/types/Blocks/Skills/types'
import classes from './index.module.scss'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Content from '@/components/Content'
import Padding from '@/layout/Padding'
import SkillsDisplay from '@/components/SkillsDisplay'
import BackgroundColors from '@/components/BackgroundColors'
import { useWindowInfo } from '@faceless-ui/window-info'

const SkillsBlock: React.FC<SkillsBlockType> = (props) => {
  const { padding, position, content, heading, skills } = props
  const { width } = useWindowInfo()

  return (
    <Padding padding={padding}>
      {position === 'right' ? (
        <div className={[classes.skills, classes.skillsRight].join(' ')}>
          <Grid>
            <Cell
              className={
                width && width > 768
                  ? classes.shown
                  : width && width < 768
                  ? classes.hidden
                  : classes.hidden
              }
              cols={7}
              colsM={4}
            >
              <BackgroundColors positions={['bottomLeft', 'right']} />
              <SkillsDisplay skills={skills} />
            </Cell>
            <Cell className={classes.center} cols={7} colsM={5}>
              <Content content={content} heading={heading} headingLowImpact />
            </Cell>
            <Cell
              className={
                width && width < 768
                  ? classes.shown
                  : width && width > 768
                  ? classes.hidden
                  : classes.shown
              }
              cols={7}
              colsM={4}
            >
              <BackgroundColors positions={['bottomLeft', 'right']} />
              <SkillsDisplay skills={skills} />
            </Cell>
          </Grid>
        </div>
      ) : position === 'left' ? (
        <div className={[classes.skills, classes.skillsLeft].join(' ')}>
          <Grid>
            <Cell cols={7} colsM={5} colsS={9}>
              <Content content={content} heading={heading} headingLowImpact />
            </Cell>

            <Cell cols={7} colsM={4} colsS={9}>
              <BackgroundColors positions={['bottomLeft', 'right']} />
              <SkillsDisplay skills={skills} />
            </Cell>
          </Grid>
        </div>
      ) : (
        <div>Nothing to see here.</div>
      )}
    </Padding>
  )
}

export default SkillsBlock
