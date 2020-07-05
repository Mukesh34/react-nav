import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import About from './About';
import Contact from './Contact';
import Home from './Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;