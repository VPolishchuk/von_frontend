import React from 'react'
import * as R from 'ramda'
import { useRouter } from 'next/router';
import useModal from '../../hook/useModal';
import HeaderComponent from '../header';
import FooterComponent from '../footer';
import Modal from '../../components/modal';
import { GlobalStyle } from '../../ui/index';
import {
  Layout,
  LoaderBlock
} from './ui';
// //////////////////////////////////////////////

// //////////////////////////////////////////
export const Loader = (props) => {
  return (
    <div className='preloader'>
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
        `}
      </style>
    </div>
  )
}
export const LayoutBox = (props) => {
  const router = useRouter()
  const { open, openModal, closeModal } = useModal()
  const localUrl = R.path(['route'], router)
  const url = [
    '/sing-up',
    '/sing-in',
    '/locations',
    '/booking-page',
    '/support-page',
    '/detail-career',
    '/detail-apartments',
    '/city-guide-page-coolcousin'
  ]
  const blackHeader = R.includes(localUrl, url)
  return (
    <Layout>
      <HeaderComponent {...props} blackHeader={blackHeader} />
      {props.children}
      {/* {open ? (
        <Modal
        close={closeModal}
        render={() => <h1>This is a Modal using Portals!</h1>}
        />
        ) : null} */}
      <FooterComponent {...props} />
      <GlobalStyle />
    </Layout>
  )
}

export default LayoutBox;
