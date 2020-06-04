import React from 'react';

import { jsxDecorator } from 'storybook-addon-jsx';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../Button';

import '../Button/styles.scss';

storiesOf('Button', module)
  .addDecorator(jsxDecorator)
  .add('Simple text', () => {
    return (
      <Button onClick={action('Clicked')} id="button">
        Hello Button
      </Button>
    );
  });
