import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Logo } from '../Logo';

describe('<Logo> atom component', () => {
  let shallowComponent: ShallowWrapper;

  const createComponent = () => {
    shallowComponent = shallow(<Logo id="main-logo" />);
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent();
    });

    it('THEN it should render without crashing', () => {
      expect(shallowComponent.html()).not.toHaveLength(0);
    });

    it('THEN it should match snapshot', () => {
      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });
  });
});
