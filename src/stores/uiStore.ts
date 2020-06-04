import { observable, action } from 'mobx';

export interface IUiStore {
  active: Record<string, any>;
}

export class UiStore {
  @observable active: IUiStore['active'] = {};

  @action
  public toggleUi = (ui: string): void => {
    if (ui in this.active) {
      delete this.active[ui];
    } else {
      this.active[ui] = true;
    }
  };

  @action
  public clearUiStore = (): void => {
    this.active = {};
  };
}
