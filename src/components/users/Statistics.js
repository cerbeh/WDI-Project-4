import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Auth from '../../lib/Auth';
import Chart from '../charts/Chart';
import DoughnutChart from '../charts/PieChart';


class Statistics extends React.Component{

  constructor(){
    super();
    this.state={
      isHidden: true,
      errors: {},
      user: {}
    };
  }

  selectColour() {
    return _.sample([
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 99, 132, 0.6)',
      'rgba(128, 255, 0, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(200, 5, 173, 0.6)',
      'rgba(200, 105, 92, 0.6)',
      'rgba(250, 85, 3, 0.6)',
      'rgba(250, 5, 103, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(25, 2, 122, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(153, 252, 255, 0.6)',
      'rgba(85, 165, 13, 0.6)',
      'rgba(155, 27, 7, 0.6)'
    ]);
  }

  //We take the discipline passed to by setChartData to define which discipline we are creating a chart for.
  //We also pass discipline through to getKeyData for us to the be able to extract specific pieces of data from the sessions array.

  setData(userData, chartType) {

    if(chartType === 'line') {
      return {
        labels: userData.sessions.map(session => session.date),
        datasets: [{
          label: userData.discipline,
          backgroundColor: this.selectColour(),
          data: userData.sessions.map(session => session.duration)
        }]
      };
    }

    if(chartType === 'doughnut') {
      return {
        labels: userData.practicedDisciplines.map(discipline => discipline.discipline),
        datasets: [{
          data: userData.practicedDisciplines.map(discipline => {
            return discipline.sessions.reduce((sumOfDuration, session) => {
              return sumOfDuration + session.duration;
            }, 0);
          }),
          backgroundColor: userData.practicedDisciplines.map(() => {
            return this.selectColour();
          })
        }]

      };
    }
  }

  setImage(label, index) {
    switch(label) {
      case 'Kata':
        return ([<img src="https://i.imgur.com/ojsP9fT.png" key="kata" id="Kata" alt="Kata"/>]);
      case 'Keiko':
        return ([<img src="https://i.imgur.com/rRAdVQL.png" key="keiko" id="Keiko" alt="Keiko"/>]);
      case 'Shiai':
        return ([<img src="https://i.imgur.com/1Wk6N6z.png" key="shiai" id="Shiai" alt="Shiai"/>]);
      case 'Jodan':
        return ([<img src="https://i.imgur.com/7Xc3Gml.png" key="jodan" id="Jodan" alt="Jodan"/>]);
      case 'Nito':
        return ([<img src="https://i.imgur.com/deWDhqH.png" key="nito" id="Nito" alt="Nito"/>]);
      case 'Shin-sa':
        return ([<img src="https://i.imgur.com/tFwf0ca.png" key="shin-sa" id="Shin-sa" alt="Shin-sa"/>]);
      case 'Mitori-geiko':
        return ([<img src="https://i.imgur.com/kDsMFY4.png" key="mitori-geiko" id="Mitori-geiko" alt="Mitori-geiko"/>]);
      case 'Asa-geiko':
        return ([<img src="https://i.imgur.com/4GRTfgM.png" key="asa-geiko" id="Asa-geiko" alt="Asa-geiko"/>]);
      default:
        return ([<img key={index} src="http://fillmurray.com/200/200"/>]);
    }
  }


  toggleHidden({ currentTarget }){
    const disciplines = this.state.toggleCharts;
    disciplines[currentTarget.id] = !disciplines[currentTarget.id];
    this.setState({
      isHidden: !this.state.isHidden,
      toggleCharts: {...disciplines}
    });

  }

  setHiddenStatus(user) {
    const disciplines = {};
    user.practicedDisciplines.forEach(disciplineSessions => {
      disciplines[disciplineSessions.discipline] = true;
    });
    return disciplines;
  }

  componentDidMount(){
    axios.get(`api/users/${Auth.getPayload().sub}`)
      .then(res => {
        const disciplines = this.setHiddenStatus(res.data);
        this.setState({
          user: res.data,
          chartData: res.data.practicedDisciplines.map(discipline => this.setData(discipline, 'line')),
          pieChart: this.setData(res.data, 'doughnut'),
          toggleCharts: {...disciplines}
        });
      })

      .catch(err => this.setState({ error: err.message }));
  }

  reformatMinutes = (timeInMinutes) => {
    return timeInMinutes / 60 > 1 ? `${Math.floor(timeInMinutes/60)} hours, ${timeInMinutes % 60} mins` : `${timeInMinutes} mins`;
  }


  render(){
    return(
      <div className="statistics ">
        <header className="header">
          <div className="text-box">
            <h1 className="heading-primary">
              Statistics
            </h1>
          </div>
        </header>
        <section className="section">
          <div className="columns is-multiline is-mobile">
            <div className="column is-12">
              <h1>You have practiced a total of:</h1>
              <h2><strong>{this.reformatMinutes(this.state.user.totalTimePracticed)}</strong></h2>
            </div>
            <div className="column is-three-quarters-mobile is-three-quarters-tablet is-three-quarters-desktop">
              <div className="container pie-container">
                {this.state.pieChart &&
                <DoughnutChart
                  data={this.state.pieChart}
                />}
              </div>
            </div>

            {this.state.chartData && this.state.chartData.length === 0 &&
          <section className="section">
            <div className="no-sessions container ">
              <img src="https://imgur.com/Vsd3i2Y.png"/>
            </div>
            <p className="is-3 has-text-centered">No sessions have been recorded.
              <Link to={`/users/${this.props.match.params.id}/edit`} className="is-3 "> Click here to add your first session</Link></p>
          </section>
            }

            {this.state.chartData && this.state.chartData.length !== 0 &&
            this.state.chartData.map((chart, index) =>
              <div className="column is-three-quarters-desktop is-three-quarters-mobile is-three-quarters-tablet" key={index}>
                <div
                  className="container chart-data-btn"
                  onClick={this.toggleHidden.bind(this)}
                  id={chart.datasets[0].label}
                >
                  {this.setImage(chart.datasets[0].label, index)}
                  {!this.state.toggleCharts[chart.datasets[0].label] &&
                    <section>
                      {/* <div className="panel">
                        <p className="panel-heading">
                          Line Chart
                        </p>
                        <div className="panel-block"> */}

                      <Chart
                        data={chart}
                        id={chart.datasets[0].label}
                      />
                      {/* </div>
                      </div> */}

                    </section>
                  }
                </div>
              </div>
            )}

          </div>
        </section>
      </div>
    );
  }
}

export default Statistics;
