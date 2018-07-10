import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersIndex from './components/users/Index';
import Home from './components/pages/Home';
import Footer from './components/common/Footer';
import 'bulma';
import './scss/style.scss';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <section>
            <div className="container">
              <h1>TEAM CHARTREUSE</h1>
              <Switch>
                <Route path="/users" component={UsersIndex} />
                <Route exact path="/" component={Home} />
              </Switch>

            </div>
          </section>
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
