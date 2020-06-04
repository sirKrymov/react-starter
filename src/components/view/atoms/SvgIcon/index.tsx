// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { ReactSVG } from 'react-svg';
import cn from 'classnames';

import './styles.scss';

interface IProps {
  className?: string;
  onClick?(): void;
  pointer?: boolean;
  rotate?: '90' | '180' | '270' | '360';
  color?: 'on-primary' | 'secondary' | 'primary' | 'thirdy' | 'valid' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  src: string;
  top?: '1' | '2' | '3' | '4';
  id?: string;
}

export function SvgIcon({
  className,
  pointer,
  onClick,
  rotate,
  color,
  size,
  src,
  top,
  id
}: IProps): ReactElement {
  const svgIconClass = cn(
    {
      'svg-icon': true,
      [`svg-icon--rotate-${rotate}`]: rotate,
      [`svg-icon--color-${color}`]: color,
      [`svg-icon--size-${size}`]: size,
      [`svg-icon--top-${top}`]: top,
      'svg-icon--pointer': pointer
    },
    className
  );

  return (
    <ReactSVG src={src} className={svgIconClass} onClick={onClick} id={id} />
  );
}
