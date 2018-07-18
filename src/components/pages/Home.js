import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class Home extends React.Component {

  state={

  }

  render() {
    return <div>
      <section className="hero is-fullheight">
        <div className="image-gallery">
          <ul>
            <li id="one">
              <img src="https://i.imgur.com/TOExWVb.png" alt="Dipak Choudhury slaying Sam Murray"/>
            </li>
            <li id="two">
              <img src="https://i.imgur.com/aBn2oq9.png" alt="GB team at Ijima cup"/>
            </li>
            <li id="three">
              <img src="https://i.imgur.com/gVXOn0f.png" alt="Onigiri girls at London Cup"/>
            </li>
            <li id="four">
              <img src="https://i.imgur.com/qbXJf7B.png" alt="Declan Tomás Clowry and Young Park in Seiza"/>
            </li>
          </ul>
        </div>
        <div className="hero-body">
          <div className="container home-container has-text-left">
            <div className="rectangle"></div>
            <h1 className="title tracking-in-contract ">
              kendo<em>.io</em>
            </h1>
            <h2 className="subtitle">
              Focus on being better than you were yesterday
            </h2>
            {!Auth.isAuthenticated() && <Link to="/login"><i className="fas fa-arrow-alt-circle-right fa-5x"></i></Link>}
            {Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().sub}`}><i className="fas fa-arrow-alt-circle-right fa-2x"></i></Link>}

          </div>
        </div>
      </section>
    </div>;
  }
}

export default Home;
