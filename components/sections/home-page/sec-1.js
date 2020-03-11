import React from 'react'
import { useSpring, animated } from 'react-spring'
import SearchForm from '../../search-component/index'
import './style.scss'
/// ///////////////////////////////////////////

export const MainSection = (props) => {
  const animStyleFilter = useSpring({
    to: {
      opacity: 1,
      transition: 'all 0.4s',
      transform: 'translateY(0px)'
    },
    from: {
      opacity: 0,
      transition: 'all 0.4s',
      transform: 'translateY(100vh)'
    }
  })
  const animStyle = useSpring({
    to: {
      opacity: 1,
      transform: 'scale(1)'
    },
    from: {
      opacity: 0.8,
      transform: 'scale(1.3)'
    }
  })
  return (
    <animated.div
      className='section-1'
      style={animStyle}
    >
      <div>
        <animated.div className='form-wrap' style={animStyleFilter}>
          <SearchForm {...props} guidePage={false} />
        </animated.div>
      </div>
    </animated.div>
  )
}

export default MainSection
