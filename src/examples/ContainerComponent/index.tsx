import React, { Component } from 'react';

// node modules
import { inject, observer } from 'mobx-react';
import cn from 'classnames';

// custom components

// constants

// services

// utils

// stores

// static

// styles
import './styles.scss';

// imported interfaces and types

// inner interfaces and types
interface IInjectedProps {}

interface IProps {
  dummyProp?: any;
}

interface IState {}

@inject((
  {
    // stores
  }
) => ({
  // destructuring actions and props from stores
}))
@observer
export class ContainerComponent extends Component<IProps, IState> {
  constructor(props: IProps | IInjectedProps) {
    super(props);

    this.state = {};
  }

  get injected() {
    return this.props as IInjectedProps;
  }

  render() {
    const { dummyProp } = this.props;
    const {} = this.injected;

    // modified styles
    const wrappClass = cn({
      name: true,
      'name--modified': dummyProp
    });

    return <div className={wrappClass}>R-Starter container component!</div>;
  }
}
