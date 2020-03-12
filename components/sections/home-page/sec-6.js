import React from 'react';
import { H2, Paragraph } from '../../../ui/common';
import { Section6 } from './ui';
/// ///////////////////////////////////////////

const list = [
  'CLUB HOUSE',
  'GALLERY',
  'COFFEE CONTAINER',
  'URBAN PLAYGROUND',
  'HÖR RADIO STATION'
]
export const LifestyleSection = (props) => (
  <Section6 className='section-6'>
    <H2 className='container'>LIFESTYLE</H2>
    <Paragraph className='container'>
      Vonder provides digital nomads and young professionals a home away
      from home to connect, experience and embark on urban adventures.
      We’ve built a platform where we empower the community by supporting local artists ,
      artisans, vendors and creators.
    </Paragraph>
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
    <H2 className='gradient'>VONDER CLUB HOUSE</H2>
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
          <H2 className='gradient'>VONDER CLUB HOUSE</H2>
          <Paragraph className='white'>
            A marriage between a great event venue and a co-working space
            that can be used to network, eat, hang out and learn. A space
            to showcase talent, create connections and enjoy
            the perpetual flow of caffeine.
          </Paragraph>
        </div>
      </div>
    </div>
    <Paragraph>
      A marriage between a great event venue and a co-working space
      that can be used to network, eat, hang out and learn. A space
      to showcase talent, create connections and enjoy
      the perpetual flow of caffeine.
    </Paragraph>
  </Section6>
)

export default LifestyleSection;
