import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';


class UsersShow extends React.Component{
  constructor(){
    super();
    this.state={};
  }
  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }
  render(){
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.user) return <h2 className="title">Loading...</h2>;
    return(
      <section className="section">
        <div>
          <h1 className="title">{this.state.user.username}</h1>
          <h5 className="is-5">I was born on:</h5>
          <h2 className="subtitle"><strong>{this.state.user.dob}</strong></h2>
          <h5 className="is-5">My height:</h5>
          <h2 className="subtitle"><strong>{this.state.user.height}</strong> cm</h2>
          <h5 className="is-5">My Weight:</h5>
          <h2 className="subtitle"><strong>{this.state.user.weight}</strong> kilos</h2>
          <h5 className="is-5">Grade:</h5>
          <h2 className="subtitle"><strong>{this.state.user.grade}</strong></h2>
        </div>
        <div id="bottomBtn">
          <Link to={`/users/${Auth.getPayload().sub}/edit`}>
            <button className="edit">
              <i className="fas fa-pencil-alt fa-3x"></i>
              <p>Edit Profile</p>
            </button>
          </Link>
          <Link to={`/users/${this.props.match.params.id}/sessions`}>
            <button className="edit">
              <i className="fas fa-history fa-3x"></i>
              <i className="fas fa-dumbbell fa-3x"></i>
              <p>Past Sessions</p>
            </button>
          </Link>
          <Link to={`/users/${this.props.match.params.id}/sessions/new`}>
            <button className="edit">
              <i className="fas fa-plus fa-3x"></i>
              <i className="fas fa-dumbbell fa-3x"></i>
              <p>New Sesh</p>
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default UsersShow;
