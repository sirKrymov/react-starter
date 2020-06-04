// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { ContentLimiter } from 'components/view/layouts/ContentLimiter';
import { CardWrapper } from 'components/view/layouts/CardWrapper';
import { ProgressBar } from 'components/view/atoms/ProgressBar';
import { ExampleForm } from './ExampleForm';
import { TabsHeader } from './TabsHeader';
import { GoogleMap } from 'components/view/compound/GoogleMap';
import { TabsRp } from 'components/logic/renderProp/TabsRp';
import { Avatar } from 'components/view/atoms/Avatar';
import { Anim } from 'components/view/atoms/Anim';

export function ComponentsUiPage(): ReactElement {
  return (
    <ContentLimiter>
      <div style={{ padding: '24px' }}>
        <TabsRp
          header={TabsHeader}
          tabs={[
            {
              children: () => (
                <>
                  <br />
                  <ExampleForm onSubmit={values => console.log(values)} />
                  <br />
                </>
              ),
              label: 'Example form',
              name: 'exampleForm'
            },
            {
              children: () => (
                <>
                  <br />
                  <Avatar id="avatar" />
                  <br />
                  <Avatar
                    withBorder
                    onClick={() => null}
                    id="avatar-click-border"
                  />
                  <br />
                  <CardWrapper>Children</CardWrapper>
                  <br />
                  <Anim>
                    <CardWrapper>Children</CardWrapper>
                  </Anim>
                  <br />
                  <ProgressBar completed={2} />
                  <br />
                </>
              ),
              label: 'Other components',
              name: 'otherComponents'
            },
            {
              children: () => (
                <>
                  <br />
                  <GoogleMap />
                  <br />
                </>
              ),
              label: 'Google map',
              name: 'googleMap'
            }
          ]}
        />
      </div>
    </ContentLimiter>
  );
}
