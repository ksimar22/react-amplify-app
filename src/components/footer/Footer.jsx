import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Home</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/simarsingh01/" targer="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ksimar22" targer="_blank"><IoLogoGithub/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Simarjit Khataytu. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer