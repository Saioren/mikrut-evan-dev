import React from 'react'
import { Carousel as CarouselBlockType } from '@/types/Blocks/Carousel/types'
import Media from '@/components/Media'
import Content from '@/components/Content'

const CarouselBlock: React.FC<CarouselBlockType> = (props) => {
  const { header, padding, position, content, slides } = props
  return (
    <div>
      CarouselBlock {header} {padding} {position}
      <Content content={content} />
      {slides.map((slide, i) => {
        return (
          <div key={i}>
            <Media mediaFromCMS={slide} />
          </div>
        )
      })}
    </div>
  )
}

export default CarouselBlock
