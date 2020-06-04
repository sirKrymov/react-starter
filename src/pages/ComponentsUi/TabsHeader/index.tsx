import React, { ReactElement } from 'react';

import cn from 'classnames';

import { Typography } from 'components/view/atoms/Typography';

import './styles.scss';

import { ITabsHeader as ITabsHeaderProps } from 'types/components.interface';

export function TabsHeader({
  activeRef,
  active,
  tabs
}: ITabsHeaderProps): ReactElement {
  return (
    <div className="tab-header">
      <ul className="tab-header__list">
        {tabs.map(({ onClick, label, name }) => {
          const tabItemClass = cn({
            'tab-header__item': true,
            'tab-header__item--active': name === active
          });

          return (
            <li
              className={tabItemClass}
              key={name}
              {...(onClick && { onClick })}
              {...(name === active && { ref: activeRef })}
            >
              <div className="tab-header__text">
                <div className="tab-header__label">
                  <Typography variant="body2" color="inherit">
                    {label}
                  </Typography>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
