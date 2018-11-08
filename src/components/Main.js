import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './Main.css';
import Navbar from './Navbar';
import Footer from './Footer';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Dashboard from './Dashboard';
import PropertyView from './PropertyView';
import EditProperty from './EditProperty';
import EditImprovementElement from './EditImprovement';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div className="Main">
          <Navbar />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/:slug" component={PropertyView} />
          <Route exact path="/dashboard/:slug/edit" component={EditProperty} />
          <Route exact path="/dashboard/:slug/improvement/:id" component={EditImprovementElement} />
          <Footer />
        </div>
      </Router>
    );
  }
}


