

import React from 'react';
import './hero.css';

import { Container,Row,Col } from 'reactstrap';


const Hero = () => {

  return <section>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero__content">
            <p>
              Welcome!
            </p>
            <h5>Hi</h5>
            <h2 className='hero__title'>I'm <span>John Joseph Olivera</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='hero__btns d-flex align-items-center gap-4'>
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
