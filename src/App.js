import React, { Component } from 'react';
import NavBar from './components/navbar-component';
import LandingPage from './components/landingPage-component';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
  render() {
    console.log('App - Rendered')
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <LandingPage />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
