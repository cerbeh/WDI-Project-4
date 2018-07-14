import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({data}) => {


  // const labels = data.discipline.map( type => type.name);
  // const data = {
//}

  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  };

  console.log(data, 'piechart data log');

  return (
    <div className="chart">

      <Doughnut
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


export default DoughnutChart;
