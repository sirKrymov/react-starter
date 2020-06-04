import React, { ComponentType, ReactElement } from 'react';

interface IProps {
  subRouter: ComponentType;
}

export function AuthRouter(props: IProps): ReactElement {
  return <props.subRouter />;
}
