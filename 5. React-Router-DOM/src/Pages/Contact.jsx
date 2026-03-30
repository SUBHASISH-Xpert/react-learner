import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container page">
        <h1>Contact Us</h1>
        <p className="page-description">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

        <div className="contact-content">
            <div className="contact-info">
                <h2>Get In Touch</h2>
                <div className="contact-details">
                    <div className="contact-item">
                        <h3>📧 Email</h3>
                        <p>info@company.com</p>
                    </div>
                    <div className="contact-item">
                        <h3>📞 Phone</h3>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="contact-item">
                        <h3>📍 Address</h3>
                        <p>123 Business Street<br />City, State 12345</p>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <h2>Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact