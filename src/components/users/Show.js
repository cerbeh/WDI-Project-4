import React from 'react';
import axios from 'axios';


class UsersShow extends React.Component{
  constructor(){
    super();
    this.state={};
  }
  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => this.setState({ error: err.message }));

    axios.get(`/api/users/${this.props.match.params.id}/sessions`)
      .then(res => this.setState({ sessions: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }
  render(){
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.user) return <h2 className="title">Loading...</h2>;
    return(
      <section>
        <div>
          <h1 className="title">{this.state.user.username}</h1>
          <h5 className="is-5">I was born in:</h5>
          <h2 className="is-5">{this.state.user.dob}</h2>
          <h5 className="is-5">My height:</h5>
          <h2 className="is-5">{this.state.user.height}</h2>
          <h5 className="is-5">My Weight:</h5>
          <h2 className="is-5">{this.state.user.weight}</h2>
          <h5 className="is-5">Grade:</h5>
          <h2 className="is-5">{this.state.user.grade}</h2>
        </div>
      </section>
    );
  }
}

export default UsersShow;
