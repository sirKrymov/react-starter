import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Select } from '../Select';

describe('<Select> atom component', () => {
  const handleChange = jest.fn();

  const checkList = [
    { label: 'Test 1', value: 1 },
    { label: 'Test 2', value: 2 }
  ];

  let shallowComponent: ShallowWrapper;

  const createComponent = () => {
    shallowComponent = shallow(
      <Select
        onChange={handleChange}
        value={null}
        list={checkList}
        id="check-select"
      />
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
