import React, { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import useModal from '../../hook/useModal';
import HeaderComponent from '../header';
import FooterComponent from '../footer';
import * as I from '../../icon/index';
import Modal from '../../components/modal';
import {
  Layout,
  LoaderBlock
} from './ui';
// //////////////////////////////////////////////

export const Loader = (props) => {
  return (
    <div className='preloader'>
      <div className='logo'>
        {I.logo(250, 70)}
      </div>
      <LoaderBlock />
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
          }
          .preloader {
            top: 0;
            left: 0;
            width: 100vw;
            z-index: 9999;
            display: flex;
            height: 100vh;
            position: fixed;
            align-items: center;
            background-color: #000;
            flex-direction: column;
            justify-content: center;
          }
          .logo {
            width: 250px;
            height: 70px;
            margin-bottom: 70px;
          }
        `}
      </style>
    </div>
  );
};

export const LayoutBox = (props) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const {
    open,
    openModal,
    closeModal,
    renderModal,
    setRenderModal
  } = useModal();
  const localUrl = R.path(['route'], router);
  const url = [
    '/login',
    '/sing-in',
    '/complexes',
    '/career/[id]',
    '/booking-page',
    '/support-page',
    '/detail-career',
    '/complexes/[id]',
    '/detail-apartments',
    '/city-guide-page-coolcousin'
  ];
  const blackHeader = R.includes(localUrl, url);
  return (
    <Layout>
      <HeaderComponent
        {...props}
        active={active}
        setActive={setActive}
        blackHeader={blackHeader}
      />
      {React.cloneElement(props.children, { open, renderModal, closeModal, setRenderModal, openModal })}
      {open ? (
        <Modal
          close={closeModal}
          render={() => renderModal}
        />
      ) : null}
      <FooterComponent {...props} />
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow: ${R.or(active, open) ? 'hidden' : 'visible'};
            overflow-x: hidden;
          }
        `}
      </style>
    </Layout>
  );
};

export default LayoutBox;
