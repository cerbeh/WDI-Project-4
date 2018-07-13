import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({data}) => {

  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  };

  return (
    <div className="chart">

      <Pie
        data={data}
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
          },
          options: {
            scales: {
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        }}
      />
    </div>
  );
};


export default PieChart;
