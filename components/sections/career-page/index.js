import React from 'react'
import { locationMarkerIcon } from '../../../icon/index.js'
import * as H from '../../../helpers'
// import './style.scss'
import {
  H2,
  H6,
  Wrapper,
  Button,
  Paragraph,
} from '../../../ui';
import { MainSectionWrap, ContainerSec } from './ui';
/// ///////////////////////////////////////////

const careerList = [
  {
    title: 'Broker & Agent Development, Market Manager'
  },
  {
    title: 'Broker & Agent Development, Market Manager'
  },
  {
    title: 'Broker & Agent Development, Market Manager'
  },
  {
    title: 'Broker & Agent Development, Market Manager'
  },
  {
    title: 'Broker & Agent Development, Market Manager'
  },
  {
    title: 'Broker & Agent Development, Market Manager'
  },
  {
    title: 'Broker & Agent Development, Market Manager'
  },
  {
    title: 'Broker & Agent Development, Market Manager'
  }
];

const CareerComponents = ({i, url, item}) => {
  const goToDetails = () => {
    H.goToRoute('/detail-career');
  }
  return (
    <div key={i} className='career-wrap'>
      <div>
        <H6>{item.title}</H6>
        <Button onClick={() => goToDetails()}>
          Apply Now
        </Button>
      </div>
      <span>Sales</span>
      <div>
        <div className='location-icon'>
          {locationMarkerIcon(20, 20)}
        </div>
        London, United Kingdom
      </div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Augue id tempor at et
        commodo vel consectetur placerat sed.
        Massa ultricies lacus odio accumsan, id.
      </Paragraph>
      <Button onClick={() => goToDetails()}>
      Apply Now
      </Button>
    </div>
  )
}

export const CareerSection = (props) => (
  <Wrapper>
    <MainSectionWrap className='main-section-career'>
      <div>
        <H2>Do What You Love</H2>
      </div>
    </MainSectionWrap>
    <ContainerSec>
      <H2>Recommended</H2>
      {
        careerList.map(
          (item, i) => (
            <CareerComponents url={props.url} key={i} i={i} item={item} />
          )
        )
      }
    </ContainerSec>
  </Wrapper>
)

export default React.memo(CareerSection);
