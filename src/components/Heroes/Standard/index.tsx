import React from 'react'
import classes from './index.module.scss'
import { StandardHero as StandardHeroType } from '@/types/Layout/Hero/types'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { RichText } from '@/components/RichText'
import Image from 'next/image'

const StandardHero: React.FC<StandardHeroType> = (props) => {
  const { richText, links, heroImage, padding, heading } = props
  console.log('hero component: check! ' + heading)
  return (
    <div className={classes.standardHero}>
      <div>
        <Grid>
          <Cell cols={12} colsM={8}>
            <RichText content={richText} />
            <p>Hero</p>
            {/*<Image src={heroImage.url} width={300} height={300} alt={heroImage.alt} />*/}
          </Cell>
        </Grid>
      </div>
    </div>
  )
}

export default StandardHero
