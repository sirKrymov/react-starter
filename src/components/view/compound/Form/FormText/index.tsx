// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

import { Typography } from 'components/view/atoms/Typography';

import './styles.scss';

interface IProps {
  type?: 'simple' | 'title' | 'subtitle';
  text: ReactNode | string;
}

export function FormText({ type, text }: IProps): ReactElement {
  switch (type) {
    case 'title':
      return <Typography variant="h1">{text}</Typography>;

    case 'subtitle':
      return <Typography variant="body1">{text}</Typography>;

    default:
    case 'simple':
      return <Typography variant="body2">{text}</Typography>;
  }
}
