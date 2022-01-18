import React, { Component } from 'react';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import NavBar from './components/navbar-component';
import LandingPage from './components/landingPage-component';
import About from './components/about-component';
import Portfolio from './components/portfolio.component';
import Skills from './components/skills-component';
import ContactForm from './components/contact-component';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <LandingPage />
          <About />
          <Portfolio />
          <Skills />
          <ContactForm />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
