import { Slide as SlideType } from '@/types/Blocks/Carousel/types'
import { Slide } from '@faceless-ui/slider'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'
import { Media } from '@/types/Fields/Media/types'
import { useTheme } from '@/providers/ThemeContext'

type Props = {
  slide: SlideType
  index: number
}

const CarouselSlide: React.FC<Props> = (props) => {
  const { slide, index } = props
  const { theme } = useTheme()
  const [darkImage, setDarkImage] = useState<Media>()

  useEffect(() => {
    let formattedImage: Media

    if (slide.projectImage) {
      formattedImage = slide.projectImage
    } else if (theme === 'dark') {
      formattedImage = slide.projectImageDark || slide.projectImageLight
    } else {
      formattedImage = slide.projectImageLight || slide.projectImageDark
    }

    setDarkImage(formattedImage)
  }, [theme, slide])

  return (
    <React.Fragment>
      <Slide className={classes.slide} index={index} key={index}>
        {darkImage && (
          <Image
            className={classes.slideImage}
            src={darkImage.url}
            alt={darkImage.alt}
            width={darkImage.width}
            height={darkImage.height}
          />
        )}
        <div className={`${classes.projectInfoWrap}`}>
          <div className={classes.projectInfo}>
            <div className={classes.projectTitle}>{slide.slideTitle}</div>
            <div className={classes.projectDescription}>{slide.slideDescription}</div>
            <div className={classes.projectLinks}>
              <Link className={classes.viewProject} href={`/projects#${slide.slideUrl}`}>
                View on Projects Page
              </Link>
            </div>
          </div>
        </div>
      </Slide>
    </React.Fragment>
  )
}

export default CarouselSlide
