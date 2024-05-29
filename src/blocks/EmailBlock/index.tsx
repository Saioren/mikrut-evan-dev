import { Email as EmailBlockType } from '@/types/Blocks/Email/types'
import React from 'react'

const EmailBlock: React.FC<EmailBlockType> = (props) => {
  const { header, padding, position } = props
  return <div>The email block!</div>
}

export default EmailBlock
