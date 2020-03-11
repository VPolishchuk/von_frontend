 import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import SliderComponent from '../../slider-component/index'; 
import Img1 from '../../../public/static/home-page/homes/loc-1.png';
import Img2 from '../../../public/static/home-page/homes/loc-2.png';
import Img5 from '../../../public/static/city-guide/1.png';
import Img6 from '../../../public/static/city-guide/2.png';
import Img3 from '../../../public/static/city-guide/3.png';
import Img4 from '../../../public/static/city-guide/4.png';

import * as R from 'ramda';

import {
  Transition } from 'react-transition-group';

import './style.scss';
//////////////////////////////////////////////

const images = [Img5, Img6, Img3, Img4];

export const AboutSection = (props) => {
  const currentRef = useRef();
  const [inProp, setInProp] = useState(false);

  const duration = 100;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: 'translateY(-100px)',
    },
    entered:  {
      opacity: 1,
      transform: 'translateY(0)',
    },
    // exiting:  { opacity: 0 },
    // exited:  { opacity: 0 },
  };

  useEffect(() => {

    if (!inProp && props.scrollPosY >= R.multiply(R.path(['current', 'offsetParent', 'offsetTop'], currentRef), 0.3)) {
      setInProp(!inProp)
    }
  }, [props.scrollPosY])
  return (
    <div className='section-2 container'>
      <Transition in={inProp} timeout={500}>
        {state => {
          return (
            <>
              <h2 
                ref={currentRef}
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                WHAT IS VONDER?
              </h2>
              <p
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                Vonder is a <span className='gradient'>global co-living </span>lifestyle
                brand offering beautifully designed
                urban spaces, <span>emphasising</span> experiences
                and a vibrant local <span>community.</span> 
              </p>
              <h2
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >Our Homes</h2>
            </>
        )}}
      </Transition>

      <SliderComponent images={images} />
      
      <p className='second'>
        We offer a variety of fully furnished quality studios, 1, 2, 3
        – bedroom apartments with a cozy and urban design. 
      </p>
      <div className='image-wrap'>
        <img className='left' alt='im-1' src={Img1} />
        <img className='right' alt='im-2' src={Img2} />
      </div>
    </div>
)};

export default AboutSection;
