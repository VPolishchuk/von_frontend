// axios config for all ajax requests
import axios from 'axios';
import * as R from 'ramda';
// global
import * as G from '../helpers';
// import * as GC from '../global/constants';
// /////////////////////////////////////////////////////////////////////////////////////////////////
const qs = require('qs');
// /////////////////////////////////////////////////////////////////////////////////////////////////

const instance = axios.create({
  baseURL: 'http://api.vondereurope.ml/'
});

const getUrl = (service, domain, path) => {
  const url = instance.defaults.baseURL;
  return `${url}:${service}${path}`;
};

export const createApiUrl = (pathWithService) => {
  const apiDomain = '';
  const splitedPath = pathWithService.split(':');
  const service = splitedPath[0];
  const path = splitedPath[1];
  return getUrl(service, apiDomain, path);
};

export function sendRequest(method, pathWithService, options = {}, isUrlencoded) { // eslint-disable-line
  const config = {
    method,
    data: R.or(options.data, {}),
    params: R.or(options.params, {}),
    // url: createApiUrl(pathWithService),
    url: pathWithService,
    headers: R.or(options.headers, {})
  };
  if (G.isNotNil(options.auth)) {
    config.auth = options.auth;
  }
  if (R.and(isUrlencoded, R.equals(method, 'post'))) {
    config.data = qs.stringify(options.data);
  }
  // if (options.resType) {
  //   config.responseType = options.resType;
  // }
  return instance(config);
}
