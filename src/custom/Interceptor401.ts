import axios from 'axios';

import { apiCaller } from 'utils/apiCaller';
import AuthService from 'services/AuthService';
import history from 'utils/history';

import { AppStore } from 'stores';

import { redirect } from 'constants/system';

class Interceptor401 {
  appStore = new AppStore();

  runInterceptor() {
    return axios.interceptors.response.use(
      async (response: any) => {
        if (
          response.status === 401 &&
          response.config.url.includes('refresh-token')
        ) {
          this.appStore.logout();

          return;
        }

        if (response.status === 401 && !response.config.url.includes('login')) {
          const response = await apiCaller({
            method: 'post',
            url: 'auth/refresh-token',
            data: { refreshToken: AuthService.getRefreshToken() }
          });
          const refreshStatus =
            (response.status && response.status) || response.status;

          if (refreshStatus && refreshStatus >= 400 && refreshStatus < 500) {
            AuthService.unsetAccessToken();
            AuthService.unsetRole();

            history.push(redirect.NOT_AUTH);
          } else {
            if (response.data && response.data.token) {
              AuthService.setTokens(
                response.data.token.accessToken,
                response.data.token.refreshToken
              );

              return axios.request({
                ...response.config,
                headers: {
                  ...response.config.headers,
                  Authorization: `Bearer ${response.data.token.accessToken}`
                }
              });
            }
          }
        }

        return response;
      },
      async (error: string) => {
        console.log('Interceptor error');

        return Promise.reject(error);
      }
    );
  }
}

export default new Interceptor401();
