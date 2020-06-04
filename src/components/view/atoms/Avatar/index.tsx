// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  withBorder?: boolean;
  className?: string;
  onClick?(): void;
  avatar?: string;
  size?: 'xs' | 'sm' | 'lg' | number;
  id: string;
}

export function Avatar({
  className,
  onClick,
  withBorder,
  avatar,
  size = 'xs',
  id
}: IProps): ReactElement {
  const avatarClass = cn(
    {
      avatar: true,
      'avatar--with-border': withBorder,
      'avatar--with-click': onClick,
      ...(typeof size === 'string' && { [`avatar--${size}`]: size })
    },
    className
  );

  return (
    <div
      className={avatarClass}
      onClick={onClick ? onClick : undefined}
      style={
        typeof size === 'number'
          ? {
              height: size,
              width: size
            }
          : {}
      }
      id={id}
    >
      <img
        className="img-cover"
        src={
          avatar ||
          'https://f0.pngfuel.com/png/980/886/male-portrait-avatar-png-clip-art.png'
        }
        alt="avatar"
      />
    </div>
  );
}
