// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add components tests
import React, { ReactElement } from 'react';

import {
  IProps as IDatePickerProps,
  DatePicker
} from 'components/view/atoms/DatePicker';

import './styles.scss';

interface IProps {
  dateFrom(cb: any): ReactElement;
  dateTo(cb: any): ReactElement;
}

export function DatePeriod({ dateFrom, dateTo }: IProps): ReactElement {
  return (
    <div className="date-period">
      <div>
        {dateFrom((props: IDatePickerProps) => (
          <DatePicker {...props} />
        ))}
      </div>

      <div>
        {dateTo((props: IDatePickerProps) => (
          <DatePicker {...props} />
        ))}
      </div>
    </div>
  );
}
