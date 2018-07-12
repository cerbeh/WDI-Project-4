import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
// import Chart from '../charts/Chart';
import TestChart from '../charts/TestChart';


class UsersShow extends React.Component{

  constructor(){
    super();
    this.state={
      errors: {},
      user: {},
      chartData: {
        labels: [],
        datasets: [
          {
            label: '',
            data: []
          }
        ]
      }
    };
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => {
        const data = res.data.sessions.map(session => {
          return session.duration;
        });


        const labels = res.data.sessions.map(session => {
          return session.date;
        });

        this.setState({
          user: res.data,
          chartData: {
            labels,
            datasets: [
              {
                data: data,
                label: 'Kendo',
                backgroundColor: 'rgba(255, 206, 86, 0.6)'
              }
            ]
          }
        });
      })
      .catch(err => this.setState({ error: err.message }));
  }

  render(){
    console.log(this.state.chartData);
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
        { this.state.daysDisplayed && <canvas id="piece-line"></canvas>}
        {this.state.chartData &&
                <TestChart
                  chartData={this.state.chartData}
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
