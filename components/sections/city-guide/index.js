import React from 'react'
import Img1 from '../../../public/static/city-guide/1.png'
import Img2 from '../../../public/static/city-guide/2.png'
import Img3 from '../../../public/static/city-guide/3.png'
import Img4 from '../../../public/static/city-guide/4.png'
import SearchForm from '../../search-component/index'
import { saveIcon } from '../../../icon/index.js'
import * as H from '../../../helpers';
import {
  H2,
  Wrapper,
  Button,
  Paragraph,
} from '../../../ui';
import {
  GridWrap,
  SectionWrap,
  ContainerSec
} from './ui';
/// ///////////////////////////////////////////

const locations = [
  {
    type: 'Fine Dining',
    name: 'Sketch',
    image: Img1,
    status: 'closed',
    price: ''
  },
  {
    type: 'Vegeterian',
    name: 'Ottolenghi',
    image: Img2,
    status: 'open now',
    price: ''
  },
  {
    type: 'Bakery',
    name: 'Luminary Bakery',
    image: Img3,
    status: 'open now',
    price: ''
  },
  {
    type: 'Japanese',
    name: 'Nanban',
    image: Img4,
    status: 'open now',
    price: ''
  }
];

const LocationsComponents = ({ url, locations }) => {
  const goToDetails = () => {
    H.goToRoute('/detail-guide');
  };
  return (
    <GridWrap className='grid-wrap'>
      {
        locations.map(
          (item, i) => (
            <div key={i} className='place-wrap'>
              <img alt='img' src={item.image} />
              <Paragraph>{item.name}</Paragraph>
              <Paragraph>{item.type}</Paragraph>
              <Button onClick={() => goToDetails()}>
                book now
                <span>{saveIcon(20, 20)}</span>
              </Button>
            </div>
          )
        )
      }
    </GridWrap>
  );
};

const MainSection = (props) => (
  <SectionWrap className='main-section-guide'>
    <div>
      <H2>where do you wanna go?</H2>
      <div className='form-wrap'>
        <SearchForm {...props} guidePage />
      </div>
    </div>
  </SectionWrap>
)
export const CityGuideSection = (props) => (
  <Wrapper className='wrapper'>
    <MainSection {...props} />
    <ContainerSec className='container'>
      <H2>Restaurants in London</H2>
      <LocationsComponents {...props} locations={locations} />
    </ContainerSec>
  </Wrapper>
);

export default React.memo(CityGuideSection);
