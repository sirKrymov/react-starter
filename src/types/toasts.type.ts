export type Toast = {
  isLoading: boolean;
  autohide: boolean;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  id: string;
};
