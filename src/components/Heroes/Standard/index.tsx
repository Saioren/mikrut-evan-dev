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
import { useWindowInfo } from '@faceless-ui/window-info'

const StandardHero: React.FC<Hero> = (props) => {
  const { standardHero } = props
  const { height, width } = useWindowInfo()

  if (!standardHero) return null

  const { content, heroImage, padding, heading, position } = standardHero

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
          <React.Fragment>
            <div className={[classes.standardHero, classes.standardHeroRight].join(' ')}>
              <Grid className={`${classes.position}`}>
                <Cell cols={7} colsM={4} start={1} colsS={9}>
                  <div className={classes.contentWrap}>
                    <Content
                      url={'#contact'}
                      hero={true}
                      content={content}
                      heading={heading}
                      position={position}
                    />
                  </div>
                </Cell>
                <Cell className={classes.pfpCell} cols={7} colsM={5} colsS={9}>
                  <FadeIn order={width && width < 768 ? 4 : 1}>
                    <Grid>
                      <Cell cols={5} colsM={4} colsL={6} start={2} startS={3} colsS={5}>
                        <PopOut animate={true} wait={3}>
                          <Image
                            className={classes.pfp}
                            src={`${process.env.NEXT_PUBLIC_API_URL}${heroImage.url}`}
                            //src="/1mb.png"
                            width={heroImage.width}
                            height={heroImage.height}
                            alt={heroImage.alt}
                            priority
                          />
                        </PopOut>
                      </Cell>
                    </Grid>
                  </FadeIn>
                </Cell>
              </Grid>
            </div>
            <div className={[classes.standardHero, classes.standardHeroLeft].join(' ')}>
              <Grid className={`${classes.position}`}>
                <Cell className={classes.pfpCell} cols={7} colsM={5} colsS={9}>
                  <FadeIn order={1}>
                    <Grid>
                      <Cell cols={5} colsM={4} colsL={6} start={2} startS={3} colsS={5}>
                        <PopOut animate={true} wait={width && width < 768 ? 7 : 3}>
                          <Image
                            className={classes.pfp}
                            src={`${process.env.NEXT_PUBLIC_API_URL}${heroImage.url}`}
                            //src="/1mb.png"
                            width={heroImage.width}
                            height={heroImage.height}
                            alt={heroImage.alt}
                            priority
                          />
                        </PopOut>
                      </Cell>
                    </Grid>
                  </FadeIn>
                </Cell>
                <Cell cols={7} colsM={4} start={1} colsS={9}>
                  <div className={classes.contentWrap}>
                    <Content
                      url={'#contact'}
                      hero={true}
                      content={content}
                      heading={heading}
                      position={position}
                    />
                  </div>
                </Cell>
              </Grid>
            </div>
          </React.Fragment>
        ) : (
          <div className={classes.standardHero}>
            <Grid className={`${classes.position}`}>
              <Cell cols={7} colsM={5} colsS={9}>
                <FadeIn order={1}>
                  <Grid>
                    <Cell
                      className={classes.pfpCell}
                      cols={5}
                      colsM={4}
                      colsL={6}
                      start={2}
                      startS={3}
                      colsS={5}
                    >
                      <PopOut animate={true} wait={3}>
                        <Image
                          className={classes.pfp}
                          src={`${process.env.NEXT_PUBLIC_API_URL}${heroImage.url}`}
                          //src="/1mb.png"
                          width={heroImage.width}
                          height={heroImage.height}
                          alt={heroImage.alt}
                        />
                      </PopOut>
                    </Cell>
                  </Grid>
                </FadeIn>
              </Cell>
              <Cell cols={7} colsM={4} start={1} colsS={9}>
                <div className={classes.contentWrap}>
                  <Content
                    url={'#contact'}
                    hero={true}
                    content={content}
                    heading={heading}
                    position={position}
                  />
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
