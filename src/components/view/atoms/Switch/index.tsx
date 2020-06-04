// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ChangeEvent, ReactElement, CSSProperties } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  onChange(e: ChangeEvent<any>): void;
  defaultChecked?: boolean;
  className?: string;
  disabled?: boolean;
  styles?: CSSProperties;
  value: boolean;
  size?: 'sm' | 'md';
  name: string;
  id: string;
}

export function Switch({
  defaultChecked,
  className,
  onChange,
  disabled,
  styles,
  value,
  size = 'md',
  name,
  id
}: IProps): ReactElement {
  const switchClass = cn(
    {
      switch: true,
      [`switch--size-${size}`]: size,
      'switch--disabled': disabled
    },
    className
  );

  return (
    <div className={switchClass} style={styles}>
      <input
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        checked={value}
        type="checkbox"
        name={name}
        id={id}
      />

      <label className="switch__label" htmlFor={id}>
        <span className="switch__button" />
      </label>
    </div>
  );
}
