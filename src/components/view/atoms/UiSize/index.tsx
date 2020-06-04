// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add component tests
import React, { ReactNode, ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  children: ReactNode;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
}

export function UiSize({
  children,
  height = 'md',
  width = 'full'
}: IProps): ReactElement {
  const uiSizeClass = cn({
    'ui-size': true,
    [`ui-size--height-${height}`]: height,
    [`ui-size--width-${width}`]: width
  });

  return <div className={uiSizeClass}>{children}</div>;
}
