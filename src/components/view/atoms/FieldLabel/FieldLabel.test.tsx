import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { VisibilityIcon } from '../VisibilityIcon';
import { Typography } from '../Typography';
import { FieldLabel } from '../FieldLabel';
import { Textarea } from '../Textarea';

describe('<InputSearch> atom component', () => {
  const handleClick = sinon.spy();
  const handleChange = jest.fn();

  let shallowComponent: ShallowWrapper;

  const createComponent = (props?: Record<string, any>) => {
    shallowComponent = shallow(
      <FieldLabel {...props}>
        <Textarea
          onChange={handleChange}
          value=""
          name="textarea"
          id="check-textarea"
        />
      </FieldLabel>
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

  describe('WHEN the component have different props', () => {
    it('WHEN to component have withError and status', () => {
      createComponent({
        withError: true,
        status: {
          error: true,
          des: 'Error text'
        }
      });

      expect(shallowComponent.find(Typography).prop('children')).toEqual(
        'Error text'
      );
    });

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
