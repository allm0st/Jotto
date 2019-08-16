/**
 * Returns node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper.
 * @param {string} val Value of data-test attribute to search for.
 * @returns {ShallowWrapper} ShallowWrapper that wraps the found nodes.
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
