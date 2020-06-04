// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  className?: string;
  children: string;
}

export function HtmlView({ className, children }: IProps): ReactElement {
  const htmlViewClass = cn(
    {
      'html-view': true
    },
    className
  );

  return (
    <div
      className={htmlViewClass}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
