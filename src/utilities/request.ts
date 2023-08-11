import axios from 'axios';
import * as http from 'http';

import * as types from '../constants/methodTypes';

type RequestParams = {
  baseUrl?: string;
  url: string;
  methodType: string;
  data?: object | object[] | string;
  headers?: http.IncomingHttpHeaders;
};

export function request({ baseUrl = '', url, methodType, data, headers }: RequestParams) {
  const rootURL = baseUrl ? baseUrl : process.env.REACT_APP_API_URL;

  const wholeUrl = rootURL + url;

  switch (methodType) {
    case types.DELETE:
      return axios.delete(wholeUrl, { headers }).then(response => response.data);
    case types.GET:
      return axios.get(wholeUrl, { headers }).then(response => response.data);
    case types.POST:
      return axios.post(wholeUrl, data, { headers }).then(response => response.data);
    case types.PUT:
      return axios.put(wholeUrl, data, { headers }).then(response => response.data);
    case types.PATCH:
      return axios.patch(wholeUrl, data, { headers }).then(response => response.data);
  }
}
