import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/header/Header'
class App extends Component {
  render() {
    return (
      <Router>

        <div className="App ">
      <Header />
      <div className="container">
       <h1> hello word</h1>
       </div>
      </div>
      </Router>   
    );
  }
}

export default App;
