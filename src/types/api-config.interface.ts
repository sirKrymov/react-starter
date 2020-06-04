import { AxiosRequestConfig } from 'axios';

export interface IApiConfig {
  requiredAuth: boolean;
  endpoint: (payload?: any) => string;
  baseUrl: boolean;
  method: AxiosRequestConfig['method'];
}

export interface IApisConfig {
  [key: string]: IApiConfig;
}
