import React from 'react';

import renderer, { ReactTestRenderer } from 'react-test-renderer';

import App from '../App';

describe('<App> component', () => {
  let component: ReactTestRenderer;

  const createComponent = () => {
    component = renderer.create(<App />);
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
