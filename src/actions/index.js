import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  GUESS_WORD: 'GUESS_WORD',
  CORRECT_GUESS: 'CORRECT_GUESS',
};

export const guessWord = guessedWord => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount },
  });

  if (guessedWord === secretWord) {
    dispatch({ type: actionTypes.CORRECT_GUESS });
  }
};
