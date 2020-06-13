import { observable, computed, action } from 'mobx';

export interface IDashboardStore {
  count: number;

  increaseCount(): void;
  decreaseCount(): void;
}

export class DashboardStore {
  @observable count: IDashboardStore['count'] = 0;

  @action
  public increaseCount = (): void => {
    this.count++;
  };

  @action
  public decreaseCount = (): void => {
    this.count--;
  };

  @computed
  get doubleCount(): IDashboardStore['count'] {
    return this.count * 2;
  }

  @action
  public clearDashboardStore = (): void => {
    this.count = 0;
  };
}
