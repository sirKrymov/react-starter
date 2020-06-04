// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { CSSProperties, ReactElement, ReactNode, memo } from 'react';

import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Typography } from 'components/view/atoms/Typography';
import { UiSize } from 'components/view/atoms/UiSize';

import './styles.scss';

interface IProps {
  fontWeight?: 'default' | 'bold';
  uppercase?: boolean;
  className?: string;
  children: ReactNode | string | number;
  variant?: 'contained' | 'outlined';
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  border?: boolean;
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  color?: 'secondary';
  style?: CSSProperties;
  to: string;
  id: string;
}

function LinkButtonBase({
  fontWeight = 'bold',
  uppercase,
  className,
  children,
  variant = 'contained',
  border,
  height,
  width,
  style,
  color = 'secondary',
  to,
  id
}: IProps): ReactElement {
  const linkButtonClass = cn(
    {
      'link-button': true,
      [`button--font-weight-${fontWeight}`]: fontWeight,
      [`link-button--variant-${variant}`]: variant,
      [`link-button--padding-${height}`]: height && width === 'content',
      [`link-button--color-${color}`]: color,
      [`link-button--border`]: border
    },
    className
  );

  return (
    <UiSize width={width} height={height}>
      <Link className={linkButtonClass} style={style} to={to} id={id}>
        <Typography uppercase={uppercase} color="inherit" variant="inherit">
          {children}
        </Typography>
      </Link>
    </UiSize>
  );
}

export const LinkButton = memo(LinkButtonBase);
