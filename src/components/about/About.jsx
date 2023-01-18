import React, {useState} from 'react'
import './about.css'

import { Container, Row, Col } from 'reactstrap'
import Education from './Education'

const About = () => {

  const [aboutFilter, setAboutFilter] = useState('ABOUT')

  // Will fix the about button
  
  return <section id='about'>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <h2>About Me</h2>
        </Col>
        <Col lg='4' md='3'>
          <div className='about__btns d-flex flex-column align-items-center'>
            <button className='about__btn about__btn-active' onClick={()=>setAboutFilter('ABOUT')}>About Me</button>
            <button className='about__btn' onClick={()=>setAboutFilter('EDUCATION')}>Education</button>
            <button className='about__btn'>Skills</button>
            <button className='about__btn'>Award</button>
          </div>
        </Col>

        <Col lg='8' md='9'>

          {
            aboutFilter === 'ABOUT' &&    <div className='about__content__wrapper d-flex gap-5'>
            <div className='about__img w-25'>
              <img src="" alt="" />
            </div>
  
            <div className='about__content'>
              <h2>I'm John Joseph Olivera</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem illo nisi hic minus repellendus quas perferendis, est modi eligendi! Repellat, hic iusto accusantium culpa blanditiis veritatis laboriosam odit autem eum!</p>
                <div className='social__links'>
                  <h6 className='mb-4'>Connect with me:</h6>
                  <span><a href="https://www.facebook.com/"><i class="ri-facebook-line"></i></a></span>
                  <span><a href="#"><i class="ri-youtube-line"></i></a></span>
                  <span><a href="#"><i class="ri-github-line"></i></a></span>
                  <span><a href="#"><i class="ri-gitlab-line"></i></a></span>
                  <span><a href="#"><i class="ri-instagram-line"></i></a></span>
                  <span><a href="#"><i class="ri-linkedin-line"></i></a></span>
                  
                </div>
             </div>
          </div>
          }

          {
            aboutFilter === 'EDUCATION' && <Education />
          }

        </Col>
      </Row>
    </Container>
    </section>

}

export default About
