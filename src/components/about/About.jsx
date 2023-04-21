import React from 'react'
import './about.css'
//import ME from '../../assets/me-about.png'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
        <div className="about__content">
        <p> I'm a recent graduate from the University of Washington, where I earned my degree in Management Information Systems. I'm a dedicated and passionate individual with a strong interest in the Cloud Industry. I have also earned a certificate in Full Stack Cloud Development, and I am certified as an AWS Cloud Practitioner.

My education and certifications have given me a solid foundation in cloud technologies and best practices. I am excited to apply my knowledge and skills to a new role in the industry.

Throughout my academic career, I have gained experience in project management, team collaboration, and problem-solving. These skills, coupled with my technical expertise, make me a valuable addition to any team.

I am currently seeking opportunities in the Cloud Industry, and I am excited to connect with professionals in the field. Thank you for taking the time to visit my profile, and I look forward to exploring potential opportunities together! </p>
        </div>    
    </section>
  )
}

export default About

/*  <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt= "didn't load"/>
          </div>  */