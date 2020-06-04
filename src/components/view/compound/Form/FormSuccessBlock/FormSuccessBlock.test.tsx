import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import { FormSuccessBlock } from '../FormSuccessBlock';

describe('<FormSuccessBlock> compound component', () => {
  let component: ReactTestRenderer;

  const createComponent = () => {
    component = renderer.create(
      <BrowserRouter>
        <FormSuccessBlock text="Success test" />
      </BrowserRouter>
    );
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent();
    });

    it('THEN it should render without crashing', () => {
      expect(component.toJSON()).toBeDefined();
    });

    it('THEN it should match snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
