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
        console.log(this.state.user);
      })

      .catch(err => this.setState({ error: err.message }));
  }


  render(){
    return(
      <div className="profile ">
        <header className="header">
          <div className="text-box">
            <h1 className="heading-primary">
              <img src="https://i.imgur.com/DLISgeK.png" alt="Profileheader"/>
            </h1>
          </div>
        </header>


        <div className="level">
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
                <div className="column is-half-desktop">
                  <h5 className="subtitle">I was born on:</h5>
                  <h2 className="subtitle"><strong>{this.state.user.dob}</strong></h2>
                  <h5 className="subtitle">My height:</h5>
                  <h2 className="subtitle"><strong>{this.state.user.height}</strong> cm</h2>
                  <h5 className="subtitle">My Weight:</h5>
                  <h2 className="subtitle"><strong>{this.state.user.weight}</strong> kilos</h2>
                  <h5 className="subtitle">Grade:</h5>
                  <h2 className="subtitle"><strong>{this.state.user.grade}</strong></h2>
                </div>
              </section>
        }


        {this.state.user && this.state.user.practicedDisciplines &&
        <div className="column">
          <div className="box notification is-primary">
            <div className="heading">{this.state.user.username}s disciplines practiced</div>
            <ul>
              {this.state.user.practicedDisciplines.map(name =>
                <li className="subtitle" key={name.discipline}>
                  {name.discipline}
                </li>
              )}
            </ul>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default UsersShow;
