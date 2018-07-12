import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

const Footer = () => {
  return (
    <div>
      {Auth.isAuthenticated() &&
    <nav className="navbar is-link is-fixed-bottom" role="navigation">
      <div className="navbar-brand">
        <Link className="navbar-item is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}`}>
          <i className="fa fa-user"></i>
          <p className="is-size-7">Account</p>
        </Link>
        <a className="navbar-item is-expanded  is-block has-text-centered">
          <i className="far fa-calendar-alt"></i>
          <p className="is-size-7">Schedule</p>
        </a>
        <Link className="navbar-item is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}/sessions/new`}>
          <i className="fa fa-compass"></i>
          <p className="is-size-7">Add Session</p>
        </Link>
        <a className="navbar-item is-expanded  is-block has-text-centered">
          <i className="fas fa-chart-line"></i>
          <p className="is-size-7">Statistics</p>
        </a>
        <Link className="navbar-item is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}/sessions`}>
          <i className="fa fa-history"></i>
          <p className="is-size-7">History</p>
        </Link>
      </div>
    </nav>
      }
    </div>
  );
};

export default Footer;
