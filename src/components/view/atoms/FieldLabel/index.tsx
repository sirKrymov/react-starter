// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

import cn from 'classnames';

import { Typography } from 'components/view/atoms/Typography';

import './styles.scss';

interface IProps {
  rightContent?: ReactNode;
  blockTitle?: boolean;
  withError?: boolean;
  subLabel?: string;
  children: ReactNode;
  status?: {
    error?: boolean;
    des?: string;
  };
  label?: string;
  id?: string;
}

export function FieldLabel({
  rightContent,
  blockTitle,
  withError = true,
  subLabel,
  children,
  status: { error, des } = {},
  label,
  id = ''
}: IProps): ReactElement {
  const fieldClass = cn({
    'field-label': true,
    'field-label--with-error': withError
  });
  const labelClass = cn({
    'field-label__label': true,
    'field-label__label--block': blockTitle
  });

  return (
    <div className={fieldClass} id={id}>
      {(label || subLabel) && (
        <div className={labelClass}>
          <Typography variant="body2">{label}</Typography>

          {subLabel && (
            <Typography variant="body4" color="textLight">
              {subLabel}
            </Typography>
          )}
        </div>
      )}

      {rightContent && (
        <div className="field-label__right-content">{rightContent}</div>
      )}

      {children}

      {withError && error && des && (
        <div className="field-label__des">
          <Typography color="error" variant="body4">
            {des}
          </Typography>
        </div>
      )}
    </div>
  );
}
