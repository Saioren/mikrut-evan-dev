import React, { useState } from 'react'
import { DotNav, Slide, SliderButton, SliderProvider, SliderTrack } from '@faceless-ui/slider'
import Image from 'next/image'
import classes from './index.module.scss'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import PopOut from '../PopOut'
import { Slide as SlideType } from '@/types/Blocks/Carousel/types'
import Link from 'next/link'
import CarouselSlide from './CarouselSlide'

export type CarouselProps = {
  slides: SlideType[]
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const { slides } = props
  const [slideNumber, setSlideNumber] = useState(0)

  if (slides.length === 0) {
    return <p>Loading slides...</p>
  }

  return (
    <SliderProvider
      pauseOnHover
      currentSlideIndex={slideNumber}
      slidesToShow={1}
      scrollable={false}
      scrollSnap
      autoPlay
      autoplaySpeed={7000}
      onSlide={(index) => setSlideNumber(index)}
    >
      {slides.length > 0 && (
        <React.Fragment>
          <div className={`${classes.sliderButtonWrap} ${classes.prevWrap}`}>
            <SliderButton className={`${classes.prev} ${classes.button}`} direction="prev">
              <PopOut icon hover z={3} smaller>
                <FaAngleLeft className={classes.icon} />
              </PopOut>
            </SliderButton>
          </div>
          <SliderTrack className={classes.track}>
            {slides.length > 0 ? (
              slides.map((slide, index) => {
                return <CarouselSlide key={index} index={index} slide={slide} />
              })
            ) : (
              <div>No slides to show.</div>
            )}
          </SliderTrack>
          <div className={`${classes.sliderButtonWrap} ${classes.nextWrap}`}>
            <SliderButton className={`${classes.next} ${classes.button}`} direction="next">
              <PopOut icon hover z={3} smaller>
                <FaAngleRight className={classes.icon} />
              </PopOut>
            </SliderButton>
          </div>
          <DotNav
            className={classes.dotNav}
            dotClassName={classes.dot}
            activeDotClassName={classes.dotIsActive}
          />
        </React.Fragment>
      )}
    </SliderProvider>
  )
}

export default Carousel
