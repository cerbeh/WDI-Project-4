import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import Form from './Form';

class SessionsEdit extends React.Component {

  state = {
    errors: {},
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
      .then(() => this.props.history.push(`/users/${this.props.match.params.id}/sessions`))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render() {
    console.log(this.state.session);
    return(
      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state.session}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default SessionsEdit;
