import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import { checkProps, findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @param {{}} props Props specific to this setup
 * @returns {ShallowWrapper} ShallowWrapper of Congrats Component with given props
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

it('renders correctly', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

it("renders no text when 'success' prop is false", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

it("renders non-empty congrats message when 'success' prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

it('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
