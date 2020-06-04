import React, { ComponentType, ReactElement } from 'react';

interface IProps {
  subRouter: ComponentType;
}

export function MainRouter(props: IProps): ReactElement {
  return <props.subRouter />;
}
