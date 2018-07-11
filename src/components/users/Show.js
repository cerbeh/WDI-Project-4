import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Chart from '../charts/Chart';
// import LineChart from '../charts/LineChart';


class UsersShow extends React.Component{
  constructor(){
    super();
    this.state={
      chartData: {}
    };
  }

  componentDidMount(){
    this.getChartData();
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }
  getChartData(){
    this.setState({
      chartData: {
        labels: [ '2018-07-01', '2018-07-02','2018-07-03','2018-07-04','2018-07-05','2018-07-06','2018-07-07'],
        datasets: [
          {
            label: 'Kata',
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            data: [20, 30, 80, 20, 40, 10, 60]
          }, {
            label: 'Keiko',
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
            data: [60, 10, 40, 30, 80, 30, 20]
          },
          {
            label: 'Shiai',
            data: [
              120,60,30,45,50,25,20
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.6)'
          }
        ]
      }
    });
  }

  render(){
    console.log(this.state.sessions);
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
        {/* <LineChart /> */}

        <Chart chartData={this.state.chartData} discipline="Keiko" legendPosition="bottom"/>
        <div id="bottomBtn">
          <Link to={`/users/${Auth.getPayload().sub}/edit`}>
            <button className="edit">
              <i className="fas fa-pencil-alt fa-3x"></i>
              <p>Edit Profile</p>
            </button>
          </Link>
          <Link to={`/users/${this.props.match.params.id}/sessions`}>
            <button className="edit">
              <i className="fas fa-history fa-3x"></i>
              <i className="fas fa-dumbbell fa-3x"></i>
              <p>Past Sessions</p>
            </button>
          </Link>
          <Link to={`/users/${this.props.match.params.id}/sessions/new`}>
            <button className="edit">
              <i className="fas fa-plus fa-3x"></i>
              <i className="fas fa-dumbbell fa-3x"></i>
              <p>New Sesh</p>
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default UsersShow;
