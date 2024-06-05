import React from 'react'
import { Footer as FooterType } from '@/types/Layout/Footer/types'
import PopOut from '@/components/PopOut'
import classes from './index.module.scss'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { useGlobals } from '@/providers/GlobalsProvider'
import Image from 'next/image'
import { HiOutlineQrcode } from 'react-icons/hi'
import Padding from '../Padding'
import { PaddingOption } from '@/types/Layout/Padding/types'

const Footer: React.FC = () => {
  const { footer } = useGlobals()

  const { linkBlock, copyrightBlock } = footer
  const { linkBlockLabel, links } = linkBlock
  const { copyrightLabel, copyrightBody, copyrightLinks, linkText } = copyrightBlock

  console.log(links)

  const padding: PaddingOption = {
    paddingTop: 'large',
  }

  return (
    <Padding padding={padding}>
      <Grid>
        <Cell cols={12} colsM={8} colsS={7}>
          <PopOut>
            <div className={classes.footerWrap}>
              <div className={`${classes.section} ${classes.logoSection}`}>
                <HiOutlineQrcode className={classes.logo} />
              </div>
              <div className={`${classes.section} ${classes.linkSection}`}>
                <p>{linkBlockLabel}</p>
                {links?.map((link) => {
                  return link.imageLink.url ? (
                    <a>
                      <Image
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
              <div className={`${classes.section} ${classes.copyrightSection}`}>
                <p>{copyrightBody}</p>
                <div className={classes.documentation}>
                  <p>{linkText}</p>
                  {copyrightLinks?.map((link) => (
                    <a>
                      <Image
                        src={link.imageLink.image.url}
                        width={32}
                        height={32}
                        alt={link.imageLink.image.alt}
                      />
                    </a>
                  ))}
                </div>
                <div>
                  <p>{copyrightLabel}</p>
                </div>
              </div>
            </div>
          </PopOut>
        </Cell>
      </Grid>
    </Padding>
  )
}

export default Footer
