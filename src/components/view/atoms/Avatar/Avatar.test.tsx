import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { Avatar } from '../Avatar';

describe('<Avatar> atom component', () => {
  const handleClick = sinon.spy();
  let shallowComponent: ShallowWrapper;

  const createComponent = (props?: Record<string, any>) => {
    shallowComponent = shallow(<Avatar id="avatar" {...props} />);
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
    it('AND it should handle click logic', () => {
      createComponent({ onClick: handleClick });

      expect(shallowComponent.find('div.avatar--with-click')).toHaveLength(1);
      shallowComponent.find('div').simulate('click');
      expect(handleClick).toHaveProperty('callCount', 1);
    });

    it('AND it should handle size number logic', () => {
      createComponent({ size: 20 });

      expect(shallowComponent.find('#avatar').prop('style')).toHaveProperty(
        'width',
        20
      );
      expect(shallowComponent.find('#avatar').prop('style')).toHaveProperty(
        'height',
        20
      );
    });
  });
});
