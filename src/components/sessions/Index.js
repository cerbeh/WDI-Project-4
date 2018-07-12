import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import SessionTimeline from './Timeline';

class SessionsIndex extends React.Component {

  state = {};

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}/sessions`)
      .then(res => this.setState({ sessions: res.data }));
  }

  render() {
    return(
      <section>
        <h1 className="title is-3">Sessions</h1>

        <div className="container bottomBtn">
          <Link to={`/users/${this.props.match.params.id}/sessions/new`}>
            <i className="fas fa-plus-circle fa-2x"></i>
          </Link>
        </div>

        { this.state.sessions &&
          <SessionTimeline data={this.state.sessions} />
        }

      </section>
    );
  }
}

export default SessionsIndex;
