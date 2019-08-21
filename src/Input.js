import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends PureComponent {
  inputBox = React.createRef();

  submitGuessWord = e => {
    e.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessedWord.length) {
      this.props.guessWord(guessedWord);
      this.inputBox.current.value = '';
    }
  };

  render() {
    const content =
      this.props.success || this.props.gaveUp ? null : (
        <form className="form-inline">
          <input
            data-test="input-box"
            ref={this.inputBox}
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="Enter guess"
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            onClick={this.submitGuessWord}
            id="word-submit"
            type="submit"
          >
            Submit
          </button>
        </form>
      );
    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(
  mapStateToProps,
  { guessWord }
)(UnconnectedInput);
