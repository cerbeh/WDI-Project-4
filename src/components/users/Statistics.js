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

  setLabelsType(chartType) {
    if(chartType === 'line') {
      return this.getKeyData(sessionsData, discipline, 'date');
    }
    if(chartType === 'doughnut') return this.getDisciplines(sessionsData);
    else return 'HELLO';
  }

  getDisciplines(sessionsData) {
    //Using lodash we iterate of the sessions from the user and return all the unique values from the key discipline
    return _.uniq(sessionsData.map(session => {
      return session.discipline;
    }));
  }

  getKeyData(sessionsData, discipline, key) {
    return sessionsData
    //Return only the session that match the discipline
      .filter(session => {
        if(session.discipline === discipline) return session;
      })
      //Organise from oldest to newest dates
      .sort((a,b) => {
        return new Date(a.date) - new Date(b.date) ;
      })
      //Return only the data from session object from key provided
      .map(session => {
        return session[key];
      });
  }

  setDatasets(sessionsData, chartType, discipline) {
    const setLabelsType = () => {
      if(chartType === 'line') {
        return this.getKeyData(sessionsData, discipline, 'date');
      }
      if(chartType === 'doughnut') return this.getDisciplines(sessionsData);
      else return 'HELLO';
    };
    //We return an object with the data laid out in the way that chartjs wants to receive it.
    //We take the discipline passed to by setChartData to define which discipline we are creating a chart for.
    //We also pass discipline through to getKeyData for us to the be able to extract specific pieces of data from the sessions array.
    return {
      labels: setLabelsType(),
      datasets: [{
        label: discipline,
        backgroundColor: _.sample([
          'rgba(128, 255, 0, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(100, 85, 73, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(85, 65, 13, 0.6)',
          'rgba(55, 27, 7, 0.6)'
        ]),
        data: this.getKeyData(sessionsData, discipline, 'duration')
      }]
    };
  }

  setChartData(sessionsData, chartType) {
    //We use getDisciplines to go through sessionsData and return an array of unique disciplines.
    //We then map over it so that we can pass each discipline down to setDatasets.
    return this.getDisciplines(sessionsData).map(discipline => {
      return this.setDatasets(sessionsData, chartType, discipline);
    });
  }

  setImage(label, index) {
    switch(label) {
      case 'Kata':
        return ([<img src="https://i.imgur.com/ojsP9fT.png" key="kata" alt="kata"/>]);
      case 'Keiko':
        return ([<img src="https://i.imgur.com/rRAdVQL.png" key="keiko" alt="keiko"/>]);
      case 'Shiai':
        return ([<img src="https://i.imgur.com/1Wk6N6z.png" key="shiai" alt="shiai"/>]);
      case 'Jodan':
        return ([<img src="https://i.imgur.com/7Xc3Gml.png" key="jodan" alt="jodan"/>]);
      case 'Nito':
        return ([<img src="https://i.imgur.com/deWDhqH.png" key="nito" alt="nito"/>]);
      case 'Shin-sa':
        return ([<img src="https://i.imgur.com/tFwf0ca.png" key="shin-sa" alt="shin-sa"/>]);
      case 'Mitori-geiko':
        return ([<img src="https://i.imgur.com/kDsMFY4.png" key="mitori-geiko" alt="mitori-geiko"/>]);
      case 'Asa-geiko':
        return ([<img src="https://i.imgur.com/4GRTfgM.png" key="asa-geiko" alt="asa-geiko"/>]);
      default:
        return ([<img key={index} src="http://fillmurray.com/200/200"/>]);
    }
  }


  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  componentDidMount(){
    axios.get(`api/users/${Auth.getPayload().sub}`)
      .then(res => {

        this.setState({
          user: res.data,
          chartData: this.setChartData(res.data.sessions, 'line')
        });
      })

      .catch(err => this.setState({ error: err.message }));
  }


  render(){
    return(
      <section className="section">
        <div className="columns is-multiline is-mobile">
          <div className="column is-10">
            <h1 className="title is-3">Statistics</h1>
            <hr />
          </div>
          <div className="column is-1">
            <div className="container">
              <Link to={`/users/${Auth.getPayload().sub}/sessions`}>
                <button className="edit">
                  <i className="fas fa-pencil-alt   fa-2x"></i>
                  <p className="is-8">Sessions</p>
                </button>
              </Link>
            </div>
          </div>

          {/* {!this.state.chartData &&
          <section className="section">
            <div className="no-sessions container ">
              <img src="https://imgur.com/Vsd3i2Y.png"/>
            </div>
            <p className="is-3 has-text-centered">No sessions have been recorded.
              <Link to={`/users/${this.props.match.params.id}/edit`} className="is-3 "> Click here to add your first session</Link></p>
          </section>
          } */}

          {this.state.chartData &&
            this.state.chartData.map((chart, index) =>
              <div className="column is-12" key={index}>
                <div
                  className="container chart-data-btn"
                  onClick={this.toggleHidden.bind(this)}
                >
                  {this.setImage(chart.datasets[0].label, index)}
                  {!this.state.isHidden &&
                    <section>

                      <Chart
                        data={chart}
                      />
                      <DoughnutChart
                        data={chart}
                      />
                    </section>
                  }
                </div>
              </div>
            )}
        </div>
      </section>
    );
  }
}

export default Statistics;
