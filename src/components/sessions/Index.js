import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import SessionTimeline from '../charts/Timeline';

class SessionsIndex extends React.Component {

  state = {};

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}/sessions`)
      .then(res => this.setState({ sessions: res.data }));
  }

  render() {
    return(
      <div>
        <header className="header">
          <div className="text-box">
            <h1 className="heading-primary">
              <img src="https://i.imgur.com/zpPCFN8.png" />
              <span className="heading-primary-main">Heading Primary Main</span>
              <span className="heading-primary-sub">The secondary heading</span>
            </h1>
          </div>
        </header>

        <section className="section">
          <div className="columns is-multiline is-mobile">
            <div className="column is-10 has-text-left">
              { this.state.sessions &&
            <p className="is-3">
              <Link to={`/users/${this.props.match.params.id}/sessions/new`}>
                Add new session <i className="fas fa-plus-circle"></i>
              </Link>
            </p>
              }
            </div>
          </div>

          {
            this.state.sessions && this.state.sessions.length === 0 &&
          <section className="section">
            <div className="no-sessions container  ">
              <img src="https://i.imgur.com/sjrwESY.png"/>
            </div>
            <p className="is-3 has-text-centered">You have no sessions yet.
              <Link to={`/users/${this.props.match.params.id}/sessions/new`} className="is-3 "> Click here to add some!</Link></p>
          </section>
        }
        {
          this.state.sessions &&
          <div className="container">
          <SessionTimeline data={this.state.sessions} />
          </div>
        }

      </section>
    </div>
    );
  }
}

export default SessionsIndex;
