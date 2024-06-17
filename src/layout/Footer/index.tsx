import React from 'react'
import { Footer as FooterType } from '@/types/Layout/Footer/types'
import PopOut from '@/components/PopOut'
import classes from './index.module.scss'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { useGlobals } from '@/providers/GlobalsProvider'
import Image from 'next/image'
import Padding from '../Padding'
import { PaddingOption } from '@/types/Layout/Padding/types'
import ToTop from '@/components/ToTop'
import MikrutEvanLogo from '@/components/MikrutEvanLogo'

const Footer: React.FC = () => {
  //const { footer } = useGlobals(

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
            alt: 'Github',
          },
          id: '66608f1031d23f0d8ca6327a',
        },

        {
          imageLink: {
            type: 'custom',
            url: 'https://x.com/mikrutevan1',

            image: {
              id: '66705b8f5e2428b5084c30e3',
              alt: 'X',
              filename: 'x.webp',
              mimeType: 'image/webp',
              filesize: 32640,
              width: 2364,
              height: 2364,
              createdAt: '2024-06-17T15:51:43.602Z',
              updatedAt: '2024-06-17T15:51:43.602Z',
              url: '/api/media/file/x.webp',
              thumbnailURL: null,
            },
            alt: 'X',
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
              id: '66608fe3c6832661fdd0de6a',
              alt: 'Payload CMS',
              filename: 'payload-logo-A8D673164C-seeklogo.com.png',
              mimeType: 'image/png',
              filesize: 3575,
              width: 253,
              height: 300,
              createdAt: '2024-06-05T16:18:43.554Z',
              updatedAt: '2024-06-05T16:18:43.554Z',
              url: '/api/media/file/payload-logo-A8D673164C-seeklogo.com.png',
              thumbnailURL: null,
            },
            alt: 'Payload CMS',
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
            alt: 'Next.JS',
          },
          id: '66608fe731d23f0d8ca6327c',
        },
      ],
    },
    globalType: 'footer',
    createdAt: '2024-06-05T16:20:01.846Z',
    updatedAt: '2024-06-17T15:51:51.456Z',
    id: '66609031c6832661fdd0dec2',
  }

  const { linkBlock, copyrightBlock } = footer
  const { linkBlockLabel, links } = linkBlock
  const { copyrightLabel, copyrightBody, copyrightLinks, linkText } = copyrightBlock

  const padding: PaddingOption = {
    paddingTop: 'large',
  }

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
                        console.log(link.imageLink.image.filename)
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
