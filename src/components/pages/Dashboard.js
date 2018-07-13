import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

class Dashboard extends React.Component{
  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }
  render(){
    return (
      <section>
        <div className="container">
          <div className="columns">
            <div className="column is-half-desktop">
              <Link to="/" className=" is-expanded is-block has-text-centered">
                <i className="fas fa-home"></i>
                <p className="is-size-7">Home</p>
              </Link>
              <Link className="is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}`}>
                <i className="fa fa-user"></i>
                <p className="is-size-7">Profile</p>
              </Link>
              <Link className="is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}/sessions/new`}>
                <i className="far fa-calendar-alt"></i>
                <p className="is-size-7">Add Session</p>
              </Link>
            </div>
            <div className="column is-half-desktop">
              <Link className="is-expanded is-block has-text-centered" to={`/users/${Auth.getPayload().sub}/sessions`}>
                <i className="fa fa-history"></i>
                <p className="is-size-7">History</p>
              </Link>
              <a className="is-expanded is-block has-text-centered" onClick={this.handleLogout}>
                <i className="fas fa-sign-out-alt"></i>
                <p className="is-size-7">Logout</p>
              </a>
              <a className="is-expanded  is-block has-text-centered">
                <i className="fas fa-chart-line"></i>
                <p className="is-size-7">Statistics</p>
              </a>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default withRouter(Dashboard);
