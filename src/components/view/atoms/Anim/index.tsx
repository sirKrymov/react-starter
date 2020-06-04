// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

interface IProps {
  duration?: string;
  children: ReactNode;
  delay?: string;
  type?: 'mount' | 'show';
}

export function Anim({
  children,
  duration = '0.4s',
  delay = '0.2s',
  type = 'show'
}: IProps): ReactElement {
  return (
    <div
      style={{
        animationDuration: duration,
        animationFillMode: 'both',
        animationDelay: delay,
        animationName: type,
        opacity: 0
      }}
    >
      {children}
    </div>
  );
}
