import { IApisConfig } from 'types/api-config.interface';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

export const weatherRequests = {
  forecast: {
    requiredAuth: false,
    endpoint: (): string =>
      `${proxyUrl}https://api.openweathermap.org/data/2.5/forecast`,
    baseUrl: false,
    method: 'get'
  }
} as IApisConfig;
