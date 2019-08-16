import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWord component
 * @param {{}} props Props specific to this setup
 * @returns {ShallowWrapper} ShallowWrapper of GuessedWord Component with given props
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

it("doesn't throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  it('renders instructions to guess a word', () => {
    const instructionsText = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructionsText.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {});
