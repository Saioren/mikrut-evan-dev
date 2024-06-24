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
import Link from 'next/link'

export type CarouselProps = {
  slides: SlideType[]
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const { slides } = props
  const { width } = useWindowInfo()
  const [slideNumber, setSlideNumber] = useState(0)

  if (slides.length === 0) {
    return <p>Loading slides...</p>
  }

  const widthCheck = width && width < 768

  return (
    <FadeIn order={widthCheck ? 3 : 1}>
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
        <div className={`${classes.sliderButtonWrap} ${classes.prevWrap}`}>
          <SliderButton className={`${classes.prev} ${classes.button}`} direction="prev">
            <PopOut icon hover z={3} smaller>
              <FaAngleLeft className={classes.icon} />
            </PopOut>
          </SliderButton>
        </div>
        <SliderTrack className={classes.track}>
          {slides.map((slide, index) => {
            return (
              <React.Fragment key={index}>
                <Slide className={classes.slide} index={index} key={index}>
                  <Image
                    className={classes.slideImage}
                    src={'/api/media/file/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg'}
                    alt={'slide'}
                    width={'1920'}
                    height={'1080'}
                  />
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
          })}
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
      </SliderProvider>
    </FadeIn>
  )
}

export default Carousel
