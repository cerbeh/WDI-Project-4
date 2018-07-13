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
      errors: {},
      user: {}
    };
  }

  getDisciplines(sessionsData) {
    return _.uniq(sessionsData.map(session => {
      return session.discipline;
    }));
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


  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => {

        this.setState({
          user: res.data,
          chartData: this.setChartData(res.data.sessions, 'Keiko')
        });
        console.log(this.getDisciplines(res.data.sessions)
          // .forEach(discipline => {
          //   return discipline;
          // })
          // .map(discipline => {
          //   console.log(discipline);
          // })
        );
      })

      .catch(err => this.setState({ error: err.message }));
  }

  render(){
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.user) return <h2 className="title">Loading...</h2>;
    return(
      <section className="section">
        <div>
          <h1 className="title">{this.state.user.username}</h1>
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
          <Chart
            data={this.state.chartData}
          />
        }

        <div className="bottomBtn">
          <Link to={`/users/${Auth.getPayload().sub}/edit`}>
            <button className="edit">
              <i className="fas fa-pencil-alt fa-3x"></i>
              <p>Edit Profile</p>
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default UsersShow;
