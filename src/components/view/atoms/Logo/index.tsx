// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement, memo } from 'react';

import { krymovLogo } from 'constants/images';

import './styles.scss';

interface IProps {
  id: string;
}

function LogoBase({ id }: IProps): ReactElement {
  return (
    <div className="logo" id={id}>
      <img className="img-contain" src={krymovLogo} alt="logo" />
    </div>
  );
}

export const Logo = memo(LogoBase);
