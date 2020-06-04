import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import React, { ComponentType } from 'react';
import { LocationDescriptor } from 'history';

import { isPlainObject } from '../../utils';

interface IRouterConfig {
  notFoundRedirect?: LocationDescriptor | null;
  routes: {
    permissions?: any;
    component?:
      | ComponentType<RouteComponentProps<any>>
      | ComponentType<any>
      | null;
    redirect?: LocationDescriptor | null;
    notExact?: boolean;
    title?: string;
    path: string;
  }[];
  name: string;
}

interface ISettingsConfig {
  title: string;
  route: any;
}

function createRouter(config: IRouterConfig, setting: ISettingsConfig) {
  const routes = config.routes.map(({ component, notExact, path, ...rest }) => {
    const Route = setting.route;

    return (
      <Route
        component={component}
        baseTitle={setting.title}
        exact={!notExact}
        path={path}
        key={path}
        {...rest}
      />
    );
  });

  if (config.notFoundRedirect) {
    routes.push(
      <Route
        component={() => <Redirect to={config.notFoundRedirect || ''} />}
        key="notFoundRedirect"
      />
    );
  }

  const Router = () => <Switch>{routes}</Switch>;

  Router.displayName = `${config.name[0].toUpperCase() +
    config.name.slice(1, config.name.length)}Router`;

  return Router;
}

export default function createRouterHelper(
  routerConfig: IRouterConfig[] | IRouterConfig,
  setting: ISettingsConfig
) {
  if (!isPlainObject(routerConfig) && !(routerConfig instanceof Array)) {
    throw new Error('Expected the routerConfig to be a plain object or Array.');
  }

  if (typeof setting !== 'undefined' && !isPlainObject(setting)) {
    throw new Error('Expected the setting to be a plain object');
  }

  let router: any;

  if (routerConfig instanceof Array) {
    router = {};

    routerConfig.forEach(config => {
      if (config.name) router[config.name] = createRouter(config, setting);
      else
        throw new Error(
          'Expected the routerConfig object, must have a name property.'
        );
    });
  } else {
    router = createRouter(routerConfig, setting);
  }

  return router;
}
