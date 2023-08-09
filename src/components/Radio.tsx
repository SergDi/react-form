import React, { Component } from 'react';

const formValue = {
  name: 'delivery',
  values: ['NP', 'AdressNP', 'self delivery'],
};

class Radio extends Component {
  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.onChangeValue.bind(this)}>
        {formValue.values.map((item, index) => {
          return (
            <>
              <label> {item} </label>
              <input type="radio" value={item} name={formValue.name} />
            </>
          );
        })}
      </div>
    );
  }
}

export default Radio;
