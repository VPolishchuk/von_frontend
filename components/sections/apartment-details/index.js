import * as R from 'ramda';
import React from 'react';
import * as I from '../../../icon/index.js';
// helpers
import * as H from '../../../helpers';
import useApartmentDetails from '../../../hook/useApartmentDetails';
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
  SectionWrap,
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
          <Paragraph key={i}>
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
);

const BillsBox = ({ i, type, status }) => (
  <div key={i} className='bill-box'>
    <span>{type}</span>
    <span>
      {status && I.checkmarkIcon()}
    </span>
  </div>
);

const LeftBox = (props) => {
  const {
    id,
    name,
    photos,
    securityDeposit,
    apartmentTypeName,
    apartmentTypeId,
    roomTypeName,
    roomTypeId,
    address,
    geo,
    description,
    amenities,
    size,
    price
  } = props;
  return (
    <div className='left-box'>
      <H3>{name}</H3>
      <Button className='left small'>{apartmentTypeName}</Button>
      <Paragraph><b>{price}$</b> / month</Paragraph>
      <Paragraph>{description}</Paragraph>
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
          <div className='rental-conditions-box'>
            <span>First month’s rent</span>
            <Paragraph>$550 + $137 (one time service free)</Paragraph>
          </div>
          <div className='rental-conditions-box'>
            <span>Monthly rent</span>
            <Paragraph>{price}</Paragraph>
          </div>
          <div className='rental-conditions-box'>
            <span>Security deposit</span>
            <Paragraph>{securityDeposit}</Paragraph>
          </div>
        </div>
      </div>
      <hr />
      <div className='ap-info-wrap'>
        <H5>bills</H5>
        <div>
          {
            R.path(['apartmentInfo', 'bills'], props).map(
              (item, i) => (
                <BillsBox key={i} {...item} i={i} />
              )
            )
          }
        </div>
      </div>
    </div>
  );
};

const RightBox = ({
  geo,
  price,
  address
}) => {
  const goToDetails = (id) => {
    H.goToRoute('/login');
  };
  return (
    <div className='right-box'>
      <H5>Location</H5>
      <div className='location-map' />
      <H5>Location</H5>
      <Paragraph>
        <span>You choose Vonder at</span>
        <br />
        {address}
      </Paragraph>
      <Button
        type='button'
        className='gradient'
        onClick={() => goToDetails()}
      >
        {`Book for ${price}$/month`}
      </Button>
    </div>
  );
};

export const ApartmentDetailSection = (props) => {
  const { data } = useApartmentDetails();
  return (
    <Wrapper>
      <SectionWrap>
        <div />
      </SectionWrap>
      <Container className='container'>
        <LeftBox {...props} {...data} apartmentInfo={apartmentPlane} />
        <RightBox
          {...props}
          geo={R.path(['geo'], data)}
          price={R.path(['price'], data)}
          address={R.path(['address'], data)}
        />
      </Container>
    </Wrapper>
  );
};

export default React.memo(ApartmentDetailSection);
