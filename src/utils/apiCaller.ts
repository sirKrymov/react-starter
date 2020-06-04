import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as https from 'https';

import AuthService from '../services/AuthService';

import { TOKEN_NAME } from '../constants/system';

interface InstanceConfig extends AxiosRequestConfig {}

interface IHeaders {
  Authorization?: string;
}

export const apiCaller = async (
  config: AxiosRequestConfig,
  baseUrl = true,
  token = false,
  withCredentials?: boolean
): Promise<AxiosResponse<any>> => {
  const agentOptions: https.AgentOptions = {};

  const httpsAgent = new https.Agent(agentOptions);

  const headers: IHeaders = {};

  if (token) {
    headers.Authorization = `${TOKEN_NAME} ${AuthService.getAccessToken()}`;
  }

  const instanceConfig: InstanceConfig = { ...config, headers };
  const { url, method = 'GET', params, data } = instanceConfig;

  if (process.env.REACT_APP_HOST_ENV === 'development') {
    console.log('---------- API Request ----------');
    console.log(
      `%cRequest to ${method.toUpperCase()}:`,
      'background: #e6e6e6; color: #000000; font-weight: bold;'
    );
    console.log(`%c${url}`, 'color: #000000; font-weight: bold;');
    data && console.log('Data', data);
    params && console.log('Params', params);
    console.log('---------- API Request ----------');
  }

  const axiosInstance = axios.create({
    ...(baseUrl && { baseURL: process.env.REACT_APP_SERVER_REST }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    httpsAgent,
    validateStatus: () => true,
    withCredentials: withCredentials
  });

  return axiosInstance
    .request({
      ...instanceConfig
    })
    .then(response => {
      if (
        process.env.REACT_APP_HOST_ENV === 'development' &&
        response.status >= 400
      ) {
        console.error('---------- API Response error ----------');
        console.error(
          `%cResponse from ${method.toUpperCase()}:`,
          'background: #ff3e5f; color: #ffffff; font-weight: bold;'
        );
        console.error(`%c${url}`, 'color: #000000; font-weight: bold;');
        console.error(
          `%cError ${response.status} `,
          'color: #000000; font-weight: bold;',
          response
        );
        console.error('---------- API Response error ----------');

        return response;
      }

      if (process.env.REACT_APP_HOST_ENV === 'development') {
        console.log('---------- API Response success ----------');
        console.log(
          `%cResponse from ${method.toUpperCase()}:`,
          'background: #39a36a; color: #000000; font-weight: bold;'
        );
        console.log(`%c${url}`, 'color: #000000; font-weight: bold;');
        console.log('Response', response);
        console.log('---------- API Response success ----------');
      }

      return response;
    })
    .catch(error => {
      console.error('Error!', error);

      if (error.response) {
        return Promise.reject({
          statusText: error.response.statusText || '',
          status: error.response.status,
          data: error.response.data
        });
      }

      return Promise.reject(error);
    });
};
