import { createContext } from 'react';

import {
  DashboardStore,
  WeatherStore,
  ToastsStore,
  SocketStore,
  ThemeStore,
  ModalStore,
  ChatStore,
  AppStore,
  UiStore
} from 'stores';

export const storesContext = createContext({
  dashboardStore: new DashboardStore(),
  weatherStore: new WeatherStore(),
  toastsStore: new ToastsStore(),
  socketStore: new SocketStore(),
  themeStore: new ThemeStore(),
  modalStore: new ModalStore(),
  chatStore: new ChatStore(),
  appStore: new AppStore(),
  uiStore: new UiStore()
});
