

import React, {useRef, useEffect, useState} from 'react';
import './hero.css';

import { Container,Row,Col } from 'reactstrap';

import Typewriter from 'typewriter-effect'


const Hero = () => {

  const [state] = useState({
    title: 'Welcome!',
    titleTwo: "I'm",
  })
  return <section className='hero__section' id="home">
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero__content">
            <p>
              {state.title}
            </p>
            
            <h2 className='hero__title mb-5'>{state.titleTwo}<span>
              <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings:[
                  "John Joseph Olivera",
                  "a Web Developer."
                ]
              }}
              />
              </span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='mt-5 hero__btns d-flex align-items-center gap-4'>
              <button className='btn hire__btn'><a href="#">Hire Me</a></button>
              <button className='btn'>Contact</button>
            </div>
          </div>
        
        </Col>

        <Col lg='6' md='6'>
          <div className='hero__img'>
            <img src='./images/profile.png' alt='profile' className='w-100' />
          </div>
        </Col>
      </Row>
    </Container>

  </section>

}

export default Hero
