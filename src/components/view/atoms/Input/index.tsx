// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ChangeEvent, FocusEvent, ReactNode, ReactElement } from 'react';

import cn from 'classnames';

import { UiSize } from 'components/view/atoms/UiSize';

import './styles.scss';

export interface IProps {
  placeholder?: string;
  rightBlock?: ReactNode;
  className?: string;
  onChange(e: ChangeEvent<any> | string): void;
  onFocus?(e: FocusEvent<any>): void;
  onBlur?(e: FocusEvent<any>): void;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  error?: boolean;
  type?: 'password' | 'text';
  value: string;
  name: string;
  id: string;
}

export function Input({
  placeholder,
  rightBlock,
  className,
  onChange,
  onFocus,
  onBlur,
  height = 'md',
  width,
  error,
  value,
  name,
  type = 'text',
  id,
  ...rest
}: IProps): ReactElement {
  const inputClass = cn(
    {
      input: true,
      [`input--right-block-${height}`]: rightBlock && height,
      'input--error': error
    },
    className
  );
  const rightBlockClass = cn({
    'input__right-block': true,
    [`input__right-block--${height}`]: rightBlock && height
  });

  return (
    <UiSize width={width} height={height}>
      <div className={inputClass}>
        <input
          autoComplete={type === 'password' ? 'new-password' : 'off'}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name}
          type={type}
          id={id}
          {...rest}
        />

        {rightBlock && <div className={rightBlockClass}>{rightBlock}</div>}
      </div>
    </UiSize>
  );
}
