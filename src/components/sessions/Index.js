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
      <section className="section">
        <div className="columns is-multiline is-mobile">
          <div className="column is-10">
            <img src="https://i.imgur.com/b43XIhK.png" />
            <hr />
            { this.state.sessions &&
            <p className="is-3">
              <Link to={`/users/${this.props.match.params.id}/sessions/new`}>
                Add new session <i className="fas fa-plus-circle"></i>
              </Link>
            </p>
            }
          </div>

        </div>

        {this.state.sessions && this.state.sessions.length === 0 &&
          <section className="section">
            <div className="no-sessions container  ">
              <img src="https://i.imgur.com/sjrwESY.png"/>
            </div>
            <p className="is-3 has-text-centered">You have no sessions yet.
              <Link to={`/users/${this.props.match.params.id}/sessions/new`} className="is-3 "> Click here to add some!</Link></p>
          </section>
        }

        { this.state.sessions &&
          <SessionTimeline data={this.state.sessions} />
        }

      </section>
    );
  }
}

export default SessionsIndex;
