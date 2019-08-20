import React, { Component } from 'react';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import Input from './Input';

class App extends Component {
  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto!</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ secretWord, success, guessedWords }) => ({
  secretWord,
  success,
  guessedWords,
});

export default connect(
  mapStateToProps,
  { getSecretWord }
)(App);
