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
          <section className ="section">
            <div className="container">
              <h1 className="title">{this.state.session.title} on {this.state.session.date}</h1>
              <hr />
              <h2 className="subtitle">Session Type:</h2>
              <strong>{this.state.session.discipline}</strong>
              <h2 className="subtitle">Duration:</h2>
              <i className="far fa-clock "></i><strong>{this.state.session.duration}</strong> minutes
              <h2 className="subtitle">Notes:</h2>
              <p>
                <strong>{this.state.session.notes}</strong>
              </p>
            </div>
            <section>
              <div className="container">
                <button onClick={this.handleDelete} className="button">Delete</button>
                <Link
                  to={`/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}/edit`}
                  className="button"
                >Edit
                </Link>

              </div>

            </section>


          </section>
        }
      </section>
    );
  }
}

export default SessionsShow;
