import Padding from '@/layout/Padding'
import { Email as EmailBlockType } from '@/types/Blocks/Email/types'
import React from 'react'

const EmailBlock: React.FC<EmailBlockType> = (props) => {
  const { heading, padding, position } = props
  return (
    <Padding padding={padding}>
      The email block! {heading} {position}
    </Padding>
  )
}

export default EmailBlock
