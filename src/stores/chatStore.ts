import { observable, action } from 'mobx';

export interface IChatStore {
  members: Array<any>;
}

export class ChatStore {
  @observable members: IChatStore['members'] = [];

  @action
  public clearUiStore = () => {
    this.members = [];
  };
}
