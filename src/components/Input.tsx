import React, { Component } from 'react';

class Input extends Component {
  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return <input type="text" />;
  }
}

export default Input;
