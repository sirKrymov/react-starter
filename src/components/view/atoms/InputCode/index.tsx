// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ChangeEvent, ReactElement } from 'react';

import ReactCodeInput from 'react-code-input';
import cn from 'classnames';

import './styles.scss';

interface IProps {
  onChange(e: ChangeEvent<any>): void;
  className?: string;
  disabled?: boolean;
  value: string;
  id: string;
}

export function InputCode({
  className,
  onChange,
  disabled,
  value,
  id
}: IProps): ReactElement {
  const inputCodeClass = cn(
    {
      'input-code': true
    },
    className
  );

  return (
    <div className={inputCodeClass}>
      <ReactCodeInput
        className="input-code__field"
        onChange={onChange}
        disabled={disabled}
        fields={4}
        value={value}
        type="number"
        id={id}
      />
    </div>
  );
}
