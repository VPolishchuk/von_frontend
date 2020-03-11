import React from 'react';
import './style.scss';
//////////////////////////////////////////////

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
  },
]
export const LocationSection = (props) => (
  <div className='section-3'>
    <h2>OUR LOCATIONS</h2>
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
  </div>
)

export default LocationSection;