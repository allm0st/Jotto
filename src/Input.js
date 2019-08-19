import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

export class Input extends PureComponent {
  render() {
    return (
      <div>
        <button />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(Input);