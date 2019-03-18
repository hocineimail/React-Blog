import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/header/Header'
class App extends Component {
  render() {
    return (
      <div className="App ">
      <Header />
      <div className="container">
       <h1> hello word</h1>
       </div>
      </div>
    );
  }
}

export default App;
