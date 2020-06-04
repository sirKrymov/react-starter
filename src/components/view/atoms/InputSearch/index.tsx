// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ChangeEvent, ReactElement } from 'react';

import { IoMdCloseCircle, IoIosSearch } from 'react-icons/io';
import cn from 'classnames';

import { ReactIcon } from 'components/view/atoms/ReactIcon';
import { UiSize } from 'components/view/atoms/UiSize';

import './styles.scss';

interface IProps {
  onChange(e: ChangeEvent<any>): void;
  onIconClick?(): void;
  placeholder?: string;
  className?: string;
  onClear?(): void;
  height?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'content';
  value: string;
  name: string;
  id: string;
}

export function InputSearch({
  placeholder = 'Search...',
  onIconClick,
  className,
  onChange,
  onClear,
  height = 'md',
  width,
  value,
  name,
  id
}: IProps): ReactElement {
  const inputSearchClass = cn(
    {
      'input-search': true,
      [`input-search--icon-wrapper-${height}`]: height,
      [`input-search--clear-wrapper-${height}`]: height && onClear
    },
    className
  );

  const iconWrapperClass = cn({
    'input-search__icon-wrapper': true,
    [`input-search__icon-wrapper--${height}`]: height
  });

  const clearWrapperClass = cn({
    'input-search__clear-icon-wrapper': true,
    [`input-search__clear-icon-wrapper--${height}`]: height
  });

  return (
    <UiSize width={width} height={height}>
      <div className={inputSearchClass}>
        <div
          className={iconWrapperClass}
          onClick={onIconClick}
          style={{ ...(onIconClick && { cursor: 'pointer' }) }}
        >
          <ReactIcon>
            <IoIosSearch />
          </ReactIcon>
        </div>

        <input
          autoComplete="off"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type="text"
          name={name}
          id={id}
        />

        {value && onClear && (
          <div className={clearWrapperClass} onClick={onClear}>
            <ReactIcon size="md">
              <IoMdCloseCircle />
            </ReactIcon>
          </div>
        )}
      </div>
    </UiSize>
  );
}
