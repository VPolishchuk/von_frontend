import React from 'react';
import { H2 } from '../../../ui/common';
import { Section3 } from './ui';
/// ///////////////////////////////////////////

const list = [
  {
    location: 'Budapest',
    img: ''
  },
  {
    location: 'WARSAW',
    img: ''
  },
  {
    location: 'LONDON',
    img: ''
  },
  {
    location: 'BARCELONA',
    img: ''
  },
  {
    location: 'Dublin',
    img: ''
  },
  {
    location: 'Paris',
    img: ''
  },
  {
    location: 'BERLIN',
    img: ''
  }
]
export const LocationSection = (props) => (
  <Section3 className='section-3'>
    <H2>OUR LOCATIONS</H2>
    <div className='location-wrap'>
      <ul>
        {
          list.map(
            (item, i) => (
              <li key={i}>
                {item.location}
              </li>
            )
          )
        }
      </ul>
    </div>
  </Section3>
)

export default LocationSection;
