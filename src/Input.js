import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class Input extends PureComponent {
  render() {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="Enter guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
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
)(Input);
