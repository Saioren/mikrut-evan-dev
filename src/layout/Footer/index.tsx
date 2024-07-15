import React, { useEffect, useState } from 'react'
import PopOut from '@/components/PopOut'
import classes from './index.module.scss'
import { Cell, Grid } from '@faceless-ui/css-grid'
import Image from 'next/image'
import Padding from '../Padding'
import { PaddingOption } from '@/types/Layout/Padding/types'
import ToTop from '@/components/ToTop'
import MikrutEvanLogo from '@/components/MikrutEvanLogo'
import { BsEggFill, BsLockFill, BsUnlockFill } from 'react-icons/bs'
import { useEasterEgg } from '@/eggs/EasterEggProvider'
import toast from 'react-hot-toast'

const Footer: React.FC = () => {
  const { unlock, setLockTrigger, easterEggGet, eggOne, revealEggOne, setRevealEggOne } =
    useEasterEgg()
  const [isClient, setIsClient] = useState(false)
  const footer = {
    linkBlock: {
      linkBlockLabel: 'you can find me on',

      links: [
        {
          imageLink: {
            type: 'custom',
            newTab: true,
            url: 'https://github.com/Saioren',

            image: {
              id: '66608f44c6832661fdd0ddd7',
              alt: 'Github',
              filename: 'Octicons-mark-github.svg',
              mimeType: 'image/svg+xml',
              filesize: 968,
              width: 1024,
              height: 1024,
              createdAt: '2024-06-05T16:16:04.145Z',
              updatedAt: '2024-06-05T16:16:04.145Z',
              url: '/api/media/file/Octicons-mark-github.svg',
              thumbnailURL: null,
            },
          },
          id: '66608f1031d23f0d8ca6327a',
        },

        {
          imageLink: {
            type: 'custom',
            newTab: true,
            url: 'https://x.com/mikrutevan1',

            image: {
              id: '6679c6e768a4a01e54dc7fa0',
              alt: 'X',
              filename: 'Twitter_new_X_logo.png',
              mimeType: 'image/png',
              filesize: 75267,
              width: 576,
              height: 488,
              createdAt: '2024-06-24T19:20:07.521Z',
              updatedAt: '2024-06-24T19:20:07.521Z',
              url: '/api/media/file/Twitter_new_X_logo.png',
              thumbnailURL: null,
            },
          },
          id: '66705b53140fc05210ab1099',
        },
      ],
    },

    copyrightBlock: {
      copyrightLabel: 'Evan Mikrut © All Rights Reserved. ',
      copyrightBody: 'this website was built with Payload CMS 3.0 and Next.JS.',
      linkText: 'official documentation',

      copyrightLinks: [
        {
          imageLink: {
            type: 'custom',
            newTab: true,
            url: 'https://payloadcms.com/',

            image: {
              id: '667058075e2428b5084c2cce',
              alt: 'Payload CMS',
              filename: 'payload.png',
              mimeType: 'image/png',
              filesize: 8964,
              width: 1024,
              height: 1024,
              createdAt: '2024-06-17T15:36:39.651Z',
              updatedAt: '2024-06-17T15:36:39.651Z',
              url: '/api/media/file/payload.png',
              thumbnailURL: null,
            },
          },
          id: '66608fa631d23f0d8ca6327b',
        },

        {
          imageLink: {
            type: 'custom',
            newTab: true,
            url: 'https://nextjs.org/',

            image: {
              id: '66608ff6c6832661fdd0dea3',
              alt: 'Next.JS',
              filename: 'next-js.svg',
              mimeType: 'image/svg+xml',
              filesize: 1527,
              width: 1365,
              height: 1365,
              createdAt: '2024-06-05T16:19:02.675Z',
              updatedAt: '2024-06-05T16:19:02.675Z',
              url: '/api/media/file/next-js.svg',
              thumbnailURL: null,
            },
          },
          id: '66608fe731d23f0d8ca6327c',
        },
      ],
    },
    globalType: 'footer',
    createdAt: '2024-06-05T16:20:01.846Z',
    updatedAt: '2024-06-24T19:20:09.412Z',
    id: '66609031c6832661fdd0dec2',
  }

  const linkBlock = footer?.linkBlock
  const copyrightBlock = footer?.copyrightBlock

  const linkBlockLabel = linkBlock?.linkBlockLabel
  const links = linkBlock?.links

  const copyrightLabel = copyrightBlock?.copyrightLabel
  const copyrightBody = copyrightBlock?.copyrightBody
  const linkText = copyrightBlock?.linkText
  const copyrightLinks = copyrightBlock?.copyrightLinks

  const padding: PaddingOption = {
    paddingTop: 'large',
  }

  function lockNotify() {
    toast.error(`It's locked...`)
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Padding padding={padding}>
      <Grid className={classes.grid}>
        <Cell cols={12} colsM={8} colsS={7}>
          <PopOut>
            <div className={classes.footerWrap}>
              <section className={classes.firstHalf}>
                <PopOut small>
                  <div className={`${classes.section} ${classes.logoSection}`}>
                    <MikrutEvanLogo />
                  </div>
                </PopOut>
                <PopOut small>
                  <div className={`${classes.section} ${classes.linkSection}`}>
                    <p>{linkBlockLabel}</p>
                    <div className={classes.linksArray}>
                      {links?.map((link, index) => {
                        return link.imageLink.url ? (
                          <a
                            href={link.imageLink.url}
                            key={index}
                            target={link.imageLink.newTab ? '__blank' : ''}
                          >
                            <Image
                              style={{
                                borderRadius: '50%',
                              }}
                              className={classes.icon}
                              src={link.imageLink.image.url}
                              width={32}
                              height={32}
                              alt={link.imageLink.image.alt}
                            />
                          </a>
                        ) : (
                          <div>No images to show...</div>
                        )
                      })}
                    </div>
                  </div>
                </PopOut>
              </section>
              <PopOut small>
                <div className={`${classes.section} ${classes.copyrightSection}`}>
                  <p className={classes.paddingBottom}>{copyrightBody}</p>
                  <div className={classes.documentation}>
                    <p>{linkText}</p>
                    <div className={classes.docsArray}>
                      {copyrightLinks?.map((link, index) => {
                        return (
                          <a
                            href={link.imageLink.url}
                            key={index}
                            target={link.imageLink.newTab ? '__blank' : ''}
                          >
                            <Image
                              style={{
                                borderRadius:
                                  link.imageLink.image.filename !==
                                  'payload-logo-A8D673164C-seeklogo.com.png'
                                    ? '50%'
                                    : '',
                              }}
                              className={classes.icon}
                              src={link.imageLink.image.url}
                              width={32}
                              height={32}
                              alt={link.imageLink.image.alt}
                            />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                  <div>
                    <p className={classes.copyrightLabel}>{copyrightLabel}</p>
                  </div>
                </div>
              </PopOut>
              <div className={classes.secret}>
                {unlock && !eggOne && isClient ? (
                  <React.Fragment>
                    {!revealEggOne ? (
                      <BsUnlockFill
                        onClick={() => setRevealEggOne(true)}
                        className={classes.unlock}
                      />
                    ) : (
                      <BsEggFill onClick={() => easterEggGet(1)} />
                    )}
                  </React.Fragment>
                ) : (
                  !eggOne &&
                  isClient && (
                    <BsLockFill
                      onMouseEnter={() => setLockTrigger(true)}
                      onClick={lockNotify}
                      className={classes.lock}
                    />
                  )
                )}
              </div>
            </div>
          </PopOut>
        </Cell>
      </Grid>
      <div className={classes.toTop}>
        <ToTop />
      </div>
    </Padding>
  )
}

export default Footer
