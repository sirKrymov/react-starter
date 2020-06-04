import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { Checkbox } from '../Checkbox';

describe('<Switch> atom component', () => {
  const handleChange = sinon.spy();
  const handleClick = sinon.spy();
  const chkID = 'checkboxID';

  let shallowComponent: ShallowWrapper;

  const createComponent = (props?: any) => {
    shallowComponent = shallow(
      <Checkbox
        id={chkID}
        name="checkbox"
        value={false}
        onChange={handleChange}
        {...props}
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

  describe('WHEN the component have disabled status', () => {
    it('AND it should disable switch slider if it contains disabled props', () => {
      createComponent({ disabled: true });

      expect(shallowComponent.find('#' + chkID).props().disabled).toBe(true);
      expect(shallowComponent.find('div.checkbox--disabled')).toHaveLength(1);
      shallowComponent.find('#' + chkID).simulate('click');
      handleClick.calledOnceWith(undefined);
    });
  });
});
