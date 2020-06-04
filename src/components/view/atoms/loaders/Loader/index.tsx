// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

export interface IProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'on-secondary';
  style?: object;
  size?: 'sm' | 'md' | 'lg';
}

export function Loader({
  className,
  color = 'secondary',
  style,
  size = 'md'
}: IProps): ReactElement {
  const loaderClass = cn(
    {
      loader: true,
      [`loader--color-${color}`]: color,
      [`loader--size-${size}`]: size
    },
    className
  );

  return <div className={loaderClass} style={style} />;
}
