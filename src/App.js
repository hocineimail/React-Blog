import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import  { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/header/Header'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Addpost from './components/pages/Addpost'
import Contactme from './components/pages/Contactme'
import nopage from './components/pages/nopage'
class App extends Component {
  render() {
    return (
      <Provider store={store} > 
      <Router>

        <div className="App ">
      <Header />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/addpost" component={Addpost} />
        <Route exact path="/contactme" component={Contactme} />
        <Route exact path="/about" component={About} />
        <Route exact  component={nopage} />
      </Switch>
       
       </div>
      </div>
      </Router> 
      </Provider>  
    );
  }
}

export default App;
