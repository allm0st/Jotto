import React from 'react';
import PropTypes from 'prop-types';

export default function GuessedWords({ guessedWords }) {
  let content;
  if (!guessedWords.length) {
    content = <div data-test="guess-instructions">Try to guess the word!</div>;
  }
  return <div data-test="component-guessed-words">{content}</div>;
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
