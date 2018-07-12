import React from 'react';
import { Line } from 'react-chartjs-2';

const TestChart = ({chartData}) => {

  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  };

  return (
    <div className="chart">

      <Line
        data={chartData}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: true,
          title: {
            display: defaultProps.displayTitle,
            text: 'Total Practice Time',
            fontSize: 25
          },
          legend: {
            display: defaultProps.displayLegend,
            position: defaultProps.legendPosition
          }
        }}
      />
    </div>
  );
};


export default TestChart;
