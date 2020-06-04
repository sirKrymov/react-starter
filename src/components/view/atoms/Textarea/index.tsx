// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ChangeEvent, FocusEvent, ReactElement } from 'react';

import cn from 'classnames';

import { Typography } from 'components/view/atoms/Typography';
import { UiSize } from 'components/view/atoms/UiSize';

import './styles.scss';

interface IProps {
  disableBorder?: boolean;
  placeholder?: string;
  lengthSide?: 'left' | 'right';
  className?: string;
  readOnly?: boolean;
  onChange(e: ChangeEvent<any>): void;
  onFocus?(e: FocusEvent<any>): void;
  onBlur?(e: FocusEvent<any>): void;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  length?: number;
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  error?: boolean;
  type?: 'password' | 'text';
  value: string;
  name: string;
  id: string;
}

export function Textarea({
  disableBorder,
  placeholder,
  lengthSide = 'right',
  className,
  onChange,
  readOnly,
  onFocus,
  onBlur,
  height = 'full',
  length,
  error,
  width = 'full',
  value,
  name,
  id,
  ...rest
}: IProps): ReactElement {
  const textareaClass = cn(
    {
      textarea: true,
      'textarea--disable-border': disableBorder,
      'textarea--error': error
    },
    className
  );
  const lengthClass = cn({
    'textarea__length-block': true,
    [`textarea__length-block--side-${lengthSide}`]: lengthSide
  });

  return (
    <UiSize width={width} height={height}>
      <div className={textareaClass}>
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name}
          id={id}
          {...rest}
        />

        {length && (
          <div className={lengthClass}>
            <Typography variant="body4" color="textLight">
              {value ? value.length : 0} / {length}
            </Typography>
          </div>
        )}
      </div>
    </UiSize>
  );
}
