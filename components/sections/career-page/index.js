import React, { useState } from 'react'
import { locationMarkerIcon } from '../../../icon/index.js'
import * as H from '../../../helpers'
import './style.scss'
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
]

const CareerComponents = ({i, url, item}) => {
  const goToDetails = () => {
    H.goToRoute('/detail-career')
  }
  return (
    <div key={i} className='career-wrap'>
      <div>
        <h6>{item.title}</h6>
        <button onClick={() => goToDetails()}>
        Apply Now
        </button>
      </div>
      <span>Sales</span>
      <div>
        <div className='location-icon'>
          {locationMarkerIcon(20, 20)}
        </div>
      London, United Kingdom
      </div>
      <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Augue id tempor at et
      commodo vel consectetur placerat sed.
      Massa ultricies lacus odio accumsan, id.
      </p>
      <button onClick={() => goToDetails()}>
      Apply Now
      </button>
    </div>
  )
}

export const CareerSection = (props) => (
  <div className='wrapper'>
    <div className='main-section-career'>
      <div>
        <h2>Do What You Love</h2>
      </div>
    </div>
    <div className='container career'>
      <h2>Recommended</h2>
      {
        careerList.map(
          (item, i) => (
            <CareerComponents url={props.url} key={i} i={i} item={item} />
          )
        )
      }
    </div>
  </div>
)

export default React.memo(CareerSection)
