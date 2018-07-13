import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Chart from '../charts/Chart';
import _ from 'lodash';


class UsersShow extends React.Component{

  constructor(){
    super();
    this.state={
      isHidden: true,
      errors: {},
      user: {}
    };
  }

  getDisciplines(sessionsData) {
    return _.uniq(sessionsData.map(session => {
      return session.discipline;
    }));
  }

  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  setImage(label) {
    switch(label) {
      case 'Kata':
        <img src="https://i.imgur.com/K1DprdD.png" id="kata" onClick={this.toggleHidden.bind(this)}/>;
        break;
      case 'Keiko':
        <img src="https://i.imgur.com/RBp1erT.jpg" id="keiko" onClick={this.toggleHidden.bind(this)}/>;
        break;
      case 'Shiai':
        <img src="https://i.imgur.com/SF3GNT0.jpg" id="shiai" onClick={this.toggleHidden.bind(this)}/>;
        break;
      default:
        <img src="http://fullmurray.com/200/200"/>;
    }
  }

  setChartData(sessionsData, discipline) {

    return {
      labels:

      sessionsData.filter(session => {
        if(session.discipline === discipline) return session;
      }).map(session => {
        return session.date;
      }),


      datasets: this.getDisciplines(sessionsData).map(discipline => {
        return {
          label: discipline,
          backgroundColor: 'rgba(255, 206, 86, 0.6)',
          data: sessionsData.filter(session => {
            if (session.discipline === discipline) return session;
          }).map(obj => {
            return obj.duration;
          })
        };
      })
    };
  }



  setDatasets(sessionsData, discipline) {
    return {
      labels: sessionsData.filter(session => {
        if(session.discipline === discipline) return session;
      }).map(session => {
        return session.date;
      }),
      datasets: [{
        label: discipline,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        data: sessionsData.filter(session => {
          if (session.discipline === discipline) return session;
        }).map(obj => {
          return obj.duration;
        })
      }]
    };
  }


  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => {

        this.setState({
          user: res.data,
          chartData: this.getDisciplines(res.data.sessions).map(discipline => {
            //returns an array of objects with a key labels and the array inside is of the unique dates for that discipline
            return this.setDatasets(res.data.sessions, discipline);
          })
        });
        console.log(this.state.chartData);
      })

      .catch(err => this.setState({ error: err.message }));
  }


  render(){
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.user) return <h2 className="title">Loading...</h2>;
    return(
      <section className="section">
        <div className="columns is-multiline is-mobile">
          <div className="column is-10">
            <h1 className="title is-3">{this.state.user.username}</h1>
          </div>
          <div className="column is-1">
            <div className="container">
              <Link to={`/users/${Auth.getPayload().sub}/edit`}>
                <button className="edit">
                  <i className="fas fa-pencil-alt   fa-2x"></i>
                  <p className="is-8">Edit Profile</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="column is-10">
            <h5 className="is-5">I was born on:</h5>
            <h2 className="subtitle"><strong>{this.state.user.dob}</strong></h2>
            <h5 className="is-5">My height:</h5>
            <h2 className="subtitle"><strong>{this.state.user.height}</strong> cm</h2>
            <h5 className="is-5">My Weight:</h5>
            <h2 className="subtitle"><strong>{this.state.user.weight}</strong> kilos</h2>
            <h5 className="is-5">Grade:</h5>
            <h2 className="subtitle"><strong>{this.state.user.grade}</strong></h2>
          </div>

          {this.state.chartData &&
                this.state.chartData.map((chart, index) =>
                  <div
                    className="container chart-data-btn"
                    key={index}
                  >
                    {console.log(chart.datasets[0].label)}
                    {/* {this.setImage(chart.datasets[0].label)} */}
                    {!this.state.isHidden &&
                      <Chart
                        data={chart}
                      />
                    }

                  </div>
                )}
        </div>
      </section>
    );
  }
}

export default UsersShow;




// chartData: {
//   labels: [ '2018-07-01', '2018-07-02','2018-07-03','2018-07-04','2018-07-05','2018-07-06','2018-07-07'],
//   datasets: [
//     {
//       label: 'Kata',
//       backgroundColor: 'rgba(54, 162, 235, 0.6)',
//       data: [20, 30, 80, 20, 40, 10, 60]
//     }, {
//       label: 'Keiko',
//       backgroundColor: 'rgba(255, 206, 86, 0.6)',
//       data: [60, 10, 40, 30, 80, 30, 20]
//     },
//     {
//       label: 'Shiai',
//       data: [
//         120,60,30,45,50,25,20
//       ],
//       backgroundColor: 'rgba(255, 99, 132, 0.6)'
//     }
//   ]
// }
