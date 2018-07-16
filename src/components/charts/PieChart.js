import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({data}) => {

  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  };

  return (
    <div className="chart">

      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: true,
          title: {
            display: defaultProps.displayTitle,
            text: 'Time per Discipline',
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


export default DoughnutChart;
