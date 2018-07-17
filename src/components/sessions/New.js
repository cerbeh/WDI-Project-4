import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Auth from '../../lib/Auth';
import Form from './Form';

class sessionsNew extends React.Component {

  state = {
    errors: {},
    session: {}
  }

  handleChange=({ target: { name, value }})=> {
    const newState = { ...this.state.session, [name]: value };
    this.setState({ session: newState });
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state,'handleSubmit');
    axios({
      url: `/api/users/${this.props.match.params.id}/sessions`,
      method: 'POST',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => {
        this.props.history.push(`/users/${this.props.match.params.id}/sessions`);
      })
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render(){
    return(
      <section className="section">
        <div className="container">
          <h1 className="title">Add New Session</h1>
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state.session}
            errors={this.state.errors}
          />
        </div>
        <section className="section">
          <Link className="has-text-centered" to={`/users/${Auth.getPayload().sub}/sessions`}>
            <p className="is-size-7">Cancel</p>
          </Link>
        </section>
      </section>
    );
  }
}

export default sessionsNew;
