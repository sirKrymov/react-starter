import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { VisibilityIcon } from '../VisibilityIcon';

describe('<VisibilityIcon> atom component', () => {
  const handleClick = sinon.spy();

  let shallowComponent: ShallowWrapper;

  const createComponent = ({ isVisible, onClick }: Record<string, any>) => {
    shallowComponent = shallow(
      <VisibilityIcon
        isVisible={isVisible}
        onClick={onClick}
        id="check-visibility-icon"
      />
    );
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent({ isVisible: false, onClick: handleClick });
    });

    it('THEN it should render without crashing', () => {
      expect(shallowComponent.html()).not.toHaveLength(0);
    });

    it('THEN it should match unvisible snapshot', () => {
      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });
  });

  describe('WHEN the component loaded and have been clicked', () => {
    beforeEach(() => {
      createComponent({ isVisible: true, onClick: handleClick });
    });

    it('AND it should handle click  logic', () => {
      shallowComponent.find('div.visibility-icon').simulate('click');
      expect(handleClick).toHaveProperty('callCount', 1);
    });

    it('THEN it should match visible snapshot', () => {
      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });
  });
});
