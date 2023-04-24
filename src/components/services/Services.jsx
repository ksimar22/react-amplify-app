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
            <p>Designed and developed cloud-based applications using modern web technologies, such as HTML5, CSS3, JavaScript, and React, for both front-end and back-end development.</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>Deployed applications in AWS or Azure cloud environments, utilizing services like EC2, S3, RDS, and Lambda, and implemented containerization using Docker and Kubernetes.</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>Worked in an Agile development environment, collaborating with cross-functional teams and utilizing Git for version control, Jira for issue tracking, and Jenkins for continuous integration and delivery.</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>Demonstrated proficiency in database management, including designing and implementing database schemas, writing queries, and optimizing database performance using tools like MySQL, PostgreSQL, or MongoDB.</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>Conducted regular testing, debugging, and troubleshooting of applications, and implemented security best practices, such as SSL encryption and authentication, to ensure data privacy and protection.</p>
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
            <p>Demonstrated foundational knowledge of AWS Cloud concepts, including cloud architecture, security, pricing, and billing, by passing the AWS Cloud Practitioner exam.</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>Acquired practical skills in AWS Cloud through hands-on experience with core AWS services, such as EC2, S3, VPC, and IAM, and familiarity with various AWS tools, such as CloudFormation and CloudWatch.</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>Developed an understanding of the benefits and challenges of cloud computing and how AWS Cloud can be used to build scalable, flexible, and cost-effective solutions for businesses and organizations of all sizes.</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>Established a strong foundation for further AWS certification and professional development by gaining insights into AWS Cloud best practices, compliance and governance, and emerging trends in cloud computing.</p>
          </li>
          <li>
            <TbPoint className='service__list-icon' />
            <p>Demonstrated effective communication skills and the ability to collaborate with technical and non-technical stakeholders by effectively explaining AWS Cloud concepts and solutions, and their impact on business operations and outcomes.</p>
          </li>
          </ul>
      </article>
{/*END OF AWS CERTIFICATE */}

     </div>
      </section>
  )
}

export default Services