import React from 'react';
import { locationMarkerIcon } from '../../../icon/index.js';
import * as H from '../../../helpers';
// hook
import {
  useJobsList
} from '../../../hook/useJobs';
import {
  H2,
  H6,
  Wrapper,
  Button,
  Paragraph,
} from '../../../ui';
import { MainSectionWrap, ContainerSec } from './ui';
/// ///////////////////////////////////////////////////

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

const CareerComponents = ({
  i,
  id,
  url,
  title,
  position,
  location,
  shortDescription
}) => {
  const goToDetails = (id) => {
    H.goToRoute('/career/[id]', `/career/${id}`);
  };
  return (
    <div key={i} className='career-wrap'>
      <div>
        <H6>{title}</H6>
        <Button onClick={() => goToDetails(id)}>
          Apply Now
        </Button>
      </div>
      <span>{position}</span>
      <div>
        <div className='location-icon'>
          {locationMarkerIcon(20, 20)}
        </div>
        {location}
      </div>
      <Paragraph>
        {shortDescription}
      </Paragraph>
      <Button onClick={() => goToDetails(id)}>
      Apply Now
      </Button>
    </div>
  );
};

export const CareerSection = (props) => {
  const { list } = useJobsList();
  return (
    <Wrapper>
      <MainSectionWrap className='main-section-career'>
        <div>
          <H2>Do What You Love</H2>
        </div>
      </MainSectionWrap>
      <ContainerSec>
        <H2>Recommended</H2>
        {
          list && list.map(
            (item, i) => (
              <CareerComponents url={props.url} key={i} i={i} {...item} />
            )
          )
        }
      </ContainerSec>
    </Wrapper>
  );
};

export default React.memo(CareerSection);
