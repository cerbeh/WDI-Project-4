import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';


class Footer extends React.Component{
  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }
  render(){
    return (
      <div>
        {Auth.isAuthenticated() &&
    <nav className="navbar is-link is-fixed-bottom" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* <Link to="/" className="navbar-item is-expanded is-block has-text-centered">
          <i className="fas fa-home"></i>
          <p className="is-size-7">Home</p>
        </Link> */}
        <Link className="navbar-item is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}`}>
          <i className="fa fa-user"></i>
          <p className="is-size-7">Account</p>
        </Link>
        <Link className="navbar-item is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}/sessions/new`}>
          <i className="far fa-calendar-alt"></i>
          <p className="is-size-7">Add Session</p>
        </Link>
        {/* <a className="navbar-item is-expanded  is-block has-text-centered">
          <i className="fas fa-chart-line"></i>
          <p className="is-size-7">Statistics</p>
        </a> */}
        <Link className="navbar-item is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}/sessions`}>
          <i className="fa fa-history"></i>
          <p className="is-size-7">History</p>
        </Link>
        <a className="navbar-item is-expanded is-block has-text-centered" onClick={this.handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <p className="is-size-7">Logout</p>
        </a>
      </div>
    </nav>
        }
      </div>
    );
  }
}

export default withRouter(Footer);
