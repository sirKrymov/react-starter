import { observable, action } from 'mobx';
import openSocket from 'socket.io-client';
import { nanoid } from 'nanoid';

import AuthService from '../services/AuthService';
import { logger } from '../utils';
import history from '../utils/history';

import { WebSocketEvents } from '../constants/wsEvents';
import { redirect } from '../constants/system';

export interface ISocketStore {
  isConnected: boolean;
  systemError: string;
  socket: SocketIOClient.Socket | undefined;
  token: string | null | undefined;
}

export class SocketStore {
  @observable isConnected: ISocketStore['isConnected'] = false;
  @observable systemError: ISocketStore['systemError'] = '';
  @observable socket: ISocketStore['socket'];
  @observable token: ISocketStore['token'] = null;

  @action
  public socketConnect = () => {
    try {
      const wsProvider = process.env.REACT_APP_BACKEND_WS_ENDPOINT;
      const logoutUrl = process.env.REACT_APP_LOGOUT_URL;

      this.token = AuthService.getAccessToken();

      if (this.token && wsProvider) {
        this.socket = openSocket(wsProvider, {
          query: { token: this.token }
        });

        // Basic events
        this.subscribe(WebSocketEvents.CONNECT, () => {
          logger('WEBSOCKET', 'Websocket connected');
          this.isConnected = true;
        });

        this.subscribe(WebSocketEvents.MESSAGE, (data: Record<string, any>) =>
          logger('WEBSOCKET MESSAGE', data)
        );

        this.subscribe(WebSocketEvents.DISCONNECT, () => {
          logger('WEBSOCKET', 'Websocket disconnected. Retrying...');
          this.isConnected = false;
        });

        this.subscribe(WebSocketEvents.ERROR, (data: Record<string, any>) => {
          logger('WEBSOCKET ERROR', data);
          history.push(redirect.AUTH);
          this.systemError = data.message;
        });

        this.subscribe(WebSocketEvents.INVALID_TOKEN, () => {
          logger('WEBSOCKET INVALID TOKEN');

          if (process.env.REACT_APP_HOST_ENV === 'development') {
            history.push(redirect.NOT_AUTH);
            this.systemError = 'Invalid token';
          } else {
            logoutUrl && window.location.replace(logoutUrl);
          }
        });

        // Custom events
        this.emit(WebSocketEvents.SYSTEM_STATUS, {});
      }
    } catch (error) {
      console.error(error);
    }
  };

  @action
  private requestData = (data: Record<string, any>) => {
    return {
      requestId: nanoid(),
      data
    };
  };

  @action
  private subscribe = (event: string, callback: Function) => {
    this.socket && this.socket.on(event, callback);
  };

  @action
  private emit = (event: string, data: Record<string, any>) => {
    this.socket && this.socket.emit(event, this.requestData(data));
  };

  @action
  public closeSocket = () => {
    this.socket && this.socket.close();
  };

  @action
  public clearSocketStore = () => {
    this.isConnected = false;
    this.systemError = '';
    this.socket = undefined;
    this.token = null;
  };
}
