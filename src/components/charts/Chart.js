import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  componentDidMount() {
    console.log(this.state.chartData, 'chart');
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render(){
    return (
      <div className="chart">

        <Line
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true,
            title: {
              display: this.props.displayTitle,
              text: 'Total Practice Time',
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
