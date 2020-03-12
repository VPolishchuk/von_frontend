import * as R from 'ramda';
import React from 'react';
import * as I from '../../../icon/index.js';
import {
  H2,
  H3,
  H5,
  Wrapper,
  Button,
  Container,
  Paragraph,
} from '../../../ui';
import {
  GridWrap,
  SectionWrap,
  Container
} from './ui';
/// ///////////////////////////////////////////

const apartmentPlane = {
  size: {
    bedroom: '10m2',
    property: '42m2'
  },
  info: [
    'Registration possible',
    'Furnished',
    '2 housemates',
    'Space for 1 person'
  ],
  amenities: [
    {
      name: 'Dryer',
      icon: I.dryerIcon
    },
    {
      name: 'Air conditioning',
      icon: I.airConditioningIcon
    },
    {
      name: 'Closet',
      icon: I.closetIcon
    },
    {
      name: 'Dishwasher',
      icon: I.dishwasherIcon
    },
    {
      name: 'Bed',
      icon: I.bedIcon
    }
  ],
  rentalConditions: [
    {
      name: 'First month’s rent',
      value: '$550 + $137 (one time service free)'
    },
    {
      name: 'Monthly rent',
      value: '$550'
    },
    {
      name: 'Security deposit',
      value: '$1100'
    }
  ],
  bills: [
    {
      type: 'Water',
      status: true
    },
    {
      type: 'Electrity',
      status: true
    },
    {
      type: 'Gas',
      status: true
    },
    {
      type: 'Internet',
      status: true
    }
  ]
};
const PlaceBox = ({ size, info}) => (
  <div className='place-box'>
    <div>
      {R.keys(size).map(
        (item, i) => (
          <Paragraph>
            <span>{item}:</span>
            {R.path([item], size)}
          </Paragraph>
        )
      )}
    </div>
    <div>
      {info.map(
        (item, i) => (
          <Paragraph key={i}>{item}</Paragraph>
        )
      )}
    </div>
  </div>
)

const AmenitiesBox = ({ name, icon, i }) => (
  <div key={i} className='amenities-box'>
    <span>
      {icon()}
    </span>
    {name}
  </div>
)

const RentalConditionsBox = ({ i, name, value }) => (
  <div key={i} className='rental-conditions-box'>
    <span>{name}</span>
    <Paragraph>{value}</Paragraph>
  </div>
)

const BillsBox = ({ i, type, status }) => (
  <div key={i} className='bill-box'>
    <span>{type}</span>
    <span>
      {status && I.checkmarkIcon()}
    </span>
  </div>
)

const LeftBox = (props) => (
  <div className='left-box'>
    <H3>Private room in London</H3>
    <Button className='left small'>
      Modern apartment
    </Button>
    <Paragraph><b>340€</b> / month</Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur elit.
      Eget fermentumblandit egestas auctor est
      phasellus condimentum diam. Ipsum aliquet
      euismod quam quam quam feugiat vel
      cursus.
    </Paragraph>
    <hr />
    <div className='ap-info-wrap'>
      <H5>Bedroom</H5>
      <PlaceBox
        size={R.path(['apartmentInfo', 'size'], props)}
        info={R.path(['apartmentInfo', 'info'], props)}
      />
    </div>
    <hr />
    <div className='ap-info-wrap'>
      <H5>amenities</H5>
      <div>
        {
          R.path(['apartmentInfo', 'amenities'], props).map(
            (item, i) => (
              <AmenitiesBox key={++i} {...item} i={i} />
            )
          )
        }
      </div>
    </div>
    <hr />
    <div className='ap-info-wrap'>
      <H5>rental conditions</H5>
      <div>
        {
          R.path(['apartmentInfo', 'rentalConditions'], props).map(
            (item, i) => (
              <RentalConditionsBox {...item} i={i} />
            )
          )
        }
      </div>
    </div>
    <hr />
    <div className='ap-info-wrap'>
      <H5>bills</H5>
      <div>
        {
          R.path(['apartmentInfo', 'bills'], props).map(
            (item, i) => (
              <BillsBox {...item} i={i} />
            )
          )
        }
      </div>
    </div>
  </div>
)

const RightBox = (props) => (
  <div className='right-box'>
    <H5>Location</H5>
    <div className='location-map' />
    <H5>Location</H5>
    <Paragraph>
      <span>You choose Vonder at</span>
      <br />
      Nether St, London N3 1NT, UK
    </Paragraph>
    <Button className='gradient'>
      Book for 550$/month
    </Button>
  </div>
)

export const ApartmentDetailSection = (props) => (
  <Wrapper>
    <SectionWrap>
      <div />
    </SectionWrap>
    <Container className='container'>
      <LeftBox {...props} apartmentInfo={apartmentPlane} />
      <RightBox {...props} />
    </Container>
  </Wrapper>
)

export default React.memo(ApartmentDetailSection)
