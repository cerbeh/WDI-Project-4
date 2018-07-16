import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({data}) => {

  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  };

  return (
    <div className="chart">

      <Line
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
                  //Boolean- whether the scale should start at zero, or an order of magnitude from the lowest value
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


export default Chart;
