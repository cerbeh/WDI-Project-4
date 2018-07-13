import React, { Component } from 'react';
import Range from '../common/BmiRange';
import Output from '../common/BmiOutput';

class Bmi extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 157,
      weight: 51,
      bmi: 20.69,
      bmiClass: 'Normal'
    };
  }

  heightChange = (height) => {
    this.setState({ height: height}, this.setBmi );
  }

  weightChange = (weight) => {
    this.setState({ weight: weight }, this.setBmi );
  }

  setBmi = () => {
    const bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
    this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) });
  }

  getBmiClass = (bmi) => {
    if(bmi < 18.5) return 'Underweight';
    if(bmi >= 18.5 && bmi <= 24.9) return 'Normal';
    if(bmi >= 25 && bmi <= 29.9) return 'Overweight';
    if(bmi >= 30) return 'Obese';
  }

  render() {
    return (
      <div className="hero">
        <div className="bmi container">
          <h1 className="title text-is-centered">BMI Calculator</h1>
          <form>
            <div>
              <label>Height</label>
              <Range
                value={this.state.height}
                onChange={this.heightChange} />
            </div>
            <div>
              <label>Weight</label>
              <Range
                value={this.state.weight}
                onChange={this.weightChange} />
            </div>
          </form>
          <Output data={this.state}/>
        </div>
      </div>
    );
  }
}

export default Bmi;
