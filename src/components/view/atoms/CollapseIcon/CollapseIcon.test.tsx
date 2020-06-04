import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { CollapseIcon } from '../CollapseIcon';

describe('<CollapseIcon> atom component', () => {
  const handleClick = sinon.spy();
  let shallowComponent: ShallowWrapper;

  const createComponent = (props?: Record<string, any>) => {
    shallowComponent = shallow(<CollapseIcon id="collapse-icon" {...props} />);
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

  describe('WHEN the component have additional properties', () => {
    it('WHEN it should be handle click logic', () => {
      createComponent({ onClick: handleClick });

      expect(shallowComponent.find('div.collapse-icon')).toHaveLength(1);
      shallowComponent.find('div').simulate('click');
      expect(handleClick).toHaveProperty('callCount', 1);
    });

    it('WHEN it should be with open property', () => {
      createComponent({ open: true });

      expect(shallowComponent.find('div.collapse-icon--open')).toHaveLength(1);
    });
  });
});
