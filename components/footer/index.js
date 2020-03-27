import * as R from 'ramda';
import Link from 'next/link';
import { Footer } from './ui';
import React, { useContext } from 'react';
// context
import { GlobalContext } from '../../hook/useContextGlobal';
// hook
// /////////////////////////////////////////////////////////////

const navConfig = [
  {
    path: '/apartments',
    name: 'Apartments type'
  },
  {
    path: '/complexes',
    name: 'Locations',
    type: 'locations'
  },
  {
    path: '/careers-page',
    name: 'Careers'
  },
  {
    path: '/city-guide-page',
    name: 'City Guide'
  },
  {
    path: '/support-page',
    name: 'FAQ'
  }
];

const Nav = (props) => (
  <nav>
    {
      navConfig.map(
        (item, i) => {
          if (R.equals('locations', R.path(['type'], item))) {
            return (
              <Link
                key={i}
                href={{
                  pathname: item.path,
                  query: {
                    location: props.location && R.head(props.location)
                  }
                }}
              >
                <a>{item.name}</a>
              </Link>
            );
          }
          return (
            <Link key={i} href={item.path}>
              <a>{item.name}</a>
            </Link>
          );
        }
      )
    }
  </nav>
);

const FooterComponent = (props) => {
  const { locations } = useContext(GlobalContext);
  return (
    <Footer>
      <div className='container'>
        <div className='footer-logo' />
        <Nav {...props} locations={locations}/>
        <div className='contacts'>
          <span>Vonder GmbH Schlüterstr. 45, 10707 Berlin</span>
          <span>Info@www.vondereurope.com</span>
        </div>
        <Nav {...props} />
      </div>
    </Footer>
  )
}

export default FooterComponent;
