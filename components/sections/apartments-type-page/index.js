import React from 'react'
import Img1 from '../../../public/static/apartments-type-page/1.png'
import Img2 from '../../../public/static/apartments-type-page/2.png'
import Img3 from '../../../public/static/apartments-type-page/3.png'
import Img4 from '../../../public/static/apartments-type-page/4.png'
import SearchForm from '../../search-component/index'
import * as H from '../../../helpers'
import './style.scss'
/// ///////////////////////////////////////////

const locations = [
  {
    image: Img1,
    price: '340€ ',
    type: 'Modern apartment',
    buttonType: 'Apartment Studio'
  },
  {
    price: '280€ ',
    type: 'Light-filled top apartment',
    buttonType: 'Apartment Studio',
    image: Img2
  },
  {
    price: '170€ ',
    type: 'Modern apartment ',
    buttonType: 'Single flat Apartment',
    image: Img3
  },
  {
    price: '140€ ',
    type: 'Light-filled Shared room',
    buttonType: 'Shared room',
    image: Img4
  }
]

const ApartmentsComponents = (props) => (
  <div className='grid-wrap'>
    {
      props.locations.map(
        (item, i) => (
          <div key={i} className='apartment-wrap'>
            <img alt='img' src={item.image} />
            <div>
              <div>
                <p>
                  {item.type}<br /><br />
                  <span>{item.price}</span>/ month
                </p>
              </div>
              <button onClick={() => props.goToDetails('/detail-apartments')}>
                {item.buttonType}
              </button>
            </div>
          </div>
        )
      )
    }
  </div>
)

export const ApartmentsSection = (props) => {
  const goToDetails = (path) => {
    H.goToRoute(path)
  }
  return (
    <div className='wrapper'>
      <div className='apartments-wrapper'>
        <div>
          <div className='form-wrap'>
            <h2>Apartments Type</h2>
            <SearchForm {...props} guidePage={false} />
          </div>
        </div>
      </div>
      <div className='container'>
        <h2>
        apartments
        in Amsterdam
        </h2>
        <ApartmentsComponents locations={locations} goToDetails={goToDetails} />
      </div>
    </div>
  )
}

export default React.memo(ApartmentsSection)
