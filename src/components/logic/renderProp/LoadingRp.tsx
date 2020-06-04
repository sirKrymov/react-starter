// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add component tests
import React, { ReactElement } from 'react';

import { ReactNode } from 'react';

import { Loader } from 'components/view/atoms/loaders/Loader';

interface IProps {
  children: ReactNode;
  loading?: boolean;
}

export function LoadingRp({
  children,
  loading
}: IProps): ReactElement | ReactNode {
  return loading ? <Loader color="secondary" /> : children;
}
