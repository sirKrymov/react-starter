import React, { ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  className?: string;
  stretch?: boolean;
  color?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function LinearDotsLoader({
  className,
  stretch,
  color,
  size
}: IProps): ReactElement {
  const linearDotsLoaderClass = cn(
    {
      'linear-dots-loader': true,
      [`linear-dots-loader--${color}`]: color,
      [`linear-dots-loader--${size}`]: size,
      'linear-dots-loader--stretch': stretch
    },
    className
  );

  return (
    <p className={linearDotsLoaderClass}>
      <span />
      <span />
      <span />
    </p>
  );
}
