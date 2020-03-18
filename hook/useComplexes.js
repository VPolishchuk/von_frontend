import * as R from 'ramda';
import { sendRequest } from '../utils/api';
import * as H from '../helpers/index';
import { useState, useEffect } from 'react';
import endpointsMap from '../utils/endpoints-map';
// /////////////////////////////////////////

export const useComplexes = () => {
  const [complexes, setComplexes] = useState(null);
  const queryParams = window.location.search;
  const query = R.last(R.split('=', queryParams));
  const getInitialProps = async function () {
    try {
      const options = {
        params: {
          location: query
        }
      };
      const res = await sendRequest('get', endpointsMap.complexes, options);
      const { complexes } = await res.data;
      setComplexes(complexes);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (H.isNilOrEmpty(complexes)) {
      getInitialProps();
    }
  }, [query]);

  return {
    query,
    complexes
  };
};

export default useComplexes;
