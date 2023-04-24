import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ted5kx', 'service_2ted5kx', form.current, '4oTvZ7igh4eVf0Ivp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sskhataytu@gmail.com</h5>
            <a href="sskhataytu@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail  className="contact__option-icon" />
            <h4>Phone Number</h4>
            <h5>425.977.9044</h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
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