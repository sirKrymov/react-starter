import React, { ReactElement } from 'react';

// node modules
import cn from 'classnames';

// custom components

// constants

// services

// utils

// static

// styles
import './styles.scss';

// imported interfaces and types

// inner interfaces and types
interface IProps {
  dummyProp?: any;
}

export function FunctionComponent({ dummyProp }: IProps): ReactElement {
  // modified styles
  const wrappClass = cn({
    name: true,
    'name--modified': dummyProp
  });

  return <div className={wrappClass}>R-Starter function component!</div>;
}
