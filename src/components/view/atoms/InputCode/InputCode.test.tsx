import React from 'react';

import renderer, { ReactTestRenderer } from 'react-test-renderer';
import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { InputCode } from '../InputCode';

describe('<InputCode> compound component', () => {
  const handleChange = jest.fn();

  let component: ReactTestRenderer;
  let shallowComponent: ShallowWrapper;

  const createComponent = () => {
    component = renderer.create(
      <InputCode onChange={handleChange} value="" id="check-input-phone" />
    );
  };

  const createShallowComponent = () => {
    shallowComponent = shallow(
      <InputCode onChange={handleChange} value="" id="check-input-phone" />
    );
  };

  describe('WHEN the component loads', () => {
    it('THEN it should render without crashing', () => {
      createComponent();
      expect(component.toJSON()).toBeDefined();
    });

    it('THEN it should match snapshot', () => {
      createShallowComponent();
      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });
  });
});
