import React from 'react';

import renderer, { ReactTestRenderer } from 'react-test-renderer';

import { InputPhone } from '../InputPhone';

describe('<InputPhone> compound component', () => {
  const handleChange = jest.fn();

  let component: ReactTestRenderer;

  const createComponent = () => {
    component = renderer.create(
      <InputPhone onChange={handleChange} value="" id="check-input-phone" />
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
