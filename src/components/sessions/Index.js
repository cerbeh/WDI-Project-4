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
            <h1 className="title is-3">HISTORY</h1>
            <h5 className="is-5">Sessions logged so far: </h5>
          </div>
          <hr />
          <div className="column is-1">
            <div className="container">
              <Link to={`/users/${this.props.match.params.id}/sessions/new`}>
                <i className="fas fa-plus-circle fa-3x"></i>
              </Link>
            </div>
          </div>

        </div>



        { this.state.sessions &&
          <SessionTimeline data={this.state.sessions} />
        }

      </section>
    );
  }
}

export default SessionsIndex;
