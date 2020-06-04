import Cookie from 'js-cookie';

import { REFRESH_TOKEN_NAME, TOKEN_NAME } from '../constants/system';

type Storage = 'local' | 'cookie';

class AuthService {
  setAccessToken(token: string, storage: Storage = 'cookie'): void {
    if (storage === 'cookie') {
      Cookie.set(TOKEN_NAME, token);
    } else {
      localStorage.setItem(TOKEN_NAME, token);
    }
  }

  setTokens(
    accessToken: string,
    refreshToken: string,
    storage: Storage = 'cookie'
  ): void {
    if (storage === 'cookie') {
      Cookie.set(REFRESH_TOKEN_NAME, refreshToken);
      Cookie.set(TOKEN_NAME, accessToken);
    } else {
      localStorage.setItem(REFRESH_TOKEN_NAME, refreshToken);
      localStorage.setItem(TOKEN_NAME, accessToken);
    }
  }

  getAccessToken(storage: Storage = 'cookie') {
    if (storage === 'cookie') {
      return Cookie.get(TOKEN_NAME);
    } else {
      return localStorage.getItem(TOKEN_NAME);
    }
  }

  getRefreshToken(storage: Storage = 'cookie') {
    if (storage === 'cookie') {
      return Cookie.get(REFRESH_TOKEN_NAME);
    } else {
      return localStorage.getItem(REFRESH_TOKEN_NAME);
    }
  }

  unsetAccessToken(storage: Storage = 'cookie') {
    if (storage === 'cookie') {
      return Cookie.remove(TOKEN_NAME);
    } else {
      return localStorage.removeItem(TOKEN_NAME);
    }
  }

  setRole(role: string, storage: Storage = 'cookie') {
    if (storage === 'cookie') {
      Cookie.set('Role', role);
    } else {
      localStorage.setItem('Role', role);
    }
  }

  getRole(storage: Storage = 'cookie') {
    if (storage === 'cookie') {
      return Cookie.get('Role');
    } else {
      return localStorage.getItem('Role');
    }
  }

  unsetRole(storage: Storage = 'cookie') {
    if (storage === 'cookie') {
      Cookie.remove('Role');
    } else {
      return localStorage.removeItem('Role');
    }
  }

  calculateExpiresAtDate(expiresIn: number): number {
    return expiresIn * 1000 + new Date().getTime();
  }

  getExpiresAtDate(): number | null {
    const expiresAt = localStorage.getItem('expires_at');

    if (expiresAt) return parseInt(expiresAt, 10);
    return null;
  }

  isAuthenticated() {
    const expiresAt = this.getExpiresAtDate();

    if (expiresAt) return new Date().getTime() < expiresAt;
    return false;
  }

  setSessionLocalStorage(token: string, expiresAt: number): void {
    localStorage.setItem('token', token);
    localStorage.setItem('expires_at', expiresAt.toString());
  }

  setSessionCookie = (session: any): void => {
    Cookie.remove('session');
    Cookie.set('session', session, { expires: 14 });
  };

  getSessionCookie: any = () => {
    const sessionCookie = Cookie.get('session');

    if (sessionCookie === undefined) {
      return {};
    } else {
      return JSON.parse(sessionCookie);
    }
  };
}

export default new AuthService();
