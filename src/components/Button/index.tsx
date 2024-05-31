import { Hyperlink } from '@/components/Hyperlink'
import { LinkAppearances, Link as LinkType } from '@/types/Fields/Link/types'
import React, { Fragment } from 'react'
import classes from './index.module.scss'
import { ButtonProps } from '@/types/Components/Button/types'

const ButtonContents: React.FC<ButtonProps> = ({ linkFromCMS }) => {
  const labelToUse = linkFromCMS?.link.label

  return <React.Fragment>{labelToUse}</React.Fragment>
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { buttonType, className, linkFromCMS, onMouseEnter, onMouseLeave, onClick } = props
  const { appearance, type, label, reference, url, newTab } = linkFromCMS.link

  const classList = [className, classes.button, appearance && classes[`type--${appearance}`]]
    .filter(Boolean)
    .join(' ')

  let href = url || ''

  if (type === 'reference' && reference && reference.relationTo === 'pages' && reference.value) {
    // Ensure reference.value is a string or convert it properly
    if (typeof reference.value === 'string') {
      href = `/pages/${reference.value}`
    } else if (reference.value && typeof reference.value === 'object' && 'id' in reference.value) {
      href = `/pages/${reference.value.id}`
    } else {
      console.error('Invalid reference value for constructing href:', reference.value)
    }
  }

  if (buttonType === 'submit' || buttonType === 'button') {
    return (
      <button className={classList} type={buttonType} onClick={onClick}>
        <span className={classes.contents}>
          <ButtonContents {...props} />
        </span>
      </button>
    )
  }

  return (
    <Hyperlink
      href={href}
      linkFromCMS={linkFromCMS}
      className={classes.contents}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      newTab={newTab}
    >
      <ButtonContents {...props} />
    </Hyperlink>
  )
}

export default Button
