import React from 'react'
import { Carousel as CarouselBlockType } from '@/types/Blocks/Carousel/types'
import Media from '@/components/Media'
import Content from '@/components/Content'
import Padding from '@/layout/Padding'

const CarouselBlock: React.FC<CarouselBlockType> = (props) => {
  const { heading, padding, position, content, slides } = props
  return (
    <Padding padding={padding}>
      CarouselBlock {heading} {padding} {position}
      <Content content={content} />
      {slides.map((slide, i) => {
        return (
          <div key={i}>
            <Media mediaFromCMS={slide.slide} />
          </div>
        )
      })}
    </Padding>
  )
}

export default CarouselBlock
