// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  marginBottom?:
    | 's1'
    | 's2'
    | 's3'
    | 's4'
    | 's5'
    | 's6'
    | 's7'
    | 's8'
    | 's9'
    | 's10';
  children: ReactNode;
  alignH?: 'center';
}

export function FormBlock({
  marginBottom,
  children,
  alignH
}: IProps): ReactElement {
  const formBlockClass = cn({
    'form-block': true,
    [`form-block--mb-${marginBottom}`]: marginBottom,
    [`form-block--align-${alignH}`]: alignH
  });

  return <div className={formBlockClass}>{children}</div>;
}
