import React, { useState } from 'react';
import * as R from 'ramda';
import * as I  from '../../../icon/index.js';

import './style.scss';
//////////////////////////////////////////////

const apartmentPlane = {
  size: {
    bedroom: '10m2',
    property: '42m2',
  },
  info: [
    'Registration possible',
    'Furnished',
    '2 housemates',
    'Space for 1 person',
  ],
  amenities: [
    {
      name: 'Dryer',
      icon: I.dryerIcon,
    },
    {
      name: 'Air conditioning',
      icon: I.airConditioningIcon,
    },
    {
      name: 'Closet',
      icon: I.closetIcon,
    },
    {
      name: 'Dishwasher',
      icon: I.dishwasherIcon,
    },
    {
      name: 'Bed',
      icon: I.bedIcon,
    },
  ],
  rentalConditions: [
    {
      name: 'First month’s rent',
      value: '$550 + $137 (one time service free)',
    },
    {
      name: 'Monthly rent',
      value: '$550',
    },
    {
      name: 'Security deposit',
      value: '$1100',
    },
  ],
  bills : [
    {
      type: 'Water',
      status: true,
    },
    {
      type: 'Electrity',
      status: true,
    },
    {
      type: 'Gas',
      status: true,
    },
    {
      type: 'Internet',
      status: true,
    },
  ]
};

const PlaceBox = ({ size, info,}) => (
  <div className='place-box'> 
    <div>
      {R.keys(size).map(
        (item, i) => (
          <p>
            <span>{item}:</span> 
            {R.path([item], size)}
          </p>
        )
      )}
    </div>
    <div>
      {info.map(
        (item , i) => (
          <p key={i}>{item}</p>
        )
      )}
    </div>
  </div>
);

const AmenitiesBox = ({ name, icon, i }) => (
  <div key={i} className='amenities-box'> 
    <span>
      {icon()}
    </span>
    {name}
  </div>
);

const RentalConditionsBox = ({ i, name, value }) => (
  <div key={i} className='rental-conditions-box'> 
    <span>{name}</span>
    <p>{value}</p>
  </div>
);

const BillsBox = ({ i, type, status }) => (
  <div key={i} className='bill-box'> 
    <span>{type}</span>
    <span>
      {status && I.checkmarkIcon()}
    </span>
  </div>
);

const LeftBox = (props) => (
  <div className='left-box'>
    <h3>Private room in London</h3>
    <button className='left small'>
      Modern apartment
    </button>
    <p><b>340€</b> / month</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur elit. 
      Eget fermentumblandit egestas auctor est 
      phasellus condimentum diam. Ipsum aliquet
      euismod quam quam quam feugiat vel 
      cursus.
    </p>
    <hr/>
    <div className='ap-info-wrap'>
      <h5>Bedroom</h5>
      <PlaceBox
        size={R.path(['apartmentInfo', 'size'], props)}
        info={R.path(['apartmentInfo', 'info'], props)}
      />
    </div>
    <hr/>
    <div className='ap-info-wrap'>
      <h5>amenities</h5>
      <div>
        {
          R.path(['apartmentInfo', 'amenities'], props).map(
            (item, i) => (
              <AmenitiesBox key={++i} {...item} i={i}/>
            )
          )
        }
      </div>
    </div>
    <hr/>
    <div className='ap-info-wrap'>
      <h5>rental conditions</h5>
      <div>
        {
          R.path(['apartmentInfo', 'rentalConditions'], props).map(
            (item, i) => (
              <RentalConditionsBox {...item} i={i}/>
            )
          )
        }
      </div>
    </div>
    <hr/>
    <div className='ap-info-wrap'>
      <h5>bills</h5>
      <div>
        {
          R.path(['apartmentInfo', 'bills'], props).map(
            (item, i) => (
              <BillsBox {...item} i={i}/>
            )
          )
        }
      </div>
    </div>
  </div>
);

const RightBox = (props) => (
  <div className='right-box'>
    <h5>Location</h5>
    <div className='location-map' />
    <h5>Location</h5>
    <p>
      <span>You choose Vonder at</span>
      <br/>
      Nether St, London N3 1NT, UK
    </p>
    <button className='gradient'>
      Book for 550$/month
    </button>
  </div>
);

export const ApartmentDetailSection = (props) => (
  <div className='wrapper'>
    <div className='main-section-apartment-details'>
      <div />
    </div>
    <div className='container'>
      <LeftBox {...props} apartmentInfo={apartmentPlane}/>
      <RightBox {...props} />
    </div>
  </div>
)

export default React.memo(ApartmentDetailSection);

