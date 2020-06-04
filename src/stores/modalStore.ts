import { observable, action } from 'mobx';

export interface IModalStore {
  modalName: string | '';
  modalData: Record<string, any> | null;
}

export class ModalStore {
  @observable modalName: IModalStore['modalName'] = '';
  @observable modalData: IModalStore['modalData'] = null;

  @action
  public openModal = (name: string, data?: Record<string, any>) => {
    this.modalName = name;

    if (data) this.modalData = data;
  };

  @action
  public changeModal = (name: string, data?: Record<string, any> | 'clear') => {
    this.modalName = name;

    if (data && data !== 'clear') this.modalData = data;
    if (data && data === 'clear') this.modalData = null;
  };

  @action
  public closeModal = () => {
    this.modalName = '';
    this.modalData = null;
  };

  @action
  public clearModalStore = () => {
    this.modalName = '';
    this.modalData = null;
  };
}
