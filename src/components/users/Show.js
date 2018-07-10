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
  }
  render(){
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.user) return <h2 className="title">Loading...</h2>;
    return(
      <section>
        <h1>Users Show</h1>
        <div>
          <h2 className="title">{this.state.user.username}</h2>
        </div>
      </section>
    );
  }
}

export default UsersShow;
