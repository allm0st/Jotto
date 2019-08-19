import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducers, middleware and initialState.
 * Globals: rootReducer.
 * @param {{}} initialState Initial state for store
 * @function storeFactory
 * @returns {Store} Redux store
*/
export const storeFactory = (initialState = {}) => {
  return createStore(rootReducer, initialState);
}

/**
 * Returns node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper.
 * @param {string} val Value of data-test attribute to search for.
 * @returns {ShallowWrapper} ShallowWrapper that wraps the found nodes.
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Util to check prop types in given component
 * @param {React.Component} component Component to check propTypes in
 * @param {{}} conformingProps props to validate
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};