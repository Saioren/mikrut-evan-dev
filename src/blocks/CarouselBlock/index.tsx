import React from 'react'
import { Carousel as CarouselBlockType } from '@/types/Blocks/Carousel/types'
import Content from '@/components/Content'
import Padding from '@/layout/Padding'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Carousel from '@/components/Carousel'
import classes from './index.module.scss'
import BackgroundColors from '@/components/BackgroundColors'

const CarouselBlock: React.FC<CarouselBlockType> = (props) => {
  const { heading, padding, position, content /*slides*/ } = props

  const slides = [
    {
      id: '66633b188c7c2a709a980515',
      alt: 'laptop',
      filename: 'main-qimg-dc599ae681492759baf5d9938b9070a4-lq.jpg',
      mimeType: 'image/jpeg',
      filesize: 49882,
      width: 602,
      height: 378,
      createdAt: '2024-06-07T16:53:44.471Z',
      updatedAt: '2024-06-07T16:53:44.471Z',
      url: '/api/media/file/main-qimg-dc599ae681492759baf5d9938b9070a4-lq.jpg',
      thumbnailURL: null,
    },
    {
      id: '66673b74fc16c3f760ab35c6',
      alt: 'another',
      filename: 'main-qimg-dc599ae681492759baf5d9938b9070a4-lq-1.jpg',
      mimeType: 'image/jpeg',
      filesize: 49882,
      width: 602,
      height: 378,
      createdAt: '2024-06-10T17:44:20.477Z',
      updatedAt: '2024-06-10T17:44:20.477Z',
      url: '/api/media/file/main-qimg-dc599ae681492759baf5d9938b9070a4-lq-1.jpg',
      thumbnailURL: null,
    },
    {
      id: '66633b188c7c2a709a980515',
      alt: 'laptop',
      filename: 'main-qimg-dc599ae681492759baf5d9938b9070a4-lq.jpg',
      mimeType: 'image/jpeg',
      filesize: 49882,
      width: 602,
      height: 378,
      createdAt: '2024-06-07T16:53:44.471Z',
      updatedAt: '2024-06-07T16:53:44.471Z',
      url: '/api/media/file/main-qimg-dc599ae681492759baf5d9938b9070a4-lq.jpg',
      thumbnailURL: null,
    },
  ]

  return (
    <Padding padding={padding}>
      <Grid className={classes.carouselBlock}>
        {position === 'left' ? (
          <React.Fragment>
            <Cell cols={6} colsM={4}>
              <Content heading={heading} headingLowImpact content={content} />
            </Cell>
            <Cell className={classes.carousel} cols={8} colsM={5}>
              <Carousel slides={slides} />
            </Cell>
            <BackgroundColors positions={['bottomLeft', 'right']} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Cell cols={7} colsM={5} className={classes.carousel}>
              <Carousel slides={slides} />
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
