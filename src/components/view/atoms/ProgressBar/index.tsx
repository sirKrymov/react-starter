import React, { ReactElement } from 'react';

import cn from 'classnames';

import { Typography } from '../Typography';

import './styles.scss';

interface IProps {
  className?: string;
  completed: number | string;
}

export function ProgressBar({ completed, className }: IProps): ReactElement {
  const wrappClass = cn(
    {
      'progress-bar': true
    },
    className
  );

  const enhancedCompleted = Math.floor(+completed);

  return (
    <div className={wrappClass}>
      <div className="progress-bar__outer">
        <div
          className="progress-bar__fill"
          style={{ width: `calc(${enhancedCompleted}% + 1px)` }}
        ></div>
      </div>

      <Typography
        className="progress-bar__label"
        variant="subtitle3"
      >{`${Math.floor(enhancedCompleted)}%`}</Typography>
    </div>
  );
}
