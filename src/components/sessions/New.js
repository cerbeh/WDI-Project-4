import React from 'react';
import axios from 'axios';

import Auth from '../../lib/Auth';
import Form from './Form';

class sessionsNew extends React.Component {

  state = {}

  handleChange = ({ target: {name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios({
      url: `/api/users/${this.props.match.params.id}/sessions`,
      method: 'POST',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => {
        this.props.history.push(`/users/${Auth.getPayload().sub}/`);
      })
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render(){
    return(
      <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }
}

export default sessionsNew;
