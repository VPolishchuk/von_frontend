import React from 'react';

import './style.scss';
//////////////////////////////////////////////

const list = [
    'CLUB HOUSE',
    'GALLERY',
    'COFFEE CONTAINER',
    'URBAN PLAYGROUND',
    'HÖR RADIO STATION',
]
export const LifestyleSection = (props) => (
  <div className='section-6'>
    <h2 className='container'>LIFESTYLE</h2>
    <p className='container'>
      Vonder provides digital nomads and young professionals a home away
      from home to connect, experience and embark on urban adventures.
      We’ve built a platform where we empower the community by supporting local artists ,
      artisans, vendors and creators.
    </p>
    <div className='list-wrap'>
      <ul>
        {
          list.map(
            (item, i) => (
              <li key={i}>
                {item}
              </li>
            )
          )
        }
      </ul>
    </div>
    <h2 className='gradient'>VONDER CLUB HOUSE</h2>
    <div alt='image' className='lifeStyle-img'>
      <div>
        <ul>
          {/* {
            list.map(
              (item, i) => (
                <li key={i}>
                  {item}
                </li>
              )
            )
          } */}
        </ul>
        <div>
          <h2 className='gradient'>VONDER CLUB HOUSE</h2>
          <p className='white'>
            A marriage between a great event venue and a co-working space
            that can be used to network, eat, hang out and learn. A space
            to showcase talent, create connections and enjoy
            the perpetual flow of caffeine.
          </p>
        </div>
      </div>
    </div>
    <p>
      A marriage between a great event venue and a co-working space
      that can be used to network, eat, hang out and learn. A space
      to showcase talent, create connections and enjoy
      the perpetual flow of caffeine.
    </p>
  </div>
);

export default LifestyleSection;