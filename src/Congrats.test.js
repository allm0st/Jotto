import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';

import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @param {{}} props Props specific to this setup
 * @returns {ShallowWrapper} ShallowWrapper of Congrats Component with given props
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

it('renders correctly', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

it("renders no text when 'success' prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

it("renders non-empty congrats message when 'success' prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
