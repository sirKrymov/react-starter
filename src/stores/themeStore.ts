import { observable, reaction, action, autorun } from 'mobx';

export interface IThemeStore {
  theme: 'light' | 'dark';

  setTheme: (theme: IThemeStore['theme']) => void;
}

export class ThemeStore {
  @observable theme: IThemeStore['theme'] = 'light';

  constructor() {
    this.theme = this.getInitialTheme() as IThemeStore['theme'];
    autorun(() =>
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', this.theme)
    );
  }

  private getInitialTheme = (): IThemeStore['theme'] => {
    const isReturningUser = 'theme' in localStorage;
    const savedMode = localStorage.getItem('theme') as IThemeStore['theme'];

    if (isReturningUser) {
      return savedMode;
    } else {
      return 'light';
    }
  };

  reaction = reaction(
    () => this.theme,
    () => {
      localStorage.setItem('theme', this.theme);
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', this.theme);
    }
  );

  @action
  public setTheme: IThemeStore['setTheme'] = theme => {
    this.theme = theme;
  };

  @action
  public clearThemeStore = (): void => {
    this.theme = 'light';
  };
}
