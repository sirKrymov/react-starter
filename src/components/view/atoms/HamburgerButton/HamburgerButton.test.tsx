import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { HamburgerButton } from '../HamburgerButton';

describe('<HamburgerButton> atom component', () => {
  const handleClick = sinon.spy();
  let shallowComponent: ShallowWrapper;

  const createComponent = (props?: Record<string, any>) => {
    shallowComponent = shallow(
      <HamburgerButton onClick={handleClick} id="hamburger" {...props} />
    );
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

    it('AND it should handle initial button logic', () => {
      shallowComponent.find('button').simulate('click');
      expect(handleClick).toHaveProperty('callCount', 1);
    });
  });

  describe('WHEN the component have additional properties', () => {
    it('AND it should handle initial button logic', () => {
      createComponent({ open: true });

      expect(shallowComponent.find('button.hamburger-btn--open')).toHaveLength(
        1
      );
    });

    it('AND it should handle initial button logic', () => {
      createComponent({ open: false });

      expect(shallowComponent.find('button.hamburger-btn--open')).toHaveLength(
        0
      );
    });

    it('AND it should handle click logic', () => {
      createComponent({ mirror: true, open: true });

      expect(
        shallowComponent.find('button.hamburger-btn--mirror-open')
      ).toHaveLength(1);
    });
  });
});
