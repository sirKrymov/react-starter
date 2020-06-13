import { action, observable, reaction } from 'mobx';
import { nanoid } from 'nanoid';

import { Toast } from 'types/toasts.type';

export interface IToastsStore {
  setCountToHide(id: Toast['id']): void;
  removeToast(id: Toast['id']): void;
  addToast(toast: Toast): void;
  clearToastsStore(): void;
  toasts: Toast[];
  state: string;
}

const ds = 150; // Duration for state
const d = 5000; // Duration to remove

export class ToastsStore {
  @observable toasts: IToastsStore['toasts'] = [];
  @observable state: IToastsStore['state'] = '';

  @action
  public removeToast = (id: Toast['id']): void => {
    this.state = `hide ${id}`;

    setTimeout(() => {
      this.filterToasts(id);
    }, ds);
  };

  @action
  private filterToasts = (id: Toast['id']): void => {
    this.toasts = [...this.toasts].filter((item: Toast) => id !== item.id);
  };

  @action
  private setCountToHide = (id: Toast['id']): void => {
    setTimeout(() => {
      this.removeToast(id);
    }, d);
  };

  @action
  public addToast = ({
    isLoading = false,
    autohide = true,
    message = '',
    type = 'info'
  }: Partial<Toast>): void => {
    const id = nanoid();

    this.toasts = [...this.toasts, { isLoading, autohide, message, type, id }];

    if (autohide && !isLoading) {
      this.setCountToHide(id);
    }
  };

  reaction = reaction(
    () => this.toasts.length,
    () => {
      if (this.toasts.length >= 4) {
        const lastToastId = this.toasts[0].id;

        this.state = `hide ${lastToastId}`;

        setTimeout(() => {
          this.shiftToast();
        }, ds);
      }
    }
  );

  @action
  private shiftToast = (): Toast => this.toasts.shift() as Toast;

  @action
  public clearToastsStore = (): void => {
    this.toasts = [];
  };
}
