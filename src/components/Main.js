import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './Main.css';
import Navbar from './Navbar';
import Footer from './Footer';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import Logout from './Logout';
import RegisterPage from './RegisterPage';
import Dashboard from './Dashboard';
import PropertyView from './PropertyView';
import EditProperty from './EditProperty';
import EditImprovement from './EditImprovement';
import AddProperty from './AddProperty';
import AddImprovement from './AddImprovement';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/add" component={AddProperty} />
            <Route exact path="/dashboard/:slug" component={PropertyView} />
            <Route exact path="/dashboard/:slug/add-improvement" component={AddImprovement} />
            <Route exact path="/dashboard/:slug/edit" component={EditProperty} />
            <Route exact path="/dashboard/:slug/improvement/:id" component={EditImprovement} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}


