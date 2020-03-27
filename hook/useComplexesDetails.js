import * as R from 'ramda';
import * as H from '../helpers/index';
import { sendRequest } from '../utils/api';
import { useState, useEffect } from 'react';
import endpointsMap from '../utils/endpoints-map';
// ////////////////////////////////////////////////

export const useComplexesDetails = (query) => {
  const [complexe, setComplexeData] = useState(null);
  const getJobDetails = async function () {
    try {
      const res = await sendRequest('get', endpointsMap.complexesDetails(R.path(['id'], query)));
      const { complexe } = await res.data;
      setComplexeData(complexe);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (H.isNilOrEmpty(complexe)) {
      getJobDetails();
    }
  }, [query]);
  return {
    complexe
  };
};

export default useComplexesDetails;
