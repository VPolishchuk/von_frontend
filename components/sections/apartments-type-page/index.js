import React from 'react';
import Img1 from '../../../public/static/apartments-type-page/1.png';
import Img2 from '../../../public/static/apartments-type-page/2.png';
import Img3 from '../../../public/static/apartments-type-page/3.png';
import Img4 from '../../../public/static/apartments-type-page/4.png';
import SearchForm from '../../search-component/index';
import * as H from '../../../helpers';
import {
  H2,
  Wrapper,
  Container,
  Button,
  Paragraph,
} from '../../../ui';
import {
  GridWrap,
  ApartmentsWrapper,
} from './ui';
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
  <GridWrap>
    {
      props.locations.map(
        (item, i) => (
          <div key={i} className='apartment-wrap'>
            <img alt='img' src={item.image} />
            <div>
              <div>
                <Paragraph>
                  {item.type}<br /><br />
                  <span>{item.price}</span>/ month
                </Paragraph>
              </div>
              <Button onClick={() => props.goToDetails('/detail-apartments')}>
                {item.buttonType}
              </Button>
            </div>
          </div>
        )
      )
    }
  </GridWrap>
)

export const ApartmentsSection = (props) => {
  const goToDetails = (path) => {
    H.goToRoute(path);
  }
  return (
    <Wrapper>
      <ApartmentsWrapper>
        <div>
          <div className='form-wrap'>
            <H2>Apartments Type</H2>
            <SearchForm {...props} guidePage={false} />
          </div>
        </div>
      </ApartmentsWrapper>
      <Container className='container'>
        <H2>apartments in Amsterdam</H2>
        <ApartmentsComponents locations={locations} goToDetails={goToDetails} />
      </Container>
    </Wrapper>
  )
}

export default React.memo(ApartmentsSection)
