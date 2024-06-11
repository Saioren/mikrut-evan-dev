import React, { useState } from 'react'
import classes from './index.module.scss'
import PopOut from '../PopOut'
import { FaPaperPlane } from 'react-icons/fa'

const EmailComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can add code to handle form submission, like sending data to a server or performing client-side validation
    console.log(formData)
    // Clear the form fields after submission if needed
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <form className={classes.emailForm} onSubmit={handleSubmit}>
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
