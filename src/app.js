import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersIndex from './components/users/Index';
import UsersShow from './components/users/Show';
import UsersEdit from './components/users/Edit';
import Home from './components/pages/Home';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import 'bulma';
import './scss/style.scss';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <section>
            <div className="container">
              <Switch>
                <Route path="/users/:id/edit" component={UsersEdit} />
                <Route path="/users/:id" component={UsersShow} />
                <Route path="/users" component={UsersIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
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
