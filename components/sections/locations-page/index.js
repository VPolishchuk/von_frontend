import React from 'react';
import Img1 from '../../../public/static/locations/1.png';
import Img2 from '../../../public/static/locations/2.png';
import Img3 from '../../../public/static/locations/3.png';
import Img4 from '../../../public/static/locations/4.png';
import Img5 from '../../../public/static/locations/5.png';
import Img6 from '../../../public/static/locations/6.png';
import Img7 from '../../../public/static/locations/7.png';
import * as H from '../../../helpers';
import {
  H2,
  Wrapper,
  Container,
  Button,
  Paragraph,
} from '../../../ui';
import {
  VWrap,
  GridWrap,
  LocationsWrapper,
} from './ui';
// import './style.scss'
/// ///////////////////////////////////////////

const locations = [
  {
    address: 'Nether St, London N3 1NT, UK',
    name: '707 Finchley',
    image: Img1
  },
  {
    address: 'Nether St, London N3 1NT, UK',
    name: 'Hill House',
    image: Img2
  },
  {
    address: 'Nether St, London N3 1NT, UK',
    name: 'Zenith House',
    image: Img3
  },
  {
    address: 'Nether St, London N3 1NT, UK',
    name: 'Zenith House',
    image: Img4
  }
]

const VonderBox = (props) => (
  <>
    <VWrap className='v-wrap first'>
      <div>
        <H2>Become a Vonderer</H2>
        <img alt='img' src={Img6} />
        <Paragraph>
          Vonder isn’t just about the housing,
          it’s a way of life tailored for digital
          nomads and young professionals
          from around the world. If you’re
          curious, if you’re creative, if you’re
          even a little bit or a whole lot of an
          adventurer,  a traveler or local, <br />
          <span>you’re definitely vonder material.</span>
        </Paragraph>
        <Button
          className='gradient'
          onClick={() => props.goToDetails('/apartments-type-page')}
        >
          Become a Vonderer
        </Button>
      </div>
      <img alt='img' src={Img6} />
    </VWrap>
    <VWrap className='v-wrap two'>
      <img alt='img' src={Img7} />
      <div>
        <img alt='img' src={Img5} />
        <Paragraph>
          Come meet a new set of people from
          around the world – socialize, create
          and work in one of our many
          inspiring locations.
        </Paragraph>
      </div>
    </VWrap>
  </>
);

const LocationsComponents = (props) => (
  <GridWrap className='grid-wrap'>
    {
      props.locations.map(
        (item, i) => (
          <div key={i} className='location-wrap'>
            <img alt='img' src={item.image} />
            <div>
              <div>
                <p>{item.name}</p>
                <p className='address'>{item.address}</p>
              </div>
              <Button onClick={() => props.goToDetails('/detail-location')}>
                Explore
              </Button>
            </div>
          </div>
        )
      )
    }
  </GridWrap>
)

export const LocationsSection = (props) => {
  const goToDetails = (path) => {
    H.goToRoute(path);
  };
  return (
    <Wrapper className='wrapper'>
      <LocationsWrapper className='locations-wrapper'>
        <div>
          <H2>Our locations in London</H2>
        </div>
      </LocationsWrapper>
      <Container className='container'>
        <LocationsComponents locations={locations} goToDetails={goToDetails} />
        <VonderBox {...props} goToDetails={goToDetails} />
      </Container>
    </Wrapper>
  );
};

export default React.memo(LocationsSection);
