import React from 'react'
import './services.css'
import {TbPoint} from 'react-icons/tb'

const Services = () => {
  return (
    <section id='services'>
      
     <h2>Certifications</h2>

     <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>IBM Fullstack Cloud Developer</h3>
        </div>

        <ul className='service__list'>
          <li>
            <TbPoint className='service__list-icon' />
            <p>I did this</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>I did this</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>I did this</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>I did this</p>
          </li>
          </ul>
      </article>
{/*END OF IBM CERTIFICATE */}

      <article className="service">
        <div className="service__head">
          <h3>AWS Cloud Practioner</h3>
        </div>

        <ul className='service__list'>
          <li>
            <TbPoint className='service__list-icon' />
            <p>I did this</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>I did this</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>I did this</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>I did this</p>
          </li>
          </ul>
      </article>
{/*END OF AWS CERTIFICATE */}

     </div>
      </section>
  )
}

export default Services