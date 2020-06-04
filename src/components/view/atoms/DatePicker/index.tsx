// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { FocusEvent, ReactElement } from 'react';

import { IoMdCloseCircle, IoIosCalendar } from 'react-icons/io';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import cn from 'classnames';

import { ReactIcon } from 'components/view/atoms/ReactIcon';
import { UiSize } from 'components/view/atoms/UiSize';

import './styles.scss';

export interface IProps {
  getCustomDateFormat?(date: Date): string | any;
  onBlur?(e: FocusEvent<any>): void;
  onChange(date: string): void;
  customConfig?: Record<string, any>;
  placeholder?: string;
  className?: string;
  onClick?(): void;
  onClear?(): void;
  disabled?: boolean;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  error?: boolean;
  value?: string;
  name: string;
  id: string;
}

export function DatePicker({
  getCustomDateFormat,
  customConfig,
  placeholder,
  className,
  disabled,
  onChange,
  onClear,
  onBlur,
  height = 'md',
  width,
  error,
  value,
  name,
  id
}: IProps): ReactElement {
  const config = {
    dateFormat: 'yyyy-MM-dd',
    ...customConfig
  };

  function handleChange(date: Date): void {
    const modifiedDate = date
      ? !!getCustomDateFormat
        ? getCustomDateFormat(date)
        : moment(date).format()
      : '';

    onChange(modifiedDate);
  }

  const datePickerClass = cn(
    {
      'date-picker': true,
      [`date-picker--right-block-${height}`]: height,
      'date-picker--error': error
    },
    className
  );

  const rightBlockClass = cn({
    'input__right-block': true,
    [`input__right-block--${height}`]: height
  });

  return (
    <UiSize width={width} height={height}>
      <div className={datePickerClass} id={id}>
        <ReactDatePicker
          placeholderText={placeholder}
          showPopperArrow={false}
          onChange={handleChange}
          disabled={disabled}
          selected={(value && new Date(value)) || undefined}
          onBlur={onBlur}
          name={name}
          {...config}
        />

        <div className={rightBlockClass}>
          {value && onClear ? (
            <ReactIcon onClick={onClear} size="md">
              <IoMdCloseCircle />
            </ReactIcon>
          ) : (
            <ReactIcon>
              <IoIosCalendar />
            </ReactIcon>
          )}
        </div>
      </div>
    </UiSize>
  );
}
