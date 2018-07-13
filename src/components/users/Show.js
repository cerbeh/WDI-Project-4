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

  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => {

        const label = _.uniq(res.data.sessions.map(session => {
          return session.discipline;
        }));

        const datasets = label.map(discipline => {
          return {

            label: discipline,

            backgroundColor: 'rgba(255, 206, 86, 0.6)',

            data: res.data.sessions.filter(session => {
              if (session.discipline === discipline) return session;
            }).map(obj => {
              return obj.duration;
            })

          };
        });

        const labels = res.data.sessions.map(session => {
          return session.date;
        });


        this.setState({
          user: res.data,
          chartData: {
            labels,
            datasets
          }
        });
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

            <section className="section text-is-centered">
              <div className="container chart-data-btn">
                <img src="https://i.imgur.com/RBp1erT.jpg" onClick={this.toggleHidden.bind(this)}/>
                {!this.state.isHidden && <Chart
                  chartData={this.state.chartData}
                />}
              </div>
            </section>
          }

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
