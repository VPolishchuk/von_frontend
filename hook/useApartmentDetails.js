import * as R from 'ramda';
import * as H from '../helpers/index';
import { useRouter } from 'next/router';
import { sendRequest } from '../utils/api';
import { useState, useEffect } from 'react';
import endpointsMap from '../utils/endpoints-map';
// ////////////////////////////////////////////////

export const useApartmentDetails = () => {
  const [data, setData] = useState(null);
  const { query } = useRouter();
  const getApartmenDetails = async function () {
    try {
      const options = {
        params: {
          ...R.omit(['id'], query)
        }
      };

      const res = await sendRequest('get', endpointsMap.apartmentDetails(R.path(['id'], query)), options);
      const data = await res.data;
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (H.isNilOrEmpty(data)) {
      getApartmenDetails();
    }
  }, [query]);
  return {
    data
  };
};

export default useApartmentDetails;
