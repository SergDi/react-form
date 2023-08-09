import React, { Component } from 'react';

class Select extends Component {
  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return <select />;
  }
}

export default Select;
