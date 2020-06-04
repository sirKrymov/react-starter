import { RouteComponentProps, Redirect, Route } from 'react-router-dom';
import React, { Component } from 'react';
import _ from 'lodash';

import AuthService from '../services/AuthService';

import { LocationDescriptor } from 'history';
import { UserRoles } from '../constants/permissions';

export interface IState {}

export interface IProps {
  permissions?: UserRoles[];
  baseTitle?: string;
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | null;
  redirect?: LocationDescriptor | null;
  title?: string;
}

export class ProtectedRoute extends Component<
  IProps & IState & RouteComponentProps<any>
> {
  static defaultProps = {
    component: null,
    redirect: null
  };

  componentDidMount() {
    const { baseTitle, title } = this.props;

    if (title) document.title = (baseTitle || '') + (title || '');
  }

  checkPermission(permissions: UserRoles[]) {
    const role = AuthService.getRole() ? AuthService.getRole() : undefined;

    return !_.includes(permissions, role);
  }

  render() {
    const { redirect, component: Component, permissions, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => {
          if (redirect) return <Redirect to={redirect} />;

          if (permissions && this.checkPermission(permissions)) {
            return <Redirect to="/" />;
          }

          if (Component) return <Component {...props} />;

          return null;
        }}
      />
    );
  }
}
