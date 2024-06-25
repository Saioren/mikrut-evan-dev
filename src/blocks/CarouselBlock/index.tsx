import React from 'react'
import { Carousel as CarouselBlockType } from '@/types/Blocks/Carousel/types'
import Content from '@/components/Content'
import Padding from '@/layout/Padding'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Carousel from '@/components/Carousel'
import classes from './index.module.scss'
import BackgroundColors from '@/components/BackgroundColors'
import PopOut from '@/components/PopOut'
import FadeIn from '@/components/FadeIn'
import { useWindowInfo } from '@faceless-ui/window-info'

const CarouselBlock: React.FC<CarouselBlockType> = (props) => {
  const { heading, padding, position, content, slides } = props
  const { width } = useWindowInfo()

  const widthCheck = width && width < 768

  return (
    <Padding padding={padding}>
      <Grid className={classes.carouselBlock}>
        {position === 'left' ? (
          <React.Fragment>
            <Cell cols={6} colsM={4} colsS={9}>
              <Content start={1} heading={heading} headingLowImpact content={content} />
            </Cell>
            <Cell className={classes.carousel} cols={8} colsM={5} colsS={9}>
              <PopOut wait={3} animate>
                <Carousel slides={slides} />
              </PopOut>
            </Cell>
            <BackgroundColors positions={['bottomLeft', 'right']} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FadeIn order={widthCheck ? 3 : 1}>
              <Cell cols={7} colsM={5} className={classes.carousel}>
                <PopOut wait={3} animate>
                  <Carousel slides={slides} />
                </PopOut>
              </Cell>
            </FadeIn>
            <Cell cols={6} colsM={4}>
              <Content heading={heading} headingLowImpact content={content} />
            </Cell>
            <BackgroundColors positions={['left', 'bottomRight']} />
          </React.Fragment>
        )}
      </Grid>
    </Padding>
  )
}

export default CarouselBlock
