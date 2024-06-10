import React, { useState } from 'react'
import { DotNav, Slide, SliderButton, SliderProvider, SliderTrack } from '@faceless-ui/slider'
import Media from '../Media'
import { Media as MediaType } from '@/types/Fields/Media/types'
import Image from 'next/image'
import classes from './index.module.scss'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import PopOut from '../PopOut'

export type CarouselProps = {
  slides: MediaType[]
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const { slides } = props
  const [slideNumber, setSlideNumber] = useState(0) // State variable to track current slide index

  if (slides.length === 0) {
    return <p>Loading slides...</p>
  }

  return (
    <SliderProvider
      currentSlideIndex={slideNumber}
      slidesToShow={slides.length}
      scrollSnap={true}
      onSlide={(index) => setSlideNumber(index)}
    >
      <div className={`${classes.sliderButtonWrap} ${classes.prevWrap}`}>
        <PopOut icon hover z={3} smaller>
          <SliderButton className={`${classes.prev} ${classes.button}`} direction="prev">
            <FaAngleLeft className={classes.icon} />
          </SliderButton>
        </PopOut>
      </div>
      <PopOut>
        <SliderTrack className={classes.track}>
          {slides.map((slide, index) => {
            return (
              <Slide index={index} key={index}>
                <Image
                  className={classes.slide}
                  src={slide.url}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                />
              </Slide>
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
  )
}

export default Carousel
