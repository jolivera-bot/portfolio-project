import React from 'react';
import { Container } from 'reactstrap';

import "./header.css";

const navlinks = [
  {
    display:'Home',
    url:'#home'
  },
  {
    display:'About',
    url:'#about'
  },
  {
    display:'Tools',
    url:'#tools'
  },
  {
    display:'Projects',
    url:'#projects'
  },
  {
    display:'Contact',
    url:'#contact'
  }
];

const Header = () => {
  return <header className="header">
    <Container>
      <div className="navigation d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src='./images/jjco-logo.png' alt='logo' height={100}/>
        </div>
        
        <div className="nav__menu">
          <ul className='nav__list'>
            {navlinks.map((item, index) => (
              <li className='nav__item'>
                <a href={item.url}>{item.display}</a>
            </li>
            ))}
            
          </ul>
        </div>
            
            <div className='nav__right d-flex align-items-center gap-4'>
                <button className='btn'>Let's Talk</button>
                <span className='mobile__menu'>
                  <i class="ri-menu-5-line"></i>
                </span>
            </div>
      </div>

      
    </Container>
  </header>
}

export default Header
