import * as R from 'ramda';
import * as H from '../helpers/index';
import { sendRequest } from '../utils/api';
import { useState, useEffect } from 'react';
import endpointsMap from '../utils/endpoints-map';
// ////////////////////////////////////////////////

export const useJobDetails = (query) => {
  const [data, setData] = useState(null);
  // const query = window.location.search;
  const getJobDetails = async function () {
    try {
      const res = await sendRequest('get', endpointsMap.jobDetails(R.path(['id'], query)));
      const data = await res.data;
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (H.isNilOrEmpty(data)) {
      getJobDetails();
    }
  }, [query]);
  return {
    data
  };
};

export default useJobDetails;
