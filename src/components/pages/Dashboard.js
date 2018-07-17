import React from 'react';
import axios from 'axios';
import {  Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

const greeting = [' Hola', 'Tere', 'Hey', 'Hallå!','Xin Chào', 'M\'athchomaroon', 'こんにちわ', 'Bonjour', 'Hi', '여보세요', 'Helô', 'Zdravo' ];


class Dashboard extends React.Component{
  constructor(){
    super();
    this.state={
      user: {},
      date: new Date(),
      greeting: 'こんにちわ',
      tick: '',
      nameTick: '',
      timerID: ''
    };
  }

  componentDidMount(){
    const timerId = setInterval(this.tick, 1000);
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => {
        console.log(res);
        this.setState({
          user: res.data,
          timerId
        });
      })

      .catch(err => this.setState({ error: err.message }));
  }
  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }
  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }
  tick = () => {
    const randGreeting = Math.floor(Math.random(greeting.length)*(greeting.length));
    this.setState({ date: new Date(), greeting: greeting[randGreeting] });
  };
  render(){
    return (
      <section className="dashboard">
        <div className="columns is-multiline is-mobile">
          <div className="column is-half home">
            <Link to="/" className="is-expanded is-block has-text-centered">
              <h1 className="title">{this.state.greeting}, {this.state.user.username}!</h1>
              <h5 className="subtitle">The time is {this.state.date.toLocaleTimeString()}</h5>
            </Link>
          </div>
          <div className="column is-half account">
            <Link to={`/users/${Auth.getPayload().sub}`} className="is-expanded is-block has-text-centered">
              <i className="fa-2x fa fa-user"></i>
              <p className="is-size-7">Profile</p>
            </Link>
          </div>
          <div className="column is-half new">
            <Link to={`/users/${Auth.getPayload().sub}/sessions/new`} className="is-expanded is-block has-text-centered">
              <i className="fa-2x fas fa-dumbbell"></i>
              <p className="is-size-7">Add Session</p>
            </Link>
          </div>
          <div className="column is-half sessions">
            <Link to={`/users/${Auth.getPayload().sub}/sessions`} className="is-expanded is-block has-text-centered">
              <i className="fa-2x fa fa-history"></i>
              <p className="is-size-7">Sessions</p>
            </Link>
          </div>
          <div className="column is-half calc">
            <Link to="/bmi" className="is-expanded is-block has-text-centered">
              <i className="fa-2x fas fa-calculator"></i>
              <p className="is-size-7">BMI Calculator</p>
            </Link>
          </div>
          <div className="column is-half statistics">
            <Link to="/statistics" className="is-expanded  is-block has-text-centered">
              <i className="fa-2x fas fa-chart-line"></i>
              <p className="is-size-7">Statistics</p>
            </Link>
          </div>
          <div className="column is-half about">
            <a className="is-expanded is-block has-text-centered">
              <i className="fa-2x fas fa-angry"></i>
              <p className="is-size-7">About Us</p>
            </a>
          </div>
          <div className="column is-half logout">
            <a className="is-expanded is-block has-text-centered" onClick={this.handleLogout}>
              <i className="fa-2x fas fa-sign-out-alt"></i>
              <p className="is-size-7">Logout</p>
            </a>
          </div>
        </div>
      </section>

    );
  }
}

export default withRouter(Dashboard);
