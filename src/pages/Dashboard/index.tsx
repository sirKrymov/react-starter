// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { DefaultTemplate } from 'components/view/templates/Default';
import { DashboardScreen } from 'components/screens/Dashboard';
import { ContentLimiter } from 'components/view/layouts/ContentLimiter';
import { Link } from 'components/view/atoms/Link';

import urls from 'constants/urls';

export function DashboardPage(): ReactElement {
  return (
    <DefaultTemplate>
      <ContentLimiter>
        <Link to={urls.main.weather} id="weather-page-link">
          Weather
        </Link>

        <DashboardScreen />
      </ContentLimiter>
    </DefaultTemplate>
  );
}
