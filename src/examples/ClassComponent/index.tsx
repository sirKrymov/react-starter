import React, { Component, ReactElement } from 'react';

// node modules
import cn from 'classnames';

// custom components

// custom containers

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

interface IState {}

export class ClassComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render(): ReactElement {
    const { dummyProp } = this.props;
    const {} = this.state;

    // modified styles
    const wrappClass = cn({
      name: true,
      'name--modified': dummyProp
    });

    return <div className={wrappClass}>R-Starter class component!</div>;
  }
}
