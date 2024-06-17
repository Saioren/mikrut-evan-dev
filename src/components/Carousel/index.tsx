import React, { useState } from 'react'
import { DotNav, Slide, SliderButton, SliderProvider, SliderTrack } from '@faceless-ui/slider'
import Media from '../Media'
import { Media as MediaType } from '@/types/Fields/Media/types'
import Image from 'next/image'
import classes from './index.module.scss'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import PopOut from '../PopOut'
import FadeIn from '../FadeIn'
import { Slide as SlideType } from '@/types/Blocks/Carousel/types'
import { useWindowInfo } from '@faceless-ui/window-info'

export type CarouselProps = {
  slides: MediaType[]
  slideData: SlideType[]
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const { slides, slideData } = props
  const { width } = useWindowInfo()
  const [slideNumber, setSlideNumber] = useState(0)
  const [hoveredSlide, setHoveredSlide] = useState(false)

  if (slides.length === 0) {
    return <p>Loading slides...</p>
  }

  return (
    <FadeIn order={width && width < 768 ? 3 : 0}>
      <SliderProvider
        pauseOnHover
        currentSlideIndex={slideNumber}
        slidesToShow={1}
        scrollSnap
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
        <SliderTrack className={classes.track}>
          {slides.map((slide, index) => {
            return (
              <React.Fragment key={index}>
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
                      <div className={classes.projectTitle}>{slide.alt}</div>
                      <div className={classes.projectDescription}>test</div>
                      <div className={classes.projectLinks}>
                        <a>Test</a>
                      </div>
                    </div>
                  </div>
                </Slide>
              </React.Fragment>
            )
          })}
        </SliderTrack>
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
