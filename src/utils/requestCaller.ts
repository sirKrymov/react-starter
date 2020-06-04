import { AxiosRequestConfig } from 'axios';

import AuthService from 'services/AuthService';

import { filterObjectFields, isEmptyObject } from 'utils';
import { apiCaller } from 'utils/apiCaller';

import { IApiConfig } from 'types/api-config.interface';

interface IRequestConfig {
  onSystemError?: () => void;
  responseType?: AxiosRequestConfig['responseType'];
  paramsFields?: string[];
  dataFields?: string[];
  onRequest?: () => void;
  onSuccess: (data: any) => void;
  payload: Record<string, any> | null;
  onFail: (error: any) => void;
  action: IApiConfig;
}

export default async function(config: IRequestConfig): Promise<any> {
  if (config.onRequest) config.onRequest();

  try {
    const {
      onSystemError,
      responseType,
      paramsFields,
      dataFields,
      onSuccess,
      payload,
      action: { requiredAuth, endpoint, method, baseUrl },
      onFail
    } = config;
    const url = endpoint(payload);
    let payloadParams: Record<string, any> | null = null;
    let payloadData = payload;
    let token = false;

    if (payload && paramsFields) {
      payloadParams = filterObjectFields(payload, paramsFields);
    }

    if (payload && dataFields) {
      payloadData = filterObjectFields(payload, dataFields);
    }

    if (requiredAuth) {
      token = true;
    }

    const response = await apiCaller(
      {
        ...(payloadParams && { params: payloadParams }),
        ...(!isEmptyObject(payloadData) && { data: payloadData }),
        responseType,
        method,
        url
      },
      baseUrl,
      token
    );
    const { data, status } = response;

    if (status && status >= 500 && status !== 502) {
      if (onSystemError) onSystemError();
      AuthService.unsetAccessToken();
    }

    if (status && ((status >= 400 && status < 500) || status === 502)) {
      onFail({ data, status });
    } else {
      onSuccess(data);
    }
  } catch (error) {
    config.onFail(error);
  }
}
