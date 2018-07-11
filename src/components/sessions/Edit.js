import React from 'react';
import axios from 'axios';

import Form from './Form';
import Auth from '../../lib/Auth';
import moment from 'moment';

class SessionsEdit extends React.Component {

  state = {
    session: {}
  }

  componentDidMount() {
    this.getDisplayDate(moment());
    axios.get(`/api/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}`)
      .then(res => this.setState({ session: res.data }));
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/api/users/${this.props.match.params.id}/sessions`,
      method: 'PUT',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    });
  }

  getDisplayDate(date) {
    this.setState({ displayDate: moment(date).calendar().split(' at')[0] });
  }

  render() {
    console.log(this.state);
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
