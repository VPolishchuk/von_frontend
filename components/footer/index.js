import React from 'react';
import * as R from 'ramda';
import Link from 'next/link';
import './style.scss'
//////////////////////////////////////

const navConfig = [
  {
    path: '/apartments-type-page',
    name: 'Apartments type'
  },
  {
    path: '/locations',
    name: 'Locations'
  },
  {
    path: '/career-page',
    name: 'Careers'
  },
  {
    path: '/city-guide-page',
    name: 'City Guide'
  },
  {
    path: '/support-page',
    name: 'FAQ'
  },
];

const Nav = (props) => (
  <nav>
    {
      navConfig.map(
        (item, i) => (
          <Link key={i} href={item.path}>
            <a>{item.name}</a>
          </Link>
        )
      )
    }
  </nav>
);

const FooterComponent = (props) => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-logo'/>
        <Nav {...props} />
        <div className='contacts'> 
          <span>Vonder GmbH Schlüterstr. 45, 10707 Berlin</span>
          <span>Info@www.vondereurope.com</span>
        </div>
        <Nav {...props} />
      </div>
    </footer>
  )   
};

export default FooterComponent;