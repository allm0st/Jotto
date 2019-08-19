import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}

describe('render', () => {
  describe('word has not been guessed', () => {
    it('renders without error', () => {

    });
    it('renders input box', () => {

    });
    it('renders submit button', () => {

    });
  });
  describe('word has been guessed', () => {
    it('renders without error', () => {});
    it("doesn't render input box", () => {});
    it("doesn't render submit button", () => {});
  });
});

describe('state update', () => {

});