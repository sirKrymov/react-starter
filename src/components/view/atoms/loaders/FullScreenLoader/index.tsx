import React, { ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  className?: string;
  opacity?: boolean;
}

export function FullScreenLoader({ className, opacity }: IProps): ReactElement {
  const fullScreenLoaderClass = cn(
    {
      'full-screen-loader': true,
      'full-screen-loader--opacity': opacity
    },
    className
  );

  return (
    <div className={fullScreenLoaderClass}>
      <div className="container">
        <span className="layer" />
        <span className="layer" />
        <span className="layer" />
      </div>
    </div>
  );
}
