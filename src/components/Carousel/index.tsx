import React, { useState } from 'react'
import { DotNav, Slide, SliderButton, SliderProvider, SliderTrack } from '@faceless-ui/slider'
import Media from '../Media'
import { Media as MediaType } from '@/types/Fields/Media/types'
import Image from 'next/image'
import classes from './index.module.scss'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import PopOut from '../PopOut'
import FadeIn from '../FadeIn'

export type CarouselProps = {
  slides: MediaType[]
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const { slides } = props
  const [slideNumber, setSlideNumber] = useState(0)
  const [hoveredSlide, setHoveredSlide] = useState(false)

  if (slides.length === 0) {
    return <p>Loading slides...</p>
  }

  return (
    <FadeIn order={0}>
      <SliderProvider
        pauseOnHover
        currentSlideIndex={slideNumber}
        slidesToShow={1}
        autoPlay
        autoplaySpeed={7000}
        onSlide={(index) => setSlideNumber(index)}
      >
        <div className={`${classes.sliderButtonWrap} ${classes.prevWrap}`}>
          <PopOut icon hover z={3} smaller>
            <SliderButton className={`${classes.prev} ${classes.button}`} direction="prev">
              <FaAngleLeft className={classes.icon} />
            </SliderButton>
          </PopOut>
        </div>
        <PopOut wait={3} animate>
          <SliderTrack className={classes.track}>
            {slides.map((slide, index) => {
              return (
                <React.Fragment>
                  <Slide className={classes.slide} index={index} key={index}>
                    <Image
                      className={classes.slideImage}
                      src={slide.url}
                      alt={slide.alt}
                      width={slide.width}
                      height={slide.height}
                    />
                    <div className={`${classes.projectInfoWrap}`}>
                      <div className={classes.projectInfo}>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                      </div>
                    </div>
                  </Slide>
                </React.Fragment>
              )
            })}
          </SliderTrack>
        </PopOut>
        <div className={`${classes.sliderButtonWrap} ${classes.nextWrap}`}>
          <PopOut icon hover z={3} smaller>
            <SliderButton className={`${classes.next} ${classes.button}`} direction="next">
              <FaAngleRight className={classes.icon} />
            </SliderButton>
          </PopOut>
        </div>
        <DotNav
          className={classes.dotNav}
          dotClassName={classes.dot}
          activeDotClassName={classes.dotIsActive}
        />
      </SliderProvider>
    </FadeIn>
  )
}

export default Carousel
