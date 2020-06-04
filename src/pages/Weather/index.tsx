// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { ContentLimiter } from 'components/view/layouts/ContentLimiter';
import { DefaultTemplate } from 'components/view/templates/Default';
import { WeatherScreen } from 'components/screens/Weather';

export function WeatherPage(): ReactElement {
  return (
    <DefaultTemplate>
      <ContentLimiter>
        <WeatherScreen />
      </ContentLimiter>
    </DefaultTemplate>
  );
}
