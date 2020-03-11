import React, { useState } from 'react';
import Link from 'next/link';
import * as R from 'ramda';
import classNames from 'classnames';
import Logo from '../../public/static/logo.png';
import LogoBlack from '../../public/static/logo-black.png';
import SearchInput from '../fieldset/search-input';
// hook
import { useWindowsHeight } from '../../hook/useWindowHeight';
// icon
import * as I from '../../icon';
import './style.scss';
//////////////////////////////////////

const navConfig = [
  {
    name: 'Locations',
    links: [
      {
        path: '/locations',
        name: 'London',
        payload: 'London',
      },
      {
        path: '/locations',
        name: 'Berlin',
        payload: 'Berlin',
      },
    ]
  },
  {
    name: 'City Guide',
    links: [
      {
        path: '/city-guide-page',
        name: 'London',
        payload: 'London',
      },
      {
        path: '/city-guide-page',
        name: 'Berlin',
        payload: 'Berlin',
      },
    ]
  },
];

const LinkBox = ({ links, path, name, i }) => {
  const [open, setOpen] = useState(false);
  const activeClass =  classNames({ 'open': open });
  const arrowClass =  classNames('down-arrow', { 'rotate': open });
  const linkWrapClass =  classNames('link-wrap', { 'active': open });
  return (
    <div
      className={linkWrapClass}
    >
      <div 
        key={i}
        onClick={() => setOpen(!open)}
      >
        {name}
        <div 
          className={arrowClass}
        >
          {I.arrowDownIcon(20, 20)}
        </div>
      </div>
      <div className={activeClass}>
        {
          links && links.map(
            (item ,i) => (
              <Link key={i} href={item.path}>
                <a>{item.name}</a>
              </Link>
            )
          )
        }
      </div>

    </div>
  )
}
const MobBar = (props) => (
  <div>
    <img alt='logoBlack' src={LogoBlack} />
    <div className='search-input'>
      <SearchInput {...props} class='mob-search'/>
    </div>
    {
      props.nav.map(
        (link, i) => (
          <LinkBox  key={i} {...link} i={i}/>
        )
      )
    }
    <div className='link-wrap'>
      <Link href='/support-page'>
        <a>FAQ</a>
      </Link>
    </div>
    <div className='social-box'>
      <a><div className='facebook'/></a>
      <a><div className='instagram'/></a>
      <a><div className='linkedin'/></a>
    </div>
  </div>
);

const NavBar = (props) => {
  const mobMenuClass =  classNames('mob-nav-bar', { 'active': props.mobMenu });
  return (
    <nav className={props.navClass}>
      {
        props.nav.map(
          (link, i) => (
            <LinkBox key={i} {...link} i={i}/>
          )
        )
      }
      <div className={mobMenuClass}>
        <MobBar {...props} />
      </div>
    </nav>
  )
};

const HeaderComponent = (props) => {
  const [active, setActive] = useState(false);
  const { shouldShowActions } = useWindowsHeight();
  const clNameHeader =  classNames({ 'black': R.or(props.blackHeader, shouldShowActions) });
  const clName =  classNames('burger', { 'active': active });
  const navClass =  classNames({ 'active': active });
  return (
    <header className={clNameHeader}>
      <div className='container'>
        <NavBar
          {...props}
          nav={navConfig}
          mobMenu={active}
          navClass={navClass}
        />
        <img alt='logo' src={Logo} />
        <div className='search-input'>
          <SearchInput {...props} />
        </div>
        <div
          className={clName}
          onClick={() => setActive(!active)}
        />
      </div>
    </header>
  )   
};

export default HeaderComponent;
