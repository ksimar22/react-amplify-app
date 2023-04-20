import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/simarsingh01/" targer="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ksimar22" targer="_blank"><IoLogoGithub/></a>

    </div>
  )
}

export default HeaderSocials