// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import ReactPhoneInput from 'react-phone-input-2';
import cn from 'classnames';

import { UiSize } from 'components/view/atoms/UiSize';

import './styles.scss';

interface IProps {
  onChange(value: string): void;
  className?: string;
  disabled?: boolean;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  value: string;
  id: string;
}

export function InputPhone({
  className,
  disabled,
  onChange,
  height = 'md',
  width,
  value,
  id
}: IProps): ReactElement {
  const inputPhoneClass = cn(
    {
      'input-phone': true
    },
    className
  );

  return (
    <UiSize width={width} height={height}>
      <div className={inputPhoneClass} id={id}>
        <ReactPhoneInput
          // countryCodeEditable={false}
          inputProps={{ autoComplete: 'off' }}
          onChange={onChange}
          disabled={disabled}
          // country="in"
          value={value}
        />
      </div>
    </UiSize>
  );
}
