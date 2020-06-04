import urls from './urls';

export const REFRESH_TOKEN_NAME = 'Refresh';
export const TOKEN_NAME = 'Bearer';
export const redirect = {
  AUTH: urls.main.dashboard,
  NOT_AUTH: urls.auth.signin
};

// For starter-kit testing
export const OPEN_WEATHER_API_KEY = '85b1af13ffddfd8e6fd69752f43a412a';
