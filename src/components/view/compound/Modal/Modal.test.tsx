import React from 'react';

import ReactDOM from 'react-dom';

import renderer, { ReactTestRenderer } from 'react-test-renderer';

import { shallow, ShallowWrapper } from 'enzyme';

import { Modal } from '../Modal';

describe('<Modal> compound component', () => {
  ReactDOM.createPortal = (node: any) => node;

  let shallowComponent: ShallowWrapper;
  let component: ReactTestRenderer;

  const createComponent = ({ open, ...rest }: Record<string, any>) => {
    component = renderer.create(
      <Modal open={open} {...rest}>
        <div id="modal-children">Check modal test content</div>
      </Modal>
    );
  };

  const createShallowComponent = ({ open, ...rest }: Record<string, any>) => {
    shallowComponent = shallow(
      <Modal open={open} {...rest}>
        <div id="modal-children">Check modal test content</div>
      </Modal>
    );
  };

  describe('WHEN the component loads', () => {
    it('THEN it should render without crashing', () => {
      createComponent({ open: true });

      expect(component.toJSON()).toBeDefined();
    });

    it('THEN it should match snapshot', () => {
      createComponent({ open: true });

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('WHEN the component have property open=true', () => {
    it('THEN it should render the children', () => {
      createShallowComponent({ open: true });

      expect(shallowComponent.find('#modal-children')).toBeDefined();
    });

    it('should set overflow hidden on the body element', () => {
      const body = document.querySelector('body');

      if (body) {
        expect(body.hasAttribute('class')).toBeFalsy();

        createComponent({ open: true });

        setTimeout(() => {
          expect(body.hasAttribute('class')).toEqual('overflow-hidden');
        }, 250);
      }
    });
  });

  describe('WHEN the component have property open=false', () => {
    it('THEN it should`t render', () => {
      createComponent({ open: false });

      expect(component.toJSON()).toBe(null);
    });

    it('should unset overflow hidden on the body element', () => {
      const body = document.querySelector('body');

      createComponent({ open: false });

      if (body) {
        expect(body.hasAttribute('class')).toBeFalsy();
      }
    });
  });
});
