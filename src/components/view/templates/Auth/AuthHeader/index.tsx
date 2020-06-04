// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React from 'react';

import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

import { ContentLimiter } from 'components/view/layouts/ContentLimiter';
import { LngChanger } from 'components/view/compound/LngChanger';
import { LinkButton } from 'components/view/atoms/LinkButton';
import { Switch } from 'components/view/atoms/Switch';
import { Logo } from 'components/view/atoms/Logo';

import { useStores } from 'hooks/useStores';
import { useToast } from 'hooks/useToasts';

import urls from 'constants/urls';

import './styles.scss';

interface IProps {
  page?: 'signin' | 'signup' | 'resetPassword' | 'newPassword' | 'verify-email';
}

export const AuthHeader = observer(({ page }: IProps) => {
  const { themeStore } = useStores();
  const { t } = useTranslation();
  const toast = useToast();

  const { setTheme, theme } = themeStore;

  function handleChange(): void {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <header className="auth-header">
      <ContentLimiter>
        <div className="auth-header__content">
          <Logo id="auth-logo" />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={(): void =>
                toast.success('Message was sent successfully')
              }
            >
              Toasts
            </button>

            <LngChanger />

            <div
              style={{
                alignItems: 'center',
                margin: '0 16px',
                display: 'flex'
              }}
            >
              <Switch
                onChange={handleChange}
                value={theme === 'dark' ? true : false}
                name="darkModeSwitcher"
                id="dark-mode-switcher"
              />
            </div>

            {page === 'signin' && (
              <LinkButton
                variant="outlined"
                height="sm"
                width="content"
                to={urls.auth.signup}
                id="auth-sign-up-link"
              >
                {t('authHeader.signUpButtonTitle')}
              </LinkButton>
            )}
          </div>
        </div>
      </ContentLimiter>
    </header>
  );
});
