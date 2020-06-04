import { observable, action } from 'mobx';

export interface IExampleStore {}

export class ExampleStore {
  @observable count = 0;

  @action
  increaseCount = () => {
    this.count++;
  };

  @action.bound
  decreaseCount = () => {
    this.count--;
  };
}

const exampleStore = new ExampleStore();

export default exampleStore;
