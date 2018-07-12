import React from 'react';
import axios from 'axios';

import Form from './Form';
import Auth from '../../lib/Auth';

class SessionsEdit extends React.Component {

  state = {
    session: {}
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}`)
      .then(res => this.setState({ session: res.data }));
  }

  handleChange=({ target: { name, value }})=> {
    const newState = { ...this.state.session, [name]: value };
    this.setState({ session: newState });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    axios({
      url: `/api/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}`,
      method: 'PUT',
      data: this.state.session,
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/users/${this.props.match.params.id}/sessions`));
  }

  render() {
    return(
      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state.session}
        />
      </div>
    );
  }
}

export default SessionsEdit;
