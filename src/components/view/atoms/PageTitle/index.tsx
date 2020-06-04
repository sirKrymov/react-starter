// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

import cn from 'classnames';

import { Typography } from 'components/view/atoms/Typography';

import './styles.scss';

interface IProps {
  marginBottom?: boolean;
  className?: string;
  children: ReactNode;
}

export function PageTitle({
  marginBottom,
  className,
  children
}: IProps): ReactElement {
  const pageTitleClass = cn(
    {
      'page-title': true,
      'page-title--mb': marginBottom
    },
    className
  );

  return (
    <Typography className={pageTitleClass} variant="h1">
      {children}
    </Typography>
  );
}
