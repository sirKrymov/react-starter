import React from 'react';

import { IoMdCloseCircle } from 'react-icons/io';

import { shallowToJson } from 'enzyme-to-json';

import renderer, { ReactTestRenderer } from 'react-test-renderer';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import moment from 'moment';

// import ReactDatePicker from 'react-datepicker';

// import sinon from 'sinon';

import { DatePicker } from '../DatePicker';

describe('<Input> atom component', () => {
  const getCustomDateFormatMock = jest.fn();
  const handleChange = jest.fn();
  const handleClear = jest.fn();

  let shallowComponent: ShallowWrapper;
  let mountComponent: any;
  let component: ReactTestRenderer;

  const createComponent = ({
    onChange,
    value,
    ...rest
  }: Record<string, any>) => {
    component = renderer.create(
      <DatePicker
        onChange={onChange}
        value={value}
        name="date-picker"
        id="check-datepicker"
        {...rest}
      />
    );
  };

  const createMountComponent = ({
    onChange,
    value,
    ...rest
  }: Record<string, any>) => {
    mountComponent = mount(
      <DatePicker
        onChange={onChange}
        value={value}
        name="date-picker"
        id="check-datepicker"
        {...rest}
      />
    );
  };

  const createShallowComponent = ({
    onChange,
    value,
    ...rest
  }: Record<string, any>) => {
    shallowComponent = shallow(
      <DatePicker
        onChange={onChange}
        value={value}
        name="date-picker"
        id="check-datepicker"
        {...rest}
      />
    );
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent({ onChange: handleChange, value: '' });
    });

    it('THEN it should render without crashing', () => {
      expect(component.toJSON()).toBeDefined();
    });

    it('THEN it should match snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('WHEN the component have different props', () => {
    it('THEN it should fires on change correctly', () => {
      createMountComponent({ onChange: handleChange, value: '' });

      const event = { target: { value: moment('2018-01-22') } };

      expect(mountComponent.find('input').simulate('change', event));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith('2018-01-22T00:00:00+02:00');
    });

    it('THEN it should render date input correctly with date value', () => {
      createMountComponent({ onChange: handleChange, value: '2018-01-22' });

      expect(mountComponent.find('input').prop('value')).toEqual('2018-01-22');
    });

    it('THEN it should render clear icon and logic', () => {
      createShallowComponent({
        onChange: handleChange,
        onClear: handleClear,
        value: '2018-01-22'
      });

      expect(shallowComponent.find(IoMdCloseCircle)).toBeDefined();
    });

    it('THEN it should custom format date value', () => {
      createShallowComponent({
        getCustomDateFormat: getCustomDateFormatMock,
        onChange: handleChange,
        value: '2018-01-22'
      });

      // getCustomDateFormatMock.mockReturnValue('2018/01/22');

      // getCustomDateFormatMock();

      // expect(handleChange).toHaveBeenCalledWith('2018/01/22');
    });

    it('THEN it should match snapshot', () => {
      createShallowComponent({
        getCustomDateFormat: getCustomDateFormatMock,
        onChange: handleChange,
        value: '2018-01-22'
      });

      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });
  });
});
