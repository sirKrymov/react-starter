import { useStores } from '../hooks/useStores';

import { Toast as ToastType } from '../types/toasts.type';

export const useToast = () => {
  const { toastsStore } = useStores();

  return {
    info: (message: string, options?: Partial<ToastType>) => {
      if (toastsStore) {
        toastsStore.addToast({
          message,
          type: 'info',
          ...options
        });
      }
    },

    warning: (message: string, options?: Partial<ToastType>) => {
      if (toastsStore) {
        toastsStore.addToast({ message, type: 'warning', ...options });
      }
    },

    success: (message: string, options?: Partial<ToastType>) => {
      if (toastsStore) {
        toastsStore.addToast({
          message,
          type: 'success',
          ...options
        });
      }
    },

    error: (message: string, options?: Partial<ToastType>) => {
      if (toastsStore) {
        toastsStore.addToast({
          message,
          type: 'error',
          ...options
        });
      }
    },

    hide: (id: ToastType['id']) => {
      toastsStore.removeToast(id);
    },

    hideIsLoading: () => {
      if (toastsStore) {
        const isLoadingToasts = toastsStore.toasts.filter(
          ({ isLoading }) => isLoading
        );
        const lastLoadingToast = isLoadingToasts[isLoadingToasts.length - 1];

        if (lastLoadingToast) {
          toastsStore.removeToast(lastLoadingToast.id);
        }
      }
    }
  };
};
