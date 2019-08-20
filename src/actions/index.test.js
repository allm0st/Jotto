import moxios from 'moxios';
import { getSecretWord } from '.';
import { storeFactory } from '../../test/testUtils';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState().secretWord;
      expect(newState).toBe(secretWord);
    });
  });
});
