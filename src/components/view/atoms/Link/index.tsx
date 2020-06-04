// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import cn from 'classnames';

import './styles.scss';

interface IProps {
  underline?: boolean;
  className?: string;
  children: ReactNode;
  to: string;
  id: string;
}

export function Link({
  underline,
  className,
  children,
  to,
  id
}: IProps): ReactElement {
  const linkClass = cn(
    {
      'custom-link': true,
      'custom-link--underline': underline
    },
    className
  );

  return (
    <RouterLink className={linkClass} to={to} id={id}>
      {children}
    </RouterLink>
  );
}
