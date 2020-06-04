// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add components tests
import React, { ReactNode, ReactElement } from 'react';

import { Form as FormikForm } from 'formik';

import './styles.scss';

interface IProps {
  children: ReactNode;
}

export function Form({ children }: IProps): ReactElement {
  return <FormikForm className="form">{children}</FormikForm>;
}
