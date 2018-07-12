import React from 'react';
import axios from 'axios';


class SessionsShow extends React.Component {

  state = {}

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}`)
      .then(res => this.setState({ session: res.data }));
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
          </div>
        }
      </section>
    );
  }
}

export default SessionsShow;
