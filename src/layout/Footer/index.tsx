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
  const { footer } = useGlobals()

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
