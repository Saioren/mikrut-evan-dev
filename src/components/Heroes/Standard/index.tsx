import React from 'react'
import classes from './index.module.scss'
import { Hero } from '@/types/Layout/Hero/types' // Import the correct type
import { Cell, Grid } from '@faceless-ui/css-grid'
import Content from '@/components/Content'
import Media from '@/components/Media'
import Padding from '@/layout/Padding'

const StandardHero: React.FC<Hero> = (props) => {
  const { standardHero } = props

  if (!standardHero) return null

  const { content, heroImage, padding, heading } = standardHero

  return (
    <div className={classes.standardHero}>
      <Padding padding={padding} />
      <div>
        <Grid>
          <Cell cols={7} colsM={4}>
            <Content content={content} heading={heading} />
          </Cell>
          <Cell cols={7} colsM={4}>
            <Media mediaFromCMS={heroImage} />
          </Cell>
        </Grid>
      </div>
    </div>
  )
}

export default StandardHero
