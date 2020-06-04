// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add component tests
import React, { ReactElement } from 'react';

import { AccountInfoContainer } from 'components/containers/AccountInfo';
import { ContentLimiter } from 'components/view/layouts/ContentLimiter';
import { LngChanger } from 'components/view/compound/LngChanger';
import { Logo } from 'components/view/atoms/Logo';

import './styles.scss';

export function DefaultHeader(): ReactElement {
  return (
    <header className="default-header">
      <ContentLimiter>
        <div className="default-header__content">
          <Logo id="default-logo" />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LngChanger />

            <AccountInfoContainer />
          </div>
        </div>
      </ContentLimiter>
    </header>
  );
}
