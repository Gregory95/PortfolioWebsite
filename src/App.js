import React, { Component } from 'react';
import NavBar from './components/navbar-component';
import './App.css';
import LandingPage from './components/landingPage-component';

class App extends Component {
  render() {
    console.log('App - Rendered')
    return (
      <React.Fragment>
        <NavBar />
        <LandingPage />
        {/* 
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main> */}
      </React.Fragment>
    );
  }
}

export default App;
