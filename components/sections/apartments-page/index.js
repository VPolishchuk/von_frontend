import React, { useState, useEffect } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import Img1 from '../../../public/static/apartments-type-page/1.png';
import SearchForm from '../../search-component/index';
import { ModalComponent } from './modal-box';
import * as H from '../../../helpers';
// import useApartments from '../../../hook/useApartmens';
// utils
import { sendRequest } from '../../../utils/api';
import endpointsMap from '../../../utils/endpoints-map';

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

const getApartment = async function (values, renderModalWindow, router, setData) {
  try {
    const newDateFormat = {
      dateFrom: new Date(R.path(['date', 'startDate'], values)).getTime(),
      dateTo: new Date(R.path(['date', 'endDate'], values)).getTime()
    };
    const options = {
      params: {
        location: R.path(['location', 'value'], values),
        apartmentTypeName: R.path(['type', 'label'], values),
        ...newDateFormat
      }
    };
    const query = {
      ...options.params
    };
    router.push({
      pathname: '/apartments',
      query: { ...query },
      options: { shallow: true }
    });
    const res = await sendRequest('get', endpointsMap.apartmens, options);
    const data = await res.data;
    if (H.isNilOrEmpty(res.data)) {
      renderModalWindow && renderModalWindow();
    } else {
      setData(data);
    }
  } catch (err) {
    console.log(new Error(err));
  }
};

const ApartmentsComponents = (props) => (
  <GridWrap>
    {
      props.apartments && props.apartments.map(
        (item, i) => (
          <div key={i} className='apartment-wrap'>
            <img alt='img' src={item.image} />
            <div>
              <div>
                <Paragraph>
                  {item.name}<br/><br/>
                  <span>{item.price}$</span>/ month
                </Paragraph>
              </div>
              <Button className='small' onClick={() => props.goToDetails(item.id)}>
                {item.apartmentTypeName}
              </Button>
            </div>
          </div>
        )
      )
    }
  </GridWrap>
);

export const ApartmentsSection = (props) => {
  const router = useRouter();
  const [apartments, setApartmentsData] = useState(null);
  const goToDetails = (id) => {
    const queryData = R.omit(['location', 'apartmentTypeName'], R.path(['query'], router));
    router.push({
      pathname: `/apartment/${id}`,
      query: {
        ...queryData
      }
    });
  };
  const renderModalWindow = () => {
    props.setRenderModal(<ModalComponent closeModal={props.closeModal} />);
    props.openModal();
  };
  const newData = apartments && apartments.map((item, i) => ({
    ...item,
    image: Img1
  }));
  // useEffect(() => {
  //   if (H.isNotNilAndNotEmpty(router.query)) {
  //     getApartment(router.query, renderModalWindow, router, setApartmentsData);
  //   }
  // }, [router.query]);
  return (
    <Wrapper>
      <ApartmentsWrapper>
        <div>
          <div className='form-wrap'>
            <H2>Apartments Type</H2>
            <SearchForm
              {...props}
              guidePage={false}
              getData={getApartment}
              setData={setApartmentsData}
              renderModalWindow={renderModalWindow}
            />
          </div>
        </div>
      </ApartmentsWrapper>
      {
        R.or(newData, []) &&
        <Container className='container'>
          <H2>apartments in Amsterdam</H2>
          <ApartmentsComponents
            goToDetails={goToDetails}
            apartments={R.or(newData, [])}
          />
        </Container>
      }
    </Wrapper>
  );
};

export default React.memo(ApartmentsSection);
