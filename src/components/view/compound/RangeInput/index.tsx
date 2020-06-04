// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add components tests
import React, { ReactElement } from 'react';

import { Input, IProps as IInputProps } from 'components/view/atoms/Input';

import './styles.scss';

interface IProps {
  from(cb: any): ReactElement;
  to(cb: any): ReactElement;
}

export function DatePeriod({ from, to }: IProps): ReactElement {
  return (
    <div className="range-input">
      <div>
        {from((props: IInputProps) => (
          <Input {...props} />
        ))}
      </div>

      <div>
        {to((props: IInputProps) => (
          <Input {...props} />
        ))}
      </div>
    </div>
  );
}
