import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { VisibilityIcon } from '../VisibilityIcon';
import { Input } from '../Input';

describe('<Input> atom component', () => {
  const handleChange = jest.fn();
  const handleClick = sinon.spy();

  let shallowComponent: ShallowWrapper;

  const createComponent = ({
    onChange,
    value,
    ...rest
  }: Record<string, any>) => {
    shallowComponent = shallow(
      <Input
        onChange={onChange}
        value={value}
        name="input"
        id="check-input"
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
      const event = { target: { value: 'input text' } };

      expect(shallowComponent.find('input').simulate('change', event));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenLastCalledWith(event);
    });
  });

  describe('WHEN the component have different props', () => {
    it('WHEN to component have rightContent', () => {
      createComponent({
        rightContent: (
          <VisibilityIcon
            onClick={handleClick}
            isVisible={false}
            id="password-visibility-icon"
          />
        )
      });

      expect(shallowComponent.find(VisibilityIcon)).toBeDefined();
    });
  });
});
