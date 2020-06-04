// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  className?: string;
  onClick?(): void;
  children: ReactNode;
  pointer?: boolean;
  rotate?: '90' | '180' | '270' | '360';
  color?: 'on-primary' | 'secondary' | 'primary' | 'thirdy' | 'valid' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  id?: string;
}

export function ReactIcon({
  className,
  children,
  pointer,
  onClick,
  rotate,
  color = 'primary',
  size = 'lg',
  id
}: IProps): ReactElement {
  const reactIconClass = cn(
    {
      'react-icon': true,
      [`react-icon--rotate-${rotate}`]: rotate,
      [`react-icon--color-${color}`]: color,
      [`react-icon--size-${size}`]: size,
      'react-icon--pointer': pointer
    },
    className
  );

  return (
    <div className={reactIconClass} onClick={onClick} id={id}>
      {children}
    </div>
  );
}
