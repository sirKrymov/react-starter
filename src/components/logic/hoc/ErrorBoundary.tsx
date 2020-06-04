// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add component tests
import React, { Component, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(): Record<string, any> {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <p>Loading failed! Please reload.</p>;
    }

    return this.props.children;
  }
}
