import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component{
  constructor(){
    super();
    this.state={
      daysDisplayed: null,
      mode: 'all-time',
      chartData: {
        labels: ['2018-07-01', '2018-07-02','2018-07-03','2018-07-04','2018-07-05','2018-07-06','2018-07-07'],
        datasets: [
          {
            label: 'Duration',
            data: [
              60,
              20,
              15,
              25,
              40,
              5
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ]
          }
        ]
      }
    };
  }


  render(){
    return(
      <div className="container">
        <Line
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title: {
              display: this.props.displayTi,
              text: 'Amount practiced',
              fontSize: 25
            },
            legend: {
              display: true
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
