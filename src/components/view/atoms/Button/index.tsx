// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { CSSProperties, ReactElement, ReactNode, memo } from 'react';

import cn from 'classnames';

import { Typography } from 'components/view/atoms/Typography';
import { Loader } from 'components/view/atoms/loaders/Loader';
import { UiSize } from 'components/view/atoms/UiSize';

import './styles.scss';

interface IProps {
  fontWeight?: 'default' | 'bold';
  uppercase?: boolean;
  onClick?(): void | undefined;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  variant?: 'contained' | 'outlined';
  loading?: boolean;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  border?: boolean;
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  color?: 'secondary';
  style?: CSSProperties;
  type?: 'button' | 'submit';
  id: string;
}

function ButtonBase({
  fontWeight = 'bold',
  uppercase,
  className,
  disabled,
  children,
  onClick,
  variant = 'contained',
  loading,
  border,
  height,
  width,
  style,
  color = 'secondary',
  type = 'button',
  id
}: IProps): ReactElement {
  const buttonClass = cn(
    {
      button: true,
      [`button--font-weight-${fontWeight}`]: fontWeight,
      [`button--variant-${variant}`]: variant,
      [`button--padding-${height}`]: height && width === 'content',
      [`button--color-${color}`]: color,
      [`button--disabled`]: disabled,
      [`button--border`]: border,
      'button--loading': loading
    },
    className
  );

  return (
    <UiSize width={width} height={height}>
      <button
        className={buttonClass}
        disabled={disabled}
        onClick={loading || disabled ? undefined : onClick}
        style={style}
        type={type}
        id={id}
      >
        {loading ? (
          <Loader color="on-secondary" />
        ) : (
          <div className="button__content">
            <Typography uppercase={uppercase} variant="inherit" color="inherit">
              {children}
            </Typography>
          </div>
        )}
      </button>
    </UiSize>
  );
}

export const Button = memo(ButtonBase);
