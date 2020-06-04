// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add component tests
import React, { ReactNode, ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  className?: string;
  children: ReactNode;
  fluid?: boolean;
}

export function ContentLimiter({
  className,
  children,
  fluid
}: IProps): ReactElement {
  const contentLimiterTemplateClass = cn(
    {
      'content-limiter--fluid': fluid,
      'content-limiter': true
    },
    className
  );

  return <div className={contentLimiterTemplateClass}>{children}</div>;
}
