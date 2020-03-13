import React, { useState } from 'react'
import * as R from 'ramda'
import { saveIcon, earthIcon, clockIcon, phoneIcon, locationMarkerIcon } from '../../../icon/index.js'
// ui
import {
  H4,
  Button,
  Wrapper,
  InfoWrap,
  Container,
  Paragraph,
} from '../../../ui';
import {
  DayWrap,
  MainSectionBlock
} from './ui';
/// ///////////////////////////////////////////

const schedule = [
  {
    day: 'Wednesday',
    time: {
      from: '08:00',
      to: '17:00'
    }
  },
  {
    day: 'Today',
    time: {
      from: '08:00',
      to: '17:00'
    }
  },
  {
    day: 'Friday',
    time: {
      from: '08:00',
      to: '17:00'
    }
  },
  {
    day: 'Saturday',
    time: {
      from: '08:00',
      to: '17:00'
    }
  },
  {
    day: 'Sunday',
    time: {
      from: '08:00',
      to: '17:00'
    }
  },
  {
    day: 'Monday',
    time: {
      from: '08:00',
      to: '17:00'
    }
  },
  {
    day: 'Tuesday',
    time: {
      from: '08:00',
      to: '17:00'
    }
  }
];

const DayBox = (props) => (
  <DayWrap className='day-wrap'>
    <Paragraph>{props.item.day}</Paragraph>
    <span>{`${R.path(['item', 'time', 'from'], props)} - ${R.path(['item', 'time', 'to'], props)}`}</span>
  </DayWrap>
);

const LeftBox = (props) => (
  <div className='left-box'>
    <div>
      <H4>Luminary Bakery</H4>
      <Button>
        book now
        <span>{saveIcon(20, 20)}</span>
      </Button>
    </div>
    <Button className='left small'>Fine Dining</Button>
    <InfoWrap className='info-wrap'>
      <div className='icon-wrap'>
        {locationMarkerIcon(20, 20, '#D72066')}
      </div>
      71-73 Allen Rd, Stoke Newington,
      London N16 8RY, UK
    </InfoWrap>
    <InfoWrap className='info-wrap'>
      <div className='icon-wrap'>
        {phoneIcon(20, 20)}
      </div>
      +44 20 7686 9779
    </InfoWrap>
    <InfoWrap className='info-wrap uppercase'>
      <div className='icon-wrap'>
        {clockIcon(20, 20)}
      </div>
      open now
    </InfoWrap>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur elit.
      Eget fermentumblandit egestas auctor est
      phasellus condimentum diam. Ipsum aliquet
      euismod quam quam quam feugiat vel
      cursus.
    </Paragraph>
    <hr />
    <InfoWrap className='info-wrap uppercase'>
      <div className='icon-wrap'>
        {clockIcon(20, 20)}
      </div>
      open now
    </InfoWrap>
    {
      schedule.map(
        (item, i) => (
          <DayBox item={item} i={i} key={i} />
        )
      )
    }
    <Button>
      book now
      <span>{saveIcon(20, 20)}</span>
    </Button>
  </div>
);

const RightBox = (props) => (
  <div className='right-box'>
    <InfoWrap className='info-wrap'>
      71-73 Allen Rd, Stoke Newington,
      London N16 8RY, UK
    </InfoWrap>
    <hr />
    <InfoWrap className='info-wrap'>
      <div className='icon-wrap'>
        {phoneIcon(20, 20)}
      </div>
      +44 20 7686 9779
    </InfoWrap>
    <InfoWrap className='info-wrap'>
      <div className='icon-wrap'>
        {earthIcon(20, 20)}
      </div>
      Official Website
    </InfoWrap>
    <hr />
    <InfoWrap className='info-wrap uppercase'>
      <div className='icon-wrap'>
        {clockIcon(20, 20)}
      </div>
      open now
    </InfoWrap>
    {
      schedule.map(
        (item, i) => (
          <DayBox item={item} i={i} key={i} />
        )
      )
    }
  </div>
)

export const GuideDetailSection = (props) => (
  <Wrapper>
    <MainSectionBlock>
      <div />
    </MainSectionBlock>
    <Container className='container'>
      <LeftBox {...props} />
      <RightBox {...props} />
    </Container>
  </Wrapper>
)

export default React.memo(GuideDetailSection);
