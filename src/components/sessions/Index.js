import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class SessionsIndex extends React.Component {

  state = {};

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}/sessions`)
      .then(res => this.setState({ sessions: res.data }));
  }

  render() {
    return(
      <section className="section">
        <div className="container">

          <h1 className="title is-3">Sessions</h1>
        </div>
        <hr />
        <div className="container">
          <ul>
            { this.state.sessions && this.state.sessions.map(session =>
              <li key={session._id} className="session-list">
                <Link to={`/users/${this.props.match.params.id}/sessions/${session._id}`}>
                  {session.title}
                </Link>
                <p>
                  {session.date}
                </p>
                <Link to={`/users/${this.props.match.params.id}/sessions/${session._id}/edit`}>
                  Edit
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="container bottomBtn">
          <Link to={`/users/${this.props.match.params.id}/sessions/new`}>
            <i className="fas fa-arrow-alt-circle-right fa-2x"></i>
          </Link>
        </div>
      </section>
    );
  }
}

export default SessionsIndex;
