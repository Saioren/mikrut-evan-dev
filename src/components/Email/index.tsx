import React, { useState } from 'react'
import classes from './index.module.scss'
import PopOut from '../PopOut'
import { FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

const EmailComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const { name, email, message } = formData
    if (name === '' || email === '' || message === '') {
      toast.error('Please fill in all fields.')
      return false
    }

    if (!email.includes('@')) {
      toast.error('Please enter a valid email address.')
      return false
    }

    return true
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID || 'service_rgnwnc8'
  const templateId = process.env.EMAILJS_TEMPLATE_ID || 'template_oik1zlg'
  const publicKey = process.env.EMAILJS_PUBLIC_KEY || 'E-dwrODiszns7TEVk'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      toast.loading('Sending email...')
      try {
        const response = await emailjs.send(
          serviceId as string,
          templateId as string,
          formData,
          publicKey,
        )
        console.log('Email was sent successfully. ', response)
        toast.dismiss()
        toast.success('Email sent successfully!')
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } catch (error) {
        console.log('Error sending email: ', error)
        toast.dismiss()
        toast.error('Failed to send email. Please try again later.')
      }
    }
  }

  return (
    <form noValidate className={classes.emailForm} onSubmit={handleSubmit}>
      <div className={classes.formGroup}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.formGroup}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.formGroup}>
        <textarea
          id="message"
          name="message"
          placeholder="your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className={classes.buttonWrap}>
        <PopOut icon gradient margin hover>
          <button className={classes.send} type="submit">
            <div>Send</div>
            <div className={classes.plane}>
              <FaPaperPlane />
            </div>
          </button>
        </PopOut>
      </div>
    </form>
  )
}

export default EmailComponent
