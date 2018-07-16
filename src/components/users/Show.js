import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';


class UsersShow extends React.Component{

  constructor(){
    super();
    this.state={
      isHidden: true,
      user: {}
    };
  }

  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => {

        this.setState({
          user: res.data
        });
      })

      .catch(err => this.setState({ error: err.message }));
  }


  render(){
    return(
      <section className="section">
        <div className="columns is-multiline is-mobile">
          <div className="column header is-10">
            <img src="https://i.imgur.com/DLISgeK.png" alt="Profile header"/>
            <h1 className="title is-3">{this.state.user.username}</h1>
            <hr />
          </div>
          <div className="column is-1">
            <div className="container">
              <Link to={`/users/${Auth.getPayload().sub}/edit`}>
                <button className="edit">
                  <i className="fas fa-pencil-alt   fa-2x"></i>
                  <p className="is-8">Edit Profile</p>
                </button>
              </Link>
            </div>
          </div>

          {this.state.user && !this.state.user.gender  &&
          <section className="section">
            <div className="no-sessions container ">
              <img src="https://imgur.com/Vsd3i2Y.png"/>
            </div>
            <p className="is-3 has-text-centered">You havent edited your profile yet.
              <Link to={`/users/${this.props.match.params.id}/edit`} className="is-3 "> Click here edit!</Link></p>
          </section>
          }

          {this.state.user && this.state.user.gender &&
            <section>
              <div className="column is-10">
                <h5 className="is-5">I was born on:</h5>
                <h2 className="subtitle"><strong>{this.state.user.dob}</strong></h2>
                <h5 className="is-5">My height:</h5>
                <h2 className="subtitle"><strong>{this.state.user.height}</strong> cm</h2>
                <h5 className="is-5">My Weight:</h5>
                <h2 className="subtitle"><strong>{this.state.user.weight}</strong> kilos</h2>
                <h5 className="is-5">Grade:</h5>
                <h2 className="subtitle"><strong>{this.state.user.grade}</strong></h2>
              </div>
            </section>
          }
        </div>
      </section>
    );
  }
}

export default UsersShow;
