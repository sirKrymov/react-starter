// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

import cn from 'classnames';

import { DefaultHeader } from './DefaultHeader';

import './styles.scss';

interface IProps {
  className?: string;
  children: ReactNode;
}

export function DefaultTemplate({ className, children }: IProps): ReactElement {
  const defaultTemplateClass = cn(
    {
      'default-template': true
    },
    className
  );

  return (
    <div className={defaultTemplateClass}>
      <DefaultHeader />

      <main>{children}</main>
    </div>
  );
}
