import React, { useState, ReactElement } from 'react';

import { GiCeilingLight } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import cn from 'classnames';

import { DropdownMenu } from 'components/view/compound/DropdownMenu';
import { CollapseIcon } from 'components/view/atoms/CollapseIcon';
import { Typography } from 'components/view/atoms/Typography';
import { ReactIcon } from 'components/view/atoms/ReactIcon';
import { Switch } from 'components/view/atoms/Switch';
import { Avatar } from 'components/view/atoms/Avatar';

import { IThemeStore } from 'stores/themeStore';
import { IAppStore } from 'stores/appStore';

import './styles.scss';

interface IProps {
  setTheme: IThemeStore['setTheme'];
  account: IAppStore['account'];
  logout: IAppStore['logout'];
  theme: IThemeStore['theme'];
}

export function AccountInfo({
  setTheme,
  account,
  logout,
  theme
}: IProps): ReactElement {
  const [dropdownOpen, toogleDropdown] = useState(false);

  function handleChange(): void {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function handleToggleDropdown(): void {
    toogleDropdown(!dropdownOpen);
  }

  const wrappClass = cn({
    'account-info': true
  });

  return (
    <DropdownMenu
      onOutsideClick={handleToggleDropdown}
      button={
        <div
          className={wrappClass}
          onClick={(): void => handleToggleDropdown()}
        >
          <Avatar id="account-info-avatar" />

          <Typography
            className="account-info__name"
            variant="body2"
            color="textDark"
            noWrap
          >
            {account.firstName}
          </Typography>

          <CollapseIcon open={dropdownOpen} id="account-info-collapse-icon" />
        </div>
      }
      open={dropdownOpen}
    >
      <div className="account-info__menu">
        <div className="account-info__menu-item" onClick={handleChange}>
          <ReactIcon size="lg" color="on-primary">
            <GiCeilingLight />
          </ReactIcon>

          <Typography color="textDark">Dark mode</Typography>

          <Switch
            onChange={(): null => null}
            styles={{ pointerEvents: 'none' }}
            value={theme === 'dark' ? true : false}
            name="darkModeSwitcher"
            size="sm"
            id="dark-mode-switcher"
          />
        </div>

        <div className="account-info__menu-item" onClick={(): void => logout()}>
          <ReactIcon size="lg" color="on-primary">
            <FiLogOut />
          </ReactIcon>

          <Typography color="textDark">Log out</Typography>
        </div>
      </div>
    </DropdownMenu>
  );
}
