import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Typography } from '../Typography';
import { Textarea } from '../Textarea';

describe('<Textarea> atom component', () => {
  const handleChange = jest.fn();

  let shallowComponent: ShallowWrapper;

  const createComponent = ({
    onChange,
    value,
    ...rest
  }: Record<string, any>) => {
    shallowComponent = shallow(
      <Textarea
        onChange={onChange}
        value={value}
        name="textarea"
        id="check-textarea"
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
      const event = { target: { value: 'sometext' } };

      expect(shallowComponent.find('textarea').simulate('change', event));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenLastCalledWith(event);
    });
  });

  describe('WHEN the component have different props', () => {
    it('WHEN to component have length and empty value', () => {
      createComponent({ onChange: handleChange, value: '', length: 20 });

      expect(shallowComponent.find('div.textarea__length-block')).toHaveLength(
        1
      );
      expect(shallowComponent.find(Typography).prop('children')).toEqual([
        0,
        ' / ',
        20
      ]);
    });

    it('WHEN to component have length and value="check"', () => {
      createComponent({ onChange: handleChange, value: 'check', length: 20 });

      expect(shallowComponent.find(Typography).prop('children')).toEqual([
        5,
        ' / ',
        20
      ]);
    });
  });
});
