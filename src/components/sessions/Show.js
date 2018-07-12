import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Auth from '../../lib/Auth';

class SessionsShow extends React.Component {

  state = {}

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}`)
      .then(res => this.setState({ session: res.data }));
  }

  handleDelete = () => {
    axios({
      url: `/api/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}`,
      method: 'DELETE',
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/users/${this.props.match.params.id}/sessions`));
  }

  render() {
    return(
      <section>
        {this.state.session &&
          <div>
            <h2>{this.state.session.title}</h2>
            <ul>
              <li>
                {this.state.session.discipline}
              </li>
              <li>
                {this.state.session.duration}
              </li>
            </ul>
            <p>
              {this.state.session.notes}
            </p>
            <button onClick={this.handleDelete} className="button">Delete</button>
            <Link
              to={`/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}/edit`}
              className="button"
            >Edit
            </Link>
          </div>
        }
      </section>
    );
  }
}

export default SessionsShow;
