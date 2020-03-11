import React, { useState } from 'react';
import * as R from 'ramda';
import * as I  from '../../../icon/index.js';
import { DatepickerComponent } from '../../fieldset/datepiker';
import SliderComponent from '../../slider-component/index';
// images
import Img1 from '../../../public/static/home-page/services/1.png';
import Img2 from '../../../public/static/home-page/services/2.png';
import Img3 from '../../../public/static/home-page/services/3.png';
import Img4 from '../../../public/static/home-page/services/4.png';
import Img5 from '../../../public/static/home-page/services/5.png';
import Img6 from '../../../public/static/home-page/services/6.png';
import Img7 from '../../../public/static/home-page/services/7.png';
import Img8 from '../../../public/static/home-page/services/8.png';
import Img9 from '../../../public/static/home-page/services/9.png';
import Img10 from '../../../public/static/home-page/services/10.png';
import Img11 from '../../../public/static/home-page/services/11.png';
import Img12 from '../../../public/static/home-page/services/12.png';
// locations
import Img13 from '../../../public/static/locations/1.png';
import Img14 from '../../../public/static/locations/2.png';
import Img15 from '../../../public/static/locations/3.png';

import Img16 from '../../../public/static/locations/details/1.png';
import Img17 from '../../../public/static/locations/details/2.png';
import Img18 from '../../../public/static/locations/details/3.png';

// styles
import './style.scss';
//////////////////////////////////////////////

const testImage = [
  Img13, Img14, Img15
]

const services = [
  {
    image: Img1,
    title: 'Events',
  },
  {
    image: Img2,
    title: 'Co-working café',
  },
  {
    image: Img3,
    title: 'Fully furnished apartments',
  },
  {
    image: Img4,
    title: 'Professional market place',
  },
  {
    image: Img5,
    title: 'Membership perks',
  },
  {
    image: Img6,
    title: 'Ultra High speed internet',
  },
  // {
  //   image: Img7,
  //   title: '',
  // },
  // {
  //   image: Img8,
  //   title: '',
  // },
  // {
  //   image: Img9,
  //   title: '',
  // },
  // {
  //   image: Img10,
  //   title: '',
  // },
  // {
  //   image: Img11,
  //   title: '',
  // },
  // {
  //   image: Img12,
  //   title: '',
  // },
];

const nearbyInfo = [
  {
    image: Img16,
    title: 'Hampstead Heath'
  },
  {
    image: Img17,
    title: 'Brent Cross'
  },
  {
    image: Img18,
    title: 'Camden Town'
  },
];

const locationPlane = {
  list1: [
    'Camden Town – 15 minutes',
    'King’s Cross St Pancras– 20 minutes',
    'Leicester Square – 23 minutes',
    'Waterloo – 27 minutes',
    'London Bridge – 31 minutes '
  ],
  list2: [
    'No.82 & 13 to Victoria',
    'No.134 to Muswell Hill & Tottenham Court Road',
    'No. 221 to Edgware',
      
  ],
  moreLocations: [
    {
      title: 'Finchley',
      text: `
        Hill House brings a new approach to city living. 
        The Tower and the Podium have their own unique feel. 
        And the shared common areas make sure that our 
        residents’ homes extend way beyond their front door.
      `,
      image: Img13,
    },
    {
      title: 'Zenith House',
      text: `
        Hill House brings a new approach to city living. 
        The Tower and the Podium have their own unique feel. 
        And the shared common areas make sure that our 
        residents’ homes extend way beyond their front door.
      `,
      image: Img14,
    },
    {
      title: 'Hill House',
      text: `
        Hill House brings a new approach to city living. 
        The Tower and the Podium have their own unique feel. 
        And the shared common areas make sure that our 
        residents’ homes extend way beyond their front door.
      `,
      image: Img15,
    },
  ]
};

const LocationCard = ({ image, text, title }) => (
  <div className='loc-card-wrap'>
    <img alt='image' src={image} />
    <div>
      <h5>{title}</h5>
      <p>{text}</p>
      <button>
        Explore
      </button>
    </div>
  </div>
)

const NearbyBox = ({ items }) => {
  return (
    <div className='nearby-box'>
      <div>
        {
          items.map((item, i) => (
            <div key={i}
              style={{
                width: '200px',
                height: '200px',
                marginRight: '10px',
              }}
            >
              <img
                alt='image'
                src={item.image}
                width='100%'
                height='auto'
              />
              <p>{item.title}</p>
            </div>
          ))
        }
      </div>
    </div>
)}

const LeftBox = (props) => (
  <div className='left-box'>
    <h3>Hill House</h3>
    <p>
        Hill House brings a new approach to city living. The Tower 
        and the Podium have their own unique feel. And the shared common 
        areas make sure that our residents’ homes extend way beyond their 
        front door.
    </p>
    <hr/>
    <LocationPosition />
    <div className='ap-info-wrap'>
      <h5>neighbourhood</h5>
      <p>
        Finchleyis part of the London Borough of Barnet, filled with leafy parks and peaceful 
        residential streets, making it popular with families and professionals seeking a 
        suburban lifestyle, without compromising on proximity to central London.
      </p>
    </div>
    <hr/>
    <div className='ap-info-wrap'>
      <h5>Transport</h5>
      <p>
        Finchleyhas four Underground stations, all on the High Barnet branch of the Northern Line.
        East Finchley is in Zone 3, and Finchley Central, 
        West Finchley, and Woodside Park are in Zone 4. You have great direct routes to London hot spots such as:
      </p>
      <br/><br/>
      {
        R.path(['locationPlane', 'list1'], props).map(
          (item , i) => (
            <span key={i}>{item}</span>
          )
        )
      }
      <br/><br/>
      <p>
        There are also several bus routes from North Finchley bus station, situation across the road:
      </p>
      <br/><br/>
      {
        R.path(['locationPlane', 'list2'], props).map(
          (item , i) => (
            <span key={i}>{item}</span>
          )
        )
      }
    </div>
    <hr/>
    <div className='ap-info-wrap'>
      <h5>Nearby</h5>
      {/* <NearbyBox items={nearbyInfo}/> */}
    </div>
    <hr/>
    <div className='ap-info-wrap'>
      <h5>What's included?</h5>
      <div className='services-wrap'>
        {
          services.map(
            (item, i) => (
              <div key={i}>
                <img key={i} src={item.image} alt='img' />
                <p>{item.title}</p>
              </div>
            )
          )
        }
      </div>
    </div>
  </div>
);

const SelectDateFilter = (props) => {
  return (
    <form id='date-form-filter'>
      <DatepickerComponent {...props} />
      <div>

      </div>
    </form>
  )
}

const LocationPosition = () => (
  <div className='loc-pos-wrap'>
    <h5>Location</h5>
    <div className='location-map' />
    <h5>Location</h5>
    <p>Nether St, London N3 1NT, UK</p>
    <div className='info-wrap'>
      <div className='icon-wrap'>
        {I.phoneIcon(20, 20)}
      </div>
      +44 20 7686 9779
    </div>
    <button className='gradient'>
      Check availability
    </button>
    <hr/>
  </div>
)
const RightBox = (props) => (
  <div className='right-box'>
    <LocationPosition />
    {/* <SelectDateFilter {...props} /> */}
  </div>
);

export const LocationDetailSection = (props) => (
  <div className='wrapper'>
    <div className='main-section-location-details'>
      <SliderComponent images={testImage}/>
    </div>
    <div className='container'>
      <LeftBox {...props} locationPlane={locationPlane}/>
      <RightBox {...props} />
      <>
        <div className='bottom-box'>
          <h3>More locations in London</h3>
          {
            R.path(['moreLocations'], locationPlane).map(
              (item, i) => (
                <LocationCard key={++i} {...item} i={i}/>
              )
            )
          }
        </div>
      </>
    </div>
  </div>
)

export default React.memo(LocationDetailSection);
