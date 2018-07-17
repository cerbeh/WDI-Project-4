import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../lib/Auth';

import UsersForm from './Form';

class UsersEdit extends React.Component{
  state ={
    errors: {},
    user: {}
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => {
        this.setState({user: res.data}, () => console.log(this.state.user));
      })
      .catch(err => this.setState({ error: err.message }));
  }

  handleChange=({ target: { name, value }})=> {
    const newState = { ...this.state.user, [name]: value };
    this.setState({ user: newState }, () => console.log(this.state.user));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/api/users/${this.props.match.params.id}`,
      method: 'PUT',
      data: this.state.user,
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/users/${Auth.getPayload().sub}`))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render(){
    return(
      <section className="section">
        <div className="container">
          <h1 className="title">Edit Profile</h1>
          <UsersForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            user={this.state.user}
            errors={this.state.errors}
          />
        </div>
        <section className="section">
          <Link className="has-text-centered" to={`/users/${Auth.getPayload().sub}`}>
            <p className="is-size-7">Cancel</p>
          </Link>
        </section>
      </section>
    );
  }
}

export default UsersEdit;
