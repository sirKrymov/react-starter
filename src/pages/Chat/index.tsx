// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { ContentLimiter } from 'components/view/layouts/ContentLimiter';
import { ChatScreen } from 'components/screens/Chat';

export function ChatPage(): ReactElement {
  return (
    <ContentLimiter>
      <ChatScreen />
    </ContentLimiter>
  );
}
