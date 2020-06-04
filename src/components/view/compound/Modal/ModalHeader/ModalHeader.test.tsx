import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { ModalHeader } from '../ModalHeader';
import { ReactIcon } from '../../../atoms/ReactIcon';

describe('<ModalHeader> compound component', () => {
  const handleClick = sinon.spy();

  let shallowComponent: ShallowWrapper;

  const createComponent = (props?: Record<string, any>) => {
    shallowComponent = shallow(<ModalHeader {...props} />);
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent({ title: 'Check title', onClose: handleClick });
    });

    it('THEN it should render without crashing', () => {
      expect(shallowComponent.html()).not.toHaveLength(0);
    });

    it('THEN it should match snapshot', () => {
      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });

    it('AND it should handle initial button logic', () => {
      shallowComponent.find(ReactIcon).simulate('click');
      expect(handleClick).toHaveProperty('callCount', 1);
    });
  });

  describe('WHEN the component don`t have title and onClose properties', () => {
    it('THEN it should`t render', () => {
      createComponent();
      expect(shallowComponent.html()).toBe(null);
    });
  });
});
