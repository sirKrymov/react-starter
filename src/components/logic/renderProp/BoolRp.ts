// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add component tests
import { ReactElement, useState } from 'react';

interface IProps {
  render(props: { boolValue: boolean; toggleBool(): void }): ReactElement;
  defaultvalue?: boolean;
}

export function BoolRp({ defaultvalue, render }: IProps): ReactElement {
  const [isTrue, setValue] = useState(defaultvalue || false);

  function toggleBool(): void {
    setValue(!isTrue);
  }

  return render({ boolValue: isTrue, toggleBool });
}
