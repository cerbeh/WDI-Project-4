import React from 'react';
import {  Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

class Dashboard extends React.Component{
  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }
  render(){
    return (
      <section className="dashboard hero">
        <div className="columns is-multiline is-mobile">
          <div className="column is-half home">
            <Link to="/" className="is-expanded is-block has-text-centered">
              <i className="fa-2x fas fa-home"></i>
              <p className="is-size-7">Home</p>
            </Link>
          </div>
          <div className="column is-half account">
            <Link to={`/users/${Auth.getPayload().sub}`} className="is-expanded is-block has-text-centered">
              <i className="fa-2x fa fa-user"></i>
              <p className="is-size-7">Account</p>
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
          <div className="column is-half users">
            <Link to="/users" className="is-expanded is-block has-text-centered">
              <i className="fa-2x fas fa-users"></i>
              <p className="is-size-7">Users</p>
            </Link>
          </div>
          <div className="column is-half calc">
            <Link to="/bmi" className="is-expanded is-block has-text-centered">
              <i className="fa-2x fas fa-calculator"></i>
              <p className="is-size-7">BMI Calculator</p>
            </Link>
          </div>
          <div className="column is-half statistics">
            <a className="navbar-item is-expanded  is-block has-text-centered">
              <i className="fa-2x fas fa-chart-line"></i>
              <p className="is-size-7">Statistics</p>
            </a>
          </div>
          <div className="column is-half calendar">
            <a className="navbar-item is-expanded is-block has-text-centered">
              <i className="fa-2x fas far fa-calendar-alt"></i>
              <p className="is-size-7">Calendar</p>
            </a>
          </div>
          <div className="column is-half about">
            <a className="navbar-item is-expanded is-block has-text-centered">
              <i className="fa-2x fas fa-angry"></i>
              <p className="is-size-7">About Us</p>
            </a>
          </div>
          <div className="column is-half logout">
            <a className="navbar-item is-expanded is-block has-text-centered" onClick={this.handleLogout}>
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
