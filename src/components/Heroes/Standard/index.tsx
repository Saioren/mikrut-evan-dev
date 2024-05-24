import React from 'react'
import classes from './index.module.scss'
import { StandardHero as StandardHeroType } from '@/types/Hero/types'
import { Cell, Grid } from '@faceless-ui/css-grid'

const StandardHero: React.FC<StandardHeroType> = (props) => {
  const { content, heroImage, padding, heading } = props
  console.log('hero component: check!' + heading)
  return <div className={classes.standardHero}>
    <div>
      <Grid>
        <Cell cols={12} colsM={8}>
          <RichText content={content.richText}/>
          <Image src={heroImage.url} width={300} height={300}/>
        </Cell>
      </Grid>
    </div>
  </div>
}

export default StandardHero
