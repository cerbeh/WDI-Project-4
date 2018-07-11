import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Chart from '../charts/Chart';

class UsersShow extends React.Component{
  constructor(){
    super();
    this.state={
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
        labels: ['2018-07-01', '2018-07-02','2018-07-03','2018-07-04','2018-07-05','2018-07-06','2018-07-07'],
        datasets: [
          {
            label: 'Duration',
            data: [
              60,
              20,
              15,
              25,
              40,
              5
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ]
          }
        ]
      }
    });
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
        <Chart chartData={this.state.chartData}/>
        <Link to={`/users/${Auth.getPayload().sub}/edit`}>
          <div id="bottomBtn">
            <button className="edit"><i className="fas fa-pencil-alt fa-3x"></i></button>
          </div>
        </Link>
      </section>
    );
  }
}

export default UsersShow;
