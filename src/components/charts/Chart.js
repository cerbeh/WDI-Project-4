import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';

class Chart extends React.Component{
  constructor(){
    super();
    this.state={
      chartData: {
        labels: ['kata', 'keiko','shiai'],
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
