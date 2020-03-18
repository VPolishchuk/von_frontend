import React, { useState } from 'react';
import * as R from 'ramda';
import * as I from '../../../icon/index.js';
import { CalendarInlineComponent } from '../../fieldset/datepiker';
import { SelectInputComponent } from '../../fieldset/index';
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
import {
  H2,
  H3,
  H5,
  Wrapper,
  Button,
  InfoWrap,
  Container,
  Paragraph,
} from '../../../ui';
import {
  BottomBoxWrap,
  NearbyBoxWrap,
  DateFormFilter,
  MainSectionBlock
} from './ui';
/// ///////////////////////////////////////////

const testImage = [
  Img13, Img14, Img15
]

const services = [
  {
    image: Img1,
    title: 'Events'
  },
  {
    image: Img2,
    title: 'Co-working café'
  },
  {
    image: Img3,
    title: 'Fully furnished apartments'
  },
  {
    image: Img4,
    title: 'Professional market place'
  },
  {
    image: Img5,
    title: 'Membership perks'
  },
  {
    image: Img6,
    title: 'Ultra High speed internet'
  }
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
  }
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
    'No. 221 to Edgware'

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
      image: Img13
    },
    {
      title: 'Zenith House',
      text: `
        Hill House brings a new approach to city living. 
        The Tower and the Podium have their own unique feel. 
        And the shared common areas make sure that our 
        residents’ homes extend way beyond their front door.
      `,
      image: Img14
    },
    {
      title: 'Hill House',
      text: `
        Hill House brings a new approach to city living. 
        The Tower and the Podium have their own unique feel. 
        And the shared common areas make sure that our 
        residents’ homes extend way beyond their front door.
      `,
      image: Img15
    }
  ]
};

const LocationCard = ({ image, text, title }) => (
  <div className='loc-card-wrap'>
    <img alt='image' src={image} />
    <div>
      <H5>{title}</H5>
      <Paragraph>{text}</Paragraph>
      <Button>
        Explore
      </Button>
    </div>
  </div>
);

const NearbyBox = ({ items }) => {
  return (
    <NearbyBoxWrap>
      <div>
        {
          items.map((item, i) => (
            <div key={i}>
              <img
                alt='image'
                src={item.image}
                width='100%'
                height='auto'
              />
              <Paragraph>{item.title}</Paragraph>
            </div>
          ))
        }
      </div>
    </NearbyBoxWrap>
  );

};

const LeftBox = (props) => (
  <div className='left-box'>
    <H3>Hill House</H3>
    <Paragraph>
        Hill House brings a new approach to city living. The Tower
        and the Podium have their own unique feel. And the shared common
        areas make sure that our residents’ homes extend way beyond their
        front door.
    </Paragraph>
    <hr />
    <LocationPosition />
    <div className='ap-info-wrap'>
      <H5>neighbourhood</H5>
      <Paragraph>
        Finchleyis part of the London Borough of Barnet, filled with leafy parks and peaceful
        residential streets, making it popular with families and professionals seeking a
        suburban lifestyle, without compromising on proximity to central London.
      </Paragraph>
    </div>
    <hr />
    <div className='ap-info-wrap'>
      <H5>Transport</H5>
      <Paragraph>
        Finchleyhas four Underground stations, all on the High Barnet branch of the Northern Line.
        East Finchley is in Zone 3, and Finchley Central,
        West Finchley, and Woodside Park are in Zone 4. You have great direct routes to London hot spots such as:
      </Paragraph>
      <br /><br />
      {
        R.path(['locationPlane', 'list1'], props).map(
          (item, i) => (
            <span key={i}>{item}</span>
          )
        )
      }
      <br /><br />
      <Paragraph>
        There are also several bus routes from North Finchley bus station, situation across the road:
      </Paragraph>
      <br/><br/>
      {
        R.path(['locationPlane', 'list2'], props).map(
          (item, i) => (
            <span key={i}>{item}</span>
          )
        )
      }
    </div>
    <hr />
    <div className='ap-info-wrap'>
      <H5>Nearby</H5>
      {/* <NearbyBox items={nearbyInfo}/> */}
    </div>
    <hr />
    <div className='ap-info-wrap'>
      <H5>What's included?</H5>
      <div className='services-wrap'>
        {
          services.map(
            (item, i) => (
              <div key={i}>
                <img key={i} src={item.image} alt='img' />
                <Paragraph>{item.title}</Paragraph>
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
    <DateFormFilter>
      <CalendarInlineComponent {...props} />
      <div />
      <SelectInputComponent label={'Which apartment type'} {...props}/>
    </DateFormFilter>
  );
};

const LocationPosition = () => (
  <div className='loc-pos-wrap'>
    <H5>Location</H5>
    <div className='location-map' />
    <H5>Location</H5>
    <Paragraph>Nether St, London N3 1NT, UK</Paragraph>
    <InfoWrap className='info-wrap'>
      <div className='icon-wrap'>
        {I.phoneIcon(20, 20)}
      </div>
      +44 20 7686 9779
    </InfoWrap>
    <Button className='gradient'>
      Check availability
    </Button>
    <hr />
  </div>
);

const RightBox = (props) => (
  <div className='right-box'>
    <LocationPosition />
    <SelectDateFilter {...props} />
  </div>
);

export const LocationDetailSection = (props) => (
  <Wrapper>
    <MainSectionBlock className='main-section-location-details'>
      <SliderComponent images={testImage} height={'80vh'} />
    </MainSectionBlock>
    <Container className='container'>
      <LeftBox {...props} locationPlane={locationPlane} />
      <RightBox {...props} />
      <BottomBoxWrap>
        <H3>More locations in London</H3>
        <div>
          {
            R.path(['moreLocations'], locationPlane).map(
              (item, i) => (
                <LocationCard key={++i} {...item} i={i} />
              )
            )
          }
        </div>
      </BottomBoxWrap>
    </Container>
  </Wrapper>
);

export default React.memo(LocationDetailSection);
