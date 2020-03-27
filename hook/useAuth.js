import * as R from 'ramda';
import * as H from '../helpers/index';
import { sendRequest } from '../utils/api';
import { useState, useEffect } from 'react';
import endpointsMap from '../utils/endpoints-map';
// ////////////////////////////////////////////////

export const useAuth = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [loader, setLoader] = useState(true);
  const queryParams = decodeURIComponent(R.split('?', window.location.search)[1]);
  const queryArr = R.split('&', queryParams).map(text => R.split('=', text));
  const getQueryData = R.omit(['custom'], R.fromPairs(queryArr));
  const getAuthToken = async function () {
    try {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          ...getQueryData
        }
      };
      const res = await sendRequest('post', endpointsMap.auth, options);
      const data = await res.data;
      setLoader(false);
      setAccessToken(data);
      H.setItemToLocalStorage('accessToken', data.accessToken);
    } catch (err) {
      console.error(err);
      H.goToRoute('/');
    }
  };
  useEffect(() => {
    const token = H.getItemFromLocalStorage('accessToken');
    if (H.isNilOrEmpty(token)) {
      return getAuthToken();
    }
    setAccessToken(token);
    setLoader(false);
  }, [queryParams]);
  return {
    loader,
    accessToken
  };
};

export default useAuth;
