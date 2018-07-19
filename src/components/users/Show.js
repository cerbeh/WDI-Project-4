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
      <div className="profile">
        <header className="header">
          <div className="text-box">
            <h1 className="heading-primary">
              PROFILE
            </h1>
          </div>
        </header>


        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <h1 className="title is-1">{this.state.user.username}</h1>
            </div>
            <div className="level-item">
              <Link to={`/users/${Auth.getPayload().sub}/edit`}>
                <button className="edit">
                  <i className="fas fa-pencil-alt   fa-2x"></i>
                  <p className="is-8">Edit Profile</p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {this.state.user && !this.state.user.height  &&
        <section className="section">
          <div className="no-sessions container ">
            <img src="https://imgur.com/Vsd3i2Y.png"/>
          </div>
          <p className="is-3 has-text-centered">You havent edited your profile yet.
            <Link to={`/users/${this.props.match.params.id}/edit`} className="is-3 "> Click here edit!</Link></p>
        </section>
        }

        <div className="columns is-centered ">
          {this.state.user && this.state.user.height &&

            <div className="column is-4-desktop">
              <div className="columns">

                <div className="column">
                  <h5 className="subtitle">I was born on:</h5>
                  <h2 className="subtitle"><strong>{this.state.user.dob}</strong></h2>
                  <h5 className="subtitle">Grade:</h5>
                  <h2 className="subtitle"><strong>{this.state.user.grade}</strong></h2>
                </div>

                <div className="column">
                  <h5 className="subtitle">My height:</h5>
                  <h2 className="subtitle"><strong>{this.state.user.height}</strong> cm</h2>
                  <h5 className="subtitle">My Weight:</h5>
                  <h2 className="subtitle"><strong>{this.state.user.weight}</strong> kilos</h2>
                </div>
              </div>
            </div>
          }


          {this.state.user && this.state.user.practicedDisciplines &&
            <div className="column is-4 disciplines ">
              <h3 className="title is-3 has-text-centered">Disciplines Practiced</h3>
              <div className="columns is-multiline has-text-centered is-centered">
                {this.state.user.practicedDisciplines.map(name =>
                  <div className="subtitle column is-half" key={name.discipline}>
                    {name.discipline}
                  </div>
                )}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default UsersShow;
