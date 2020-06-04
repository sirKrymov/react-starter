// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add components tests
import React, { ReactElement } from 'react';

import { IoIosStarOutline, IoIosStar } from 'react-icons/io';
import RatingComponent from 'react-rating';

import { ReactIcon } from 'components/view/atoms/ReactIcon';

import './styles.scss';

interface IProps {
  onChange(number: number): void;
  value: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

export function Rating({ onChange, value, size }: IProps): ReactElement {
  return (
    <div className="rating">
      <RatingComponent
        initialRating={value}
        emptySymbol={
          <ReactIcon size={size}>
            <IoIosStarOutline />
          </ReactIcon>
        }
        fullSymbol={
          <ReactIcon>
            <IoIosStar size={size} />
          </ReactIcon>
        }
        onChange={onChange}
      />
    </div>
  );
}
