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
      <section className="sessions-show-wrapper">
        {this.state.session &&
          <div className="sessions-show">
            <header className="header">
              <div className="text-box">
                <h1 className="heading-primary">
                  Session
                </h1>
              </div>
            </header>
            <section className ="section">
              <div className="container">
                <h1 className="title">{this.state.session.title}</h1>
                <h5 className="subtitle">{this.state.session.date}</h5>
                <hr />
                <h2 className="subtitle">Session Type:</h2>
                <p>{this.state.session.discipline}</p>
                <h2 className="subtitle">Duration:</h2>
                <p><i className="far fa-clock "></i>&nbsp;&nbsp;{this.state.session.duration} minutes</p>
                <h2 className="subtitle">Notes:</h2>
                <p>{this.state.session.notes}</p>
              </div>
              <section>
                <div className="btn-container container">
                  <Link
                    to={`/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}/edit`}
                    className="button"
                  >Edit
                  </Link>
                  <button onClick={this.handleDelete} className="button">Delete</button>

                </div>

              </section>


            </section>
          </div>
        }
      </section>
    );
  }
}

export default SessionsShow;
