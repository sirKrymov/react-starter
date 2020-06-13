import { observable, action } from 'mobx';

import AuthService from 'services/AuthService';
import history from 'utils/history';

import { UserRoles } from 'constants/permissions';
import { redirect } from 'constants/system';

import { IAccount } from 'types/account.interface';
import { Request } from 'types/request-params.type';
import {
  IResetPasswordRequest,
  INewPasswordRequest,
  ISigninRequest,
  ISignupRequest
} from 'types/auth.interface';

export interface IAppStore {
  systemError: boolean;
  fetching: boolean;
  account: IAccount;
  token: string | null | undefined;

  resetPassword: Request<IResetPasswordRequest>;
  newPassword: Request<INewPasswordRequest>;
  signup: Request<ISignupRequest>;
  login: (values: ISigninRequest) => void;
  logout: (reload?: boolean) => void;
}

export class AppStore {
  @observable systemError: IAppStore['systemError'] = false;
  @observable fetching: IAppStore['fetching'] = false;
  @observable account: IAppStore['account'] = {
    firstName: 'Yevgeniy',
    lastName: 'Krymov',
    email: 'ykrymov@s-pro.io',
    role: UserRoles.SUPERADMINISTRATOR
  };
  @observable token: IAppStore['token'] = null;

  @action
  public signup: IAppStore['signup'] = (payload, onSuccess, onFail) => {
    console.log('sign up onSuccess', onSuccess);
    console.log('sign up payload', payload);
    console.log('sign up onFail', onFail);
  };

  @action
  public login = (values: ISigninRequest): void => {
    AuthService.unsetAccessToken();
    console.log('sign in', values);

    this.fetching = true;

    setTimeout(() => {
      this.testAction();
    }, 3000);
  };

  @action
  public logout: IAppStore['logout'] = reload => {
    this.clearAppStore();
    this.token = null;
    AuthService.unsetAccessToken();

    if (reload) {
      window.location.href = redirect.NOT_AUTH;
    } else {
      history.replace(redirect.NOT_AUTH);
    }
  };

  @action
  public resetPassword: IAppStore['resetPassword'] = (
    payload,
    onSuccess,
    onFail
  ) => {
    console.log('reset password onSuccess', onSuccess);
    console.log('reset password payload', payload);
    console.log('reset password onFail', onFail);
  };

  @action
  public newPassword: IAppStore['newPassword'] = (
    payload,
    onSuccess,
    onFail
  ) => {
    console.log('new password onSuccess', onSuccess);
    console.log('new password payload', payload);
    console.log('new password onFail', onFail);
  };

  @action
  private testAction = (): void => {
    AuthService.setAccessToken('test');

    this.fetching = false;
    this.token = 'test';

    history.replace(redirect.AUTH);
  };

  @action
  public clearAppStore = (): void => {
    this.systemError = false;
    this.fetching = false;
    this.account = {
      firstName: '',
      lastName: '',
      email: '',
      role: null
    };
    this.token = null;
  };
}
