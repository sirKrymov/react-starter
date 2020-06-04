import { observable, action } from 'mobx';

import { OPEN_WEATHER_API_KEY } from 'constants/system';
import { weatherRequests } from 'api';

import requestCaller from 'utils/requestCaller';

import { Request } from 'types/request-params.type';

export interface IWeatherStore {
  fetching: boolean;

  getForecast: Request<Record<string, any>>;
}

export class WeatherStore {
  @observable fetching: IWeatherStore['fetching'] = false;

  @action
  private setFetching = (name: string, value: boolean): void => {
    this[name] = value;
  };

  @action
  public getForecast: IWeatherStore['getForecast'] = (
    payload,
    onSuccess,
    onFail
  ) => {
    requestCaller({
      paramsFields: ['lat', 'lon', 'appid'],
      dataFields: [],
      onRequest: () => {
        this.setFetching('fetching', true);
      },
      onSuccess: res => {
        onSuccess && onSuccess(res);
        this.setFetching('fetching', false);
      },
      payload: { ...payload, appid: OPEN_WEATHER_API_KEY },
      action: weatherRequests.forecast,
      onFail: res => {
        onFail && onFail(res);
        this.setFetching('fetching', false);
      }
    });
  };

  @action
  public clearWeatherStore = (): void => {
    this.fetching = false;
  };
}
