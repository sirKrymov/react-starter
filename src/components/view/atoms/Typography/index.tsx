// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

import cn from 'classnames';

import { capitalize } from 'utils';

import './styles.scss';

interface IProps {
  isCapitalize?: boolean;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  paragraph?: boolean;
  uppercase?: boolean;
  className?: string;
  children: ReactNode | string | number;
  variant?:
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'inherit'
    | 'caption'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  display?: 'initial' | 'block' | 'inline';
  noWrap?: boolean;
  color?:
    | 'textSecondary'
    | 'textPrimary'
    | 'textThirdy'
    | 'textLight'
    | 'secondary'
    | 'textDark'
    | 'primary'
    | 'initial'
    | 'inherit'
    | 'thirdy'
    | 'error'
    | 'valid';
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  font?: 'roboto';
}

export function Typography({
  isCapitalize,
  component,
  paragraph,
  uppercase,
  className,
  children,
  variant,
  display = 'initial',
  noWrap,
  color = 'textPrimary',
  align = 'left',
  font = 'roboto'
}: IProps): ReactElement {
  const tagMapping = {
    subtitle1: 'h6',
    subtitle2: 'h6',
    subtitle3: 'h6',
    inherit: 'p',
    body1: 'p',
    body2: 'p',
    body3: 'p',
    body4: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6'
  };
  const Tag =
    component || (paragraph ? 'p' : variant && tagMapping[variant]) || 'span';

  if (isCapitalize && typeof children === 'string')
    children = capitalize(children);

  const typographyClass = cn(
    {
      typography: true,
      [`typography--display-${display}`]: display,
      [`typography--variant-${variant}`]: variant,
      [`typography--color-${color}`]: color,
      [`typography--align-${align}`]: align,
      [`typography--font-${font}`]: font,
      [`typography--uppercase`]: uppercase,
      [`typography--nowrap`]: noWrap
    },
    className
  );

  return <Tag className={typographyClass}>{children}</Tag>;
}
