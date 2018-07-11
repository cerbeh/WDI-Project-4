import React from 'react';
import Chart from 'chart.js';

class LineChart extends React.Component {

  state = {
    user: {},
    session: {}
  }
  //
  componentDidMount = () => {
    this.props.sessions.forEach(session => {
      if(this.props.id === session._id) {
        this.setState({ session: session });
      }
    });
  }
  //
  // componentDidUpdate = () => {
  //   const arrayData = [this.state.session.title, this.state.session.discipline, this.state.session.date, this.state.session.duration, this.state.session.notes];
  //

  render() {
    const ctx = document.getElementById('lineChart');
    let lineChart = new Chart(ctx, { // eslint-disable-line
      type: 'line',
      data: {
        labels: [ '2018-07-01', '2018-07-02','2018-07-03','2018-07-04','2018-07-05','2018-07-06','2018-07-07'],
        datasets: [
          {
            label: 'Kata',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            data: [20, 30, 80, 20, 40, 10, 60]
          }, {
            label: 'Keiko',
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
            data: [60, 10, 40, 30, 80, 30, 20]
          },
          {
            label: 'Shiai',
            data: [
              120,60,30,45,50,25,20
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.6)'
          }
        ]
      }
    });
    return(
      <div>
        <canvas id="lineChart" height="400" width="400"></canvas>
      </div>
    );
  }
}

export default LineChart;
