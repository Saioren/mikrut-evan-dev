import React from 'react'
import { Carousel as CarouselBlockType } from '@/types/Blocks/Carousel/types'
import Content from '@/components/Content'
import Padding from '@/layout/Padding'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Carousel from '@/components/Carousel'
import classes from './index.module.scss'
import BackgroundColors from '@/components/BackgroundColors'
import PopOut from '@/components/PopOut'

const CarouselBlock: React.FC<CarouselBlockType> = (props) => {
  const { heading, padding, position, content, slides } = props

  const customSlides = [
    {
      id: '666b144f8e3e838aac461d38',
      alt: 'Slide',
      filename: '1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg',
      mimeType: 'image/jpeg',
      filesize: 125858,
      width: 1920,
      height: 1080,
      createdAt: '2024-06-13T15:46:23.735Z',
      updatedAt: '2024-06-13T15:46:23.735Z',
      url: '/api/media/file/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg',
      thumbnailURL: null,
    },
    {
      id: '666b144f8e3e838aac461d38',
      alt: 'Slide',
      filename: '1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg',
      mimeType: 'image/jpeg',
      filesize: 125858,
      width: 1920,
      height: 1080,
      createdAt: '2024-06-13T15:46:23.735Z',
      updatedAt: '2024-06-13T15:46:23.735Z',
      url: '/api/media/file/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg',
      thumbnailURL: null,
    },
    {
      id: '666b144f8e3e838aac461d38',
      alt: 'Slide',
      filename: '1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg',
      mimeType: 'image/jpeg',
      filesize: 125858,
      width: 1920,
      height: 1080,
      createdAt: '2024-06-13T15:46:23.735Z',
      updatedAt: '2024-06-13T15:46:23.735Z',
      url: '/api/media/file/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg',
      thumbnailURL: null,
    },
  ]

  return (
    <Padding padding={padding}>
      <Grid className={classes.carouselBlock}>
        {position === 'left' ? (
          <React.Fragment>
            <Cell cols={6} colsM={4} colsS={9}>
              <Content heading={heading} headingLowImpact content={content} />
            </Cell>
            <Cell className={classes.carousel} cols={8} colsM={5} colsS={9}>
              <PopOut wait={3} animate>
                <Carousel slides={customSlides} slideData={slides} />
              </PopOut>
            </Cell>
            <BackgroundColors positions={['bottomLeft', 'right']} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Cell cols={7} colsM={5} className={classes.carousel}>
              <Carousel slides={customSlides} slideData={slides} />
            </Cell>
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
