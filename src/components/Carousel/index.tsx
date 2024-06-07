import React from 'react'
import { Slide, SliderButton, SliderProvider, SliderTrack } from '@faceless-ui/slider'
import Media from '../Media'
import { Media as MediaType } from '@/types/Fields/Media/types'

export type CarouselProps = {
  slides: MediaType[]
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const { slides } = props

  if (slides.length === 0) {
    return <p>Loading slides...</p>
  }

  return (
    <SliderProvider>
      <SliderButton direction="prev">Previous</SliderButton>
      <SliderTrack>
        {slides.map((slide, index) => {
          return (
            <Slide index={index} key={index}>
              test
            </Slide>
          )
        })}
      </SliderTrack>
      <SliderButton direction="next">Next</SliderButton>
    </SliderProvider>
  )
}

export default Carousel
