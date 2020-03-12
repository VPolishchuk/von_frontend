import React from 'react';
import Img1 from '../../../public/static/home-page/experience/1.png';
import Img2 from '../../../public/static/home-page/experience/2.png';
import Img3 from '../../../public/static/home-page/experience/3.png';
import { H2, Paragraph } from '../../../ui/common';
import { Section5 } from './ui';
// ///////////////////////////////////////////

export const ExperienceMoreSection = (props) => (
  <Section5 className='section-5 container'>
    <H2 className='gradient'>EXPERIENCE MORE</H2>
    <div className='experience-wrap'>
      <div className='img-text-wrap'>
        <img className='images one' src={Img1} alt='img' />
        <Paragraph className='title'>
          lifestyle, Food, art <br />
          <span>people & cities</span>
        </Paragraph>
      </div>
      <div className='img-text-wrap two'>
        <img className='images two' src={Img2} alt='img-1' />
        <img className='images three' src={Img3} alt='img-2' />
      </div>
      <Paragraph className='title'>
          lifestyle, Food, art <br />
        <span>people & cities</span>
      </Paragraph>
    </div>
  </Section5>
)

export default ExperienceMoreSection;
