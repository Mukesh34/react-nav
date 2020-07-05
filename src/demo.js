import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import About from './About.js';
import Contact from './Contact.js';
import Home from './Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;