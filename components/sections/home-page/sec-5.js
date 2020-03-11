import React from 'react';
import Img1 from '../../../public/static/home-page/experience/1.png';
import Img2 from '../../../public/static/home-page/experience/2.png';
import Img3 from '../../../public/static/home-page/experience/3.png';
import './style.scss';
//////////////////////////////////////////////

export const ExperienceMoreSection = (props) => (
  <div className='section-5 container'>
    <h2 className='gradient'>EXPERIENCE MORE</h2>
    <div className='experience-wrap'>
      <div className='img-text-wrap'>
        <img className='images one' src={Img1} alt='img'/>
        <p className='title'>
          lifestyle, Food, art <br/>
          <span>people & cities</span>
        </p>
      </div>
      <div className='img-text-wrap two'>
        <img className='images two' src={Img2} alt='img-1' />
        <img className='images three' src={Img3} alt='img-2' />
      </div>
        <p className='title'>
          lifestyle, Food, art <br/>
          <span>people & cities</span>
        </p>
    </div>
  </div>
)

export default ExperienceMoreSection;
