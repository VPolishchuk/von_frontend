// import * as R from 'ramda';
// import * as H from '../helpers/index';
import { sendRequest } from '../utils/api';
import { useState, useEffect } from 'react';
import endpointsMap from '../utils/endpoints-map';
// ////////////////////////////////////////////////

export const useJobsList = () => {
  const [list, setList] = useState(null);
  const getJobsList = async function () {
    try {
      const res = await sendRequest('get', endpointsMap.jobs);
      const jubsList = await res.data;
      setList(jubsList);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getJobsList();
  }, []);
  return {
    list
  };
};

export default useJobsList;
