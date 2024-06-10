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

const StandardHero: React.FC<Hero> = (props) => {
  const { standardHero } = props

  if (!standardHero) return null

  const { content, heroImage, padding, heading, position } = standardHero
  console.log(heroImage)
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
        {position === 'left' ? (
          <div className={classes.standardHero}>
            <Grid className={`${classes.position}`}>
              <Cell cols={7} colsM={4} start={1}>
                <div className={classes.contentWrap}>
                  <Content hero={true} content={content} heading={heading} />
                </div>
              </Cell>
              <Cell cols={7} colsM={5}>
                <FadeIn order={1}>
                  <Grid>
                    <Cell cols={5} colsM={4} colsL={6} start={2}>
                      <PopOut animate={true} wait={3}>
                        <Image
                          className={classes.pfp}
                          src={'/pfp.png'}
                          width={1728}
                          height={1909}
                          alt={'my pfp'}
                        />
                      </PopOut>
                    </Cell>
                  </Grid>
                </FadeIn>
              </Cell>
            </Grid>
          </div>
        ) : (
          <div className={classes.standardHero}>
            <Grid className={`${classes.position}`}>
              <Cell cols={7} colsM={5}>
                {/*<Media mediaFromCMS={heroImage} />*/}
                <FadeIn order={1}>
                  <Grid>
                    <Cell cols={5} colsM={4} colsL={6} start={2} startL={1}>
                      <PopOut animate={true} wait={3}>
                        <Image
                          className={classes.pfp}
                          src="/pfp.png"
                          width={1728}
                          height={1909}
                          alt="my pfp"
                        />
                      </PopOut>
                    </Cell>
                  </Grid>
                </FadeIn>
              </Cell>
              <Cell cols={6} colsM={4}>
                <div className={classes.contentWrap}>
                  <Content hero={true} content={content} heading={heading} position={position} />
                </div>
              </Cell>
            </Grid>
          </div>
        )}
      </motion.div>
    </Padding>
  )
}

export default StandardHero
