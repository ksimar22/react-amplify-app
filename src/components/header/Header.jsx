import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__contaner">
        <h5>Hello I'm</h5>
        <h1>Simarjit Khataytu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        
        <CTA />
        <HeaderSocial/>

      <div className="me">
        <img src={ME} alt="didnt load :(" />
      </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header