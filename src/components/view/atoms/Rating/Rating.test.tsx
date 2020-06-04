import React from 'react';

import renderer, { ReactTestRenderer } from 'react-test-renderer';
import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Rating } from '../Rating';

describe('<Rating> compound component', () => {
  const handleChange = jest.fn();

  let component: ReactTestRenderer;
  let shallowComponent: ShallowWrapper;

  const createComponent = () => {
    component = renderer.create(<Rating onChange={handleChange} value={0} />);
  };

  const createShallowComponent = () => {
    shallowComponent = shallow(<Rating onChange={handleChange} value={4} />);
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
