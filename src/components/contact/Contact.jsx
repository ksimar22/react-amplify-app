import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="continer contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>sskhataytu@gmail.com</h5>
            <a href="sskhataytu@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Phone Number</h4>
            <h5>425.977.9044</h5>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact