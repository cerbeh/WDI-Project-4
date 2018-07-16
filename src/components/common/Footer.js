import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';


const Footer =() => {
  return (
    <div>
      {Auth.isAuthenticated() &&
    <nav className="navbar is-link is-fixed-bottom" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-expanded">
        <Link className="navbar-item is-expanded is-block has-text-centered" to="/dashboard">
          <i className="far fa-compass"></i>
          <p className="is-size-7">Dashboard</p>
        </Link>
        <Link className="navbar-item is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}/sessions/new`}>
          <i className="far fa-calendar-alt"></i>
          <p className="is-size-7">Add Session</p>
        </Link>
        <Link className="navbar-item is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}/sessions`}>
          <i className="fa fa-history"></i>
          <p className="is-size-7">History</p>
        </Link>
        <Link className="navbar-item is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}`}>
          <i className="far fa-user"></i>
          <p className="is-size-7">Account</p>
        </Link>
      </div>
    </nav>
      }
    </div>
  );
};

export default withRouter(Footer);
