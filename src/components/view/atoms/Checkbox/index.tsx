// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ChangeEvent, ReactElement } from 'react';

import { IoMdCheckmark } from 'react-icons/io';
import cn from 'classnames';

import './styles.scss';

interface IProps {
  defaultChecked?: boolean;
  onChange(e: ChangeEvent<any>): void;
  className?: string;
  disabled?: boolean;
  value: boolean;
  size?: string;
  name: string;
  id: string;
}

export function Checkbox({
  defaultChecked,
  className,
  onChange,
  disabled,
  value,
  size,
  name,
  id
}: IProps): ReactElement {
  const checkboxClass = cn(
    {
      checkbox: true,
      [`checkbox--size-${size}`]: size,
      'checkbox--disabled': disabled
    },
    className
  );

  return (
    <div className={checkboxClass}>
      <input
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        checked={value}
        type="checkbox"
        name={name}
        id={id}
      />

      <label className="checkbox__label" htmlFor={id}>
        <span className="checkbox__icon">
          <IoMdCheckmark />
        </span>
      </label>
    </div>
  );
}
