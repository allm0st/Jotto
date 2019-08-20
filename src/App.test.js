import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttr, storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('<App />', () => {
  const secretWord = 'party';
  const initialState = {
    secretWord,
    success: false,
    guessedWords: [
      {
        guessedWord: 'train',
        letterMatchCount: 3,
      },
    ],
  };
  let wrapper;
  beforeEach(() => {
    wrapper = setup(initialState);
  });
  it('renders without crashing', () => {
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
  });
  it("receives 'success'", () => {
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(false);
  });
  it("receives 'guessWords'", () => {
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(initialState.guessedWords);
  });
  it("receives 'secretWord'", () => {
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  it("has 'getSecretWord' as a function passed via props", () => {
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

it("'getSecretWord' runs on App mount", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    success: false,
    guessedWords: [],
    getSecretWord: getSecretWordMock,
  };
  // set up App component with 'getSecretWordMock' as the 'getSecretWord' prop
  const wrapper = shallow(<UnconnectedApp {...props} />);
  wrapper.instance().componentDidMount();
  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
