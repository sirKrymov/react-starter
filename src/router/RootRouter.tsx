import React, { FC } from 'react';

import createRouter, { AppRouter } from '../custom/router-module';

import { ProtectedRoute } from './ProtectedRoute';
import { AuthRouter } from './AuthRouter';
import { MainRouter } from './MainRouter';

import { ResetPasswordPage } from '../pages/ResetPassword';
import { ComponentsUiPage } from '../pages/ComponentsUi';
import { NewPasswordPage } from '../pages/NewPassword';
import { DashboardPage } from '../pages/Dashboard';
import { WeatherPage } from '../pages/Weather';
import { SignupPage } from '../pages/Signup';
import { SigninPage } from '../pages/Signin';

import AuthService from '../services/AuthService';
import history from '../utils/history';

// import { pagePermissions } from '../constants/permissions'
import { TITLE_PREFIX } from '../constants/configs';
import urls from '../constants/urls';

const main = {
  routes: [
    {
      component: () => <MainRouter subRouter={routers.mainSub} />,
      notExact: true,
      path: '/'
    }
  ],
  name: 'main'
};

const mainSub = {
  notFoundRedirect: urls.main.dashboard,
  routes: [
    {
      redirect: urls.main.dashboard,
      path: '/'
    },
    {
      component: DashboardPage,
      title: 'Dashboard',
      path: urls.main.dashboard
    },
    {
      // permissions: pagePermissions.weather,
      component: WeatherPage,
      title: 'Weather',
      path: urls.main.weather
    }
  ],
  name: 'mainSub'
};

const auth = {
  routes: [
    {
      component: () => <AuthRouter subRouter={routers.authSub} />,
      notExact: true,
      path: '/'
    }
  ],
  name: 'auth'
};

const authSub = {
  notFoundRedirect: urls.auth.signin,
  routes: [
    {
      component: SigninPage,
      title: 'Sign in',
      path: urls.auth.signin
    },
    {
      component: SignupPage,
      title: 'Sign up',
      path: urls.auth.signup
    },
    {
      component: ResetPasswordPage,
      title: 'Reset password',
      path: urls.auth.resetPassword
    },
    {
      component: NewPasswordPage,
      notExact: true,
      title: 'New password',
      path: urls.auth.newPassword
    }
  ],
  name: 'authSub'
};

if (process.env.REACT_APP_HOST_ENV === 'development') {
  const token = AuthService.getAccessToken();

  if (token) {
    mainSub.routes.push({
      component: ComponentsUiPage,
      title: 'Components',
      path: urls.auxiliary.components
    });
  } else {
    authSub.routes.push({
      component: ComponentsUiPage,
      title: 'Components',
      path: urls.auxiliary.components
    });
  }
}

const routers = createRouter([auth, authSub, main, mainSub], {
  route: ProtectedRoute,
  title: TITLE_PREFIX
});

const configuredRootRouter = () => {
  const token = AuthService.getAccessToken();

  return token ? <routers.main /> : <routers.auth />;
};

export const RootRouter: FC = AppRouter(configuredRootRouter, history);
