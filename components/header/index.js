import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import * as R from 'ramda';
import *  as H from '../../helpers/index';
import classNames from 'classnames';
import Logo from '../../public/static/logo.png';
import LogoBlack from '../../public/static/logo-black.png';
import SearchInput from '../fieldset/search-input';
// context
import { LocationsOptions } from '../../hook/useContensGlobal';
// hook
import { useWindowsHeight } from '../../hook/useWindowHeight';
// icon
import * as I from '../../icon';
import { Header, NavLinkMob } from './ui';
import { Container } from '../../ui/index';
// ////////////////////////////////////

const navConfig = [
  {
    name: 'Locations',
    type: 'locations',
    links: []
  },
  {
    name: 'City Guide',
    type: 'cityGuide',
    links: [
      {
        path: '/city-guide-page',
        name: 'London',
        payload: 'London'
      },
      {
        path: '/city-guide-page',
        name: 'Berlin',
        payload: 'Berlin'
      }
    ]
  }
];

const LinkBox = ({ links, path, name, i }) => {
  const [open, setOpen] = useState(false);
  const activeClass = classNames({ 'open': open });
  const arrowClass = classNames('down-arrow', { 'rotate': open });
  const linkWrapClass = classNames('link-wrap', { 'active': open });
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
            (item, i) => (
              <Link key={i}
                href={{
                  pathname: item.path,
                  query: R.path(['query'], item)
                }}
              >
                <a>{item.name}</a>
              </Link>
            )
          )
        }
      </div>

    </div>
  );
};

const MobBar = (props) => (
  <div>
    <Link href='/'>
      <img alt='logoBlack' src={LogoBlack} />
    </Link>
    <div className='search-input'>
      {/* <SearchInput {...props} class='mob-search' /> */}
    </div>
    {
      props.nav.map(
        (link, i) => (
          <LinkBox key={i} {...link} i={i} />
        )
      )
    }
    <div className='link-wrap'>
      <Link href='/support-page'>
        <a>FAQ</a>
      </Link>
    </div>
    <div className='social-box'>
      <a><div className='facebook' /></a>
      <a><div className='instagram' /></a>
      <a><div className='linkedin' /></a>
    </div>
  </div>
);

const NavBar = (props) => {
  const mobMenuClass = classNames('mob-nav-bar', { 'active': props.mobMenu });
  return (
    <nav className={props.navClass}>
      {
        props.nav.map(
          (link, i) => (
            <LinkBox key={i} {...link} i={i} />
          )
        )
      }
      <div className={mobMenuClass}>
        <MobBar {...props} />
      </div>
    </nav>
  );
};

const HeaderComponent = (props) => {
  const [active, setActive] = useState(false);
  const [navSettings, setNavSettings] = useState([]);
  const { shouldShowActions } = useWindowsHeight();
  const clNameHeader = classNames({ 'black': R.or(props.blackHeader, shouldShowActions) });
  const clName = classNames('burger', { 'active': active });
  const navClass = classNames({ 'active': active });
  const { locations } = useContext(LocationsOptions);
  useEffect(() => {
    if (H.isNotNilAndNotEmpty(locations)) {
      const navLs = navConfig.map((item, i) => {
        if (R.equals(item.type, 'locations')) {
          let links = locations.map(loc => ({
            path: '/complexes',
            name: loc,
            query: { location: loc }
          }));
          return R.assoc('links', links, item);
        }
        return item;
      });
      setNavSettings(navLs);
    }
  }, [locations]);
  return (
    <Header className={clNameHeader}>
      <Container className='container'>
        <NavBar
          {...props}
          mobMenu={active}
          nav={navSettings}
          navClass={navClass}
        />
        <Link href='/'>
          <img alt='logo' src={Logo} />
        </Link>
        <div className='search-input'>
          {/* <SearchInput {...props} locations={locations} /> */}
        </div>
        <div
          className={clName}
          onClick={() => setActive(!active)}
        />
      </Container>
    </Header>
  );
};

export default HeaderComponent;
