import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { InputSearch } from '../InputSearch';

describe('<InputSearch> atom component', () => {
  const handleClick = sinon.spy();
  const handleChange = jest.fn();

  let shallowComponent: ShallowWrapper;

  const createComponent = ({
    onChange,
    value,
    ...rest
  }: Record<string, any>) => {
    shallowComponent = shallow(
      <InputSearch
        onChange={onChange}
        value={value}
        name="search"
        id="check-search"
        {...rest}
      />
    );
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent({ onChange: handleChange, value: '' });
    });

    it('THEN it should render without crashing', () => {
      expect(shallowComponent.html()).not.toHaveLength(0);
    });

    it('THEN it should match snapshot', () => {
      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });

    it('THEN it should fires on change correctly', () => {
      const event = { target: { value: 'search text' } };

      expect(shallowComponent.find('input').simulate('change', event));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenLastCalledWith(event);
    });
  });

  describe('WHEN the component have different props', () => {
    it('WHEN to component have length and value="search"', () => {
      createComponent({
        onChange: handleChange,
        value: 'search',
        onClear: handleClick
      });

      expect(
        shallowComponent.find('div.input-search__clear-icon-wrapper')
      ).toHaveLength(1);
    });

    it('WHEN to component have onIconClick', () => {
      createComponent({
        onChange: handleChange,
        value: 'search',
        onIconClick: true
      });

      expect(
        shallowComponent.find('div.input-search__icon-wrapper').prop('style')
      ).toEqual({ cursor: 'pointer' });
    });
  });
});
