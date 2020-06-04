import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { IoMdCloseCircle } from 'react-icons/io';
import { shallowToJson } from 'enzyme-to-json';

import { ReactIcon } from '../ReactIcon';

describe('<ReactIcon> atom component', () => {
  let shallowComponent: ShallowWrapper;

  const createComponent = () => {
    shallowComponent = shallow(
      <ReactIcon id="check-icon">
        <IoMdCloseCircle />
      </ReactIcon>
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
  });
});
