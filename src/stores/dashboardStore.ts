import { observable, computed, action } from 'mobx';

export interface IDashboardStore {
  count: number;

  increaseCount(): void;
  decreaseCount(): void;
}

export class DashboardStore {
  @observable count: IDashboardStore['count'] = 0;

  @action
  public increaseCount = () => {
    this.count++;
  };

  @action
  public decreaseCount = () => {
    this.count--;
  };

  @computed
  get doubleCount() {
    return this.count * 2;
  }

  @action
  public clearDashboardStore = () => {
    this.count = 0;
  };
}
