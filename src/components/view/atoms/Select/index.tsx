// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import ReactSelect, { OptionsType, ValueType } from 'react-select';
import cn from 'classnames';

import { UiSize } from 'components/view/atoms/UiSize';

import './styles.scss';

import { SelectOptionType } from 'types/components.interface';

interface IProps {
  getOptionValue?(option: SelectOptionType): string;
  getOptionLabel?(option: SelectOptionType): string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onChange(option: ValueType<SelectOptionType>): void;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  error?: boolean;
  value: ValueType<SelectOptionType>;
  list: OptionsType<SelectOptionType>;
  id: string;
}

export function Select({
  getOptionValue,
  getOptionLabel,
  placeholder,
  className,
  disabled,
  onChange,
  height = 'md',
  error,
  value,
  width,
  list,
  id
}: IProps): ReactElement {
  const selectWrapperClass = cn(
    {
      'select-wrapper': true,
      'select-wrapper--disabled': disabled,
      'select-wrapper--error': error
    },
    className
  );

  return (
    <UiSize width={width} height={height}>
      <ReactSelect
        classNamePrefix="select"
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        isSearchable={!disabled}
        placeholder={placeholder}
        className={selectWrapperClass}
        onChange={onChange}
        options={list}
        value={value}
        id={id}
      />
    </UiSize>
  );
}
