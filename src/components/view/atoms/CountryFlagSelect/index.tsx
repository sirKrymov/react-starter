// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import cn from 'classnames';

import ReactFlagsSelect from 'react-flags-select';

import './styles.scss';

interface IProps {
  onSelect(country: string): void;
  defaultCountry?: string;
  customConfig?: Record<string, any>;
  countries?: string[];
  className?: string;
  id: string;
}

export function CountryFlagSelect({
  defaultCountry = 'GB',
  customConfig,
  className,
  countries = ['GB'],
  onSelect,
  id
}: IProps): ReactElement {
  const countryFlagSelectClass = cn(
    {
      'country-flag-select': true
    },
    className
  );

  return (
    <div className={countryFlagSelectClass} id={id}>
      <ReactFlagsSelect
        showSelectedLabel={false}
        showOptionLabel={false}
        defaultCountry={defaultCountry}
        countries={countries}
        onSelect={onSelect}
        {...customConfig}
      />
    </div>
  );
}
