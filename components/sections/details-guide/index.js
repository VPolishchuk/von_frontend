import React, { useState } from 'react'
import * as R from 'ramda'
import { saveIcon, earthIcon, clockIcon, phoneIcon, locationMarkerIcon } from '../../../icon/index.js'

import './style.scss'
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
]

const DayBox = (props) => (
  <div className='day-wrap'>
    <p>{props.item.day}</p>
    <span>{`${R.path(['item', 'time', 'from'], props)} - ${R.path(['item', 'time', 'to'], props)}`}</span>
  </div>
)

const LeftBox = (props) => (
  <div className='left-box'>
    <div>
      <h4>Luminary Bakery</h4>
      <button>
        book now
        <span>{saveIcon(20, 20)}</span>
      </button>
    </div>
    <button className='left small'>Fine Dining</button>
    <div className='info-wrap'>
      <div className='icon-wrap'>
        {locationMarkerIcon(20, 20, '#D72066')}
      </div>
      71-73 Allen Rd, Stoke Newington,
      London N16 8RY, UK
    </div>
    <div className='info-wrap'>
      <div className='icon-wrap'>
        {phoneIcon(20, 20)}
      </div>
      +44 20 7686 9779
    </div>
    <div className='info-wrap uppercase'>
      <div className='icon-wrap'>
        {clockIcon(20, 20)}
      </div>
      open now
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur elit.
      Eget fermentumblandit egestas auctor est
      phasellus condimentum diam. Ipsum aliquet
      euismod quam quam quam feugiat vel
      cursus.
    </p>
    <hr />
    <div className='info-wrap uppercase'>
      <div className='icon-wrap'>
        {clockIcon(20, 20)}
      </div>
      open now
    </div>
    {
      schedule.map(
        (item, i) => (
          <DayBox item={item} i={i} key={i} />
        )
      )
    }
    <button>
      book now
      <span>{saveIcon(20, 20)}</span>
    </button>
  </div>
)

const RightBox = (props) => (
  <div className='right-box'>
    <div className='info-wrap'>
      71-73 Allen Rd, Stoke Newington,
      London N16 8RY, UK
    </div>
    <hr />
    <div className='info-wrap'>
      <div className='icon-wrap'>
        {phoneIcon(20, 20)}
      </div>
      +44 20 7686 9779
    </div>
    <div className='info-wrap'>
      <div className='icon-wrap'>
        {earthIcon(20, 20)}
      </div>
      Official Website
    </div>
    <hr />
    <div className='info-wrap uppercase'>
      <div className='icon-wrap'>
        {clockIcon(20, 20)}
      </div>
      open now
    </div>
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
  <div className='wrapper'>
    <div className='main-section-guide-details'>
      <div />
    </div>
    <div className='container guide-details'>
      <LeftBox {...props} />
      <RightBox {...props} />
    </div>
  </div>
)

export default React.memo(GuideDetailSection)
