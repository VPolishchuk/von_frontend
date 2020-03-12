import React, { useEffect, useState } from 'react'
import * as R from 'ramda'
// import Slider from '@farbenmeer/react-spring-slider'
// images
import Img5 from '../../public/static/city-guide/1.png'
import Img6 from '../../public/static/city-guide/2.png'
import Img3 from '../../public/static/city-guide/3.png'
import Img4 from '../../public/static/city-guide/4.png'

// import './style.scss';
/// /////////////////////////////////////////////////

const images = [Img5, Img6, Img3, Img4]

const BulletComponent = ({ onClick, isActive }) => (
  <li
    style={{
      width: '20px',
      height: '20px',
      cursor: 'pointer',
      borderRadius: '50%',
      margin: '10px 2px',
      border: '1px solid #F9F9F9',
      backgroundColor: isActive ? '#D72066' : 'transparent'
    }}
    onClick={onClick}
  />
)

// const useSlider = () => {
//   const [] = useState()
//   const [] = useState()

//   useEffect(() => {

//   }, [])
// }

const SliderComponent = (props) => {
  let sliderSetting = {
    hasBullets: true,
    BulletComponent: BulletComponent
  }
  sliderSetting = R.not(R.isEmpty(R.path(['slSetting'], props))) && R.merge(sliderSetting, props.slSetting)
  return (
    <div className='slider-wrap'>
      {/* <Slider
        {...sliderSetting}
      >
        {
          R.or(props.images, images).map(
            (item, i) => {
              if (props.children) {
                return (
                  <props.children item={item} i={i} />
                )
              }
              return (
                <img
                  key={i}
                  src={item}
                  width='100%'
                  height='100%'
                  alt='slide-img'
                />
              )
            }
          )
        }
      </Slider> */}
    </div>
  )
}

export default SliderComponent;

