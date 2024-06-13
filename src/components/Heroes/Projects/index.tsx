import React from 'react'
import classes from './index.module.scss'
import { Hero } from '@/types/Layout/Hero/types' // Import the correct type
import { Cell, Grid } from '@faceless-ui/css-grid'
import Content from '@/components/Content'
import Media from '@/components/Media'
import Padding from '@/layout/Padding'
import Image from 'next/image'
import PopOut from '@/components/PopOut'
import FadeIn from '@/components/FadeIn'
import { motion } from 'framer-motion'
import BackgroundColors from '@/components/BackgroundColors'

const ProjectsHero: React.FC<Hero> = (props) => {
  const { projectsHero } = props

  if (!projectsHero) return null

  const { content, padding, heading } = projectsHero

  return (
    <Padding padding={padding}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className={classes.parent}
      >
        <BackgroundColors positions={['topLeft', 'right']} />
        <div className={classes.standardHero}>
          <Grid className={`${classes.position}`}>
            <Cell cols={7} colsM={4} start={1}>
              <div className={classes.contentWrap}>
                <Content url={'#contact'} hero={false} content={content} heading={heading} />
              </div>
            </Cell>
          </Grid>
        </div>
      </motion.div>
    </Padding>
  )
}

export default ProjectsHero
