import React from 'react'
import Img1 from '../../../public/static/home-page/services/1.png'
import Img2 from '../../../public/static/home-page/services/2.png'
import Img3 from '../../../public/static/home-page/services/3.png'
import Img4 from '../../../public/static/home-page/services/4.png'
import Img5 from '../../../public/static/home-page/services/5.png'
import Img6 from '../../../public/static/home-page/services/6.png'
import Img7 from '../../../public/static/home-page/services/7.png'
import Img8 from '../../../public/static/home-page/services/8.png'
import Img9 from '../../../public/static/home-page/services/9.png'
import Img10 from '../../../public/static/home-page/services/10.png'
import Img11 from '../../../public/static/home-page/services/11.png'
import Img12 from '../../../public/static/home-page/services/12.png'
import './style.scss'
/// ////////////////////////////////////////////////////////////////////

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
  },
  {
    image: Img7,
    title: 'All inclusive bill'
  },
  {
    image: Img8,
    title: '24/7 community managers'
  },
  {
    image: Img9,
    title: 'Easy screen process'
  },
  {
    image: Img10,
    title: 'Working station'
  },
  {
    image: Img11,
    title: 'Super comfy bed'
  },
  {
    image: Img12,
    title: 'Fully equipped Kitchen'
  }
]

export const ServicesSection = (props) => (
  <div className='section-4 container'>
    <h2 className='gradient'>What's included?</h2>
    <div className='services-wrap'>
      {
        services.map(
          (item, i) => (
            <div key={i}>
              <img key={i} src={item.image} alt={`img-${1}`} />
              <p>{item.title}</p>
            </div>
          )
        )
      }
    </div>
  </div>
)

export default ServicesSection
