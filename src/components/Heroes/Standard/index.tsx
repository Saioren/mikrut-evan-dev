import React from 'react'
import classes from './index.module.scss'
import { Hero } from '@/types/Layout/Hero/types' // Import the correct type
import { Cell, Grid } from '@faceless-ui/css-grid'
import Content from '@/components/Content'
import Media from '@/components/Media'

const StandardHero: React.FC<Hero> = (props) => {
  const { standardHero } = props

  if (!standardHero) return null

  const { content, heroImage, padding, heading } = standardHero

  console.log(heroImage)

  return (
    <div className={classes.standardHero}>
      <div>
        <Grid>
          <Cell cols={12} colsM={8}>
            <h1 className={classes.heading}>{heading}</h1>
            <Media mediaFromCMS={heroImage} />
            <Content content={content} />
          </Cell>
        </Grid>
      </div>
    </div>
  )
}

export default StandardHero
