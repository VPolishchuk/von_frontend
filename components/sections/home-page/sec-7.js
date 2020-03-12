import React from 'react';
import Img from '../../../public/static/home-page/contact-us/1.png';
import { H2, H3, Paragraph, Button } from '../../../ui/common';
import { Section7 } from './ui';
/// ///////////////////////////////////////////

export const ContactUsSection = (props) => (
  <Section7 className='section-7 container'>
    <H2 className='gradient'>Contact Us</H2>
    <div className='contact-wrap'>
      <div className='form-wrap'>
        <H3>
					That's what's up!<br />
          <span>Say hello!</span>
        </H3>
        <form id='send'>
          <input type='name' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <textarea placeholder='Message' rows='30' />
          <Button className='gradient'>
						Send
          </Button>
        </form>
      </div>
      <div className='social-wrap'>
        <img src={Img} alt='img' className='social-image' />
        <div className='social'>
          <span>Find Us</span>
          <div className='social-box'>
            <a><div className='facebook' /></a>
            <a><div className='instagram' /></a>
            <a><div className='linkedin' /></a>
          </div>
        </div>
      </div>
    </div>
  </Section7>
)

export default ContactUsSection;
