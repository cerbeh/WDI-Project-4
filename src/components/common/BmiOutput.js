import React, { Component } from 'react';

class BmiOutput extends Component {
  // convert cm into ft
  toFeet = (num) => {
    const realFeet = ((num * 0.393700) / 12);
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return `${feet}'${inches}`;
  }
  // convert kg to lbs
  toLbs = (num) => {
    const nearExact = num/0.45359237;
    const lbs = Math.floor(nearExact);
    return lbs;
  }

  render() {
    const height = this.props.data.height;
    const weight = this.props.data.weight;
    const bmi = this.props.data.bmi;
    const bmiClass = this.props.data.bmiClass;
    // conversions
    const heightFeet = this.toFeet(height);
    const pounds = this.toLbs(weight);

    return (
      <div className="output">
        <h3>
          {height}cm
          <span className="imperial"> {heightFeet}</span>
        </h3>
        <h3>
          {weight}kg
          <span className="imperial"> {pounds}lbs</span>
        </h3>
        <h3>{bmi}</h3>
        <h3>{bmiClass}</h3>
      </div>
    );
  }
}

export default BmiOutput;
