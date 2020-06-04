// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  className?: string;
  children: ReactNode;
}

export function CardWrapper({ className, children }: IProps): ReactElement {
  const cardWrapperClass = cn(
    {
      'card-wrapper': true
    },
    className
  );

  return <div className={cardWrapperClass}>{children}</div>;
}
