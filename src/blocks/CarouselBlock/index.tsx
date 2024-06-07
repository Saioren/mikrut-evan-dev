import React from 'react'
import { Carousel as CarouselBlockType } from '@/types/Blocks/Carousel/types'
import Content from '@/components/Content'
import Padding from '@/layout/Padding'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Carousel from '@/components/Carousel'

const CarouselBlock: React.FC<CarouselBlockType> = (props) => {
  const { heading, padding, position, content, slides } = props

  return (
    <Padding padding={padding}>
      <Grid>
        {position === 'left' ? (
          <React.Fragment>
            <Cell cols={6} colsM={4}>
              <Content heading={heading} headingLowImpact content={content} />
            </Cell>
            <Cell cols={7} colsM={5}>
              <Carousel slides={slides} />
            </Cell>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Cell>
              <Carousel slides={slides} />
            </Cell>
            <Cell>
              <Content heading={heading} headingLowImpact content={content} />
            </Cell>
          </React.Fragment>
        )}
      </Grid>
    </Padding>
  )
}

export default CarouselBlock
