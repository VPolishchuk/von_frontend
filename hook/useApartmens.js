import * as R from 'ramda';
import * as H from '../helpers/index';
import { sendRequest } from '../utils/api';
import { useState, useEffect } from 'react';
import endpointsMap from '../utils/endpoints-map';
// ////////////////////////////////////////////////

export const useApartments = (query) => {
  const [data, setData] = useState(null);
  const getApartmenDetails = async function () {
    try {
      const res = await sendRequest('get', endpointsMap.apartmentDetails());
      const data = await res.data;
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    // if (H.isNilOrEmpty(data)) {
    //   return function cleanup () {
    //     getApartmenDetails();
    //   };
    // }
    if (H.isNilOrEmpty(data)) {
      getApartmenDetails();
    }
  }, [query]);
  return {
    data
  };
};

export default useApartments;
