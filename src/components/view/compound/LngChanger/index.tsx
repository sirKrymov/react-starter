import React, { ReactElement, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { CountryFlagSelect } from 'components/view/atoms/CountryFlagSelect';

import { getCorrectLng } from 'i18n/getCorrectLng';

function LngChangerBase(): ReactElement {
  const { i18n } = useTranslation();

  function changeLanguage(lng: string): void {
    i18n.changeLanguage(lng);
  }

  function selectHandler(country: string): void {
    const correctLng = getCorrectLng(country, 'en');

    changeLanguage(correctLng);
  }

  return (
    <CountryFlagSelect
      countries={['GB', 'DE']}
      onSelect={selectHandler}
      id="multi-language-select"
    />
  );
}

export const LngChanger = memo(LngChangerBase);
