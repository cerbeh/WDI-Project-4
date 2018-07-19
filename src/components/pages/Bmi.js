import React, { Component } from 'react';
import Range from '../common/BmiRange';
import Output from '../common/BmiOutput';

import Auth from '../../lib/Auth';
import axios from 'axios';

class Bmi extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => {

        const bmi = this.setBmi(res.data.weight, res.data.height);
        console.log(bmi);
        this.setState({
          height: res.data.height,
          weight: res.data.weight,
          bmi: bmi,
          bmiClass: this.getBmiClass(bmi)
        });
      });
  }

  heightChange = (height) => {
    this.setState({ height: height}, this.setBmi );
  }

  weightChange = (weight) => {
    this.setState({ weight: weight }, this.setBmi );
  }

  getBmi = (weight, height) => ((weight / height / height) * 10000).toFixed(2);

  setBmi = (weight, height) => {
    if (this.state.height) {
      const bmi = this.getBmi(this.state.weight, this.state.height);
      this.setState({ bmi, bmiClass: this.getBmiClass(bmi) });
    } else {
      return this.getBmi(weight, height);
    }
  }

  getBmiClass = (bmi) => {
    if(bmi < 18.5) return 'Underweight';
    if(bmi >= 18.5 && bmi <= 24.9) return 'Normal';
    if(bmi >= 25 && bmi <= 29.9) return 'Overweight';
    if(bmi >= 30) return 'Obese 😡';
  }

  render() {
    return (
      <div className="hero">
        <div className="bmi container">
          <h1 className="title text-is-centered">BMI Calculator</h1>
          <form>
            <div>
              <label>Height</label>
              { this.state.height && <Range
                value={this.state.height}
                onChange={this.heightChange} />}
            </div>
            <div>
              <label>Weight</label>
              { this.state.weight && <Range
                value={this.state.weight}
                onChange={this.weightChange} />}
            </div>
          </form>
          <Output data={this.state}/>
        </div>
      </div>
    );
  }
}

export default Bmi;
