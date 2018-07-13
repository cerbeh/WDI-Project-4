import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({data}) => {

  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  };

  data.labels.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });
  console.log(data.labels);

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
