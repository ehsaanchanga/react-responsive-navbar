import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './App.css';
import Demo from './Demo';
import Home from './Home';
import KeyFeauture from './KeyFeauture';
import Prizing from './Prizing';
import Testimonial from './Testimonial';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" component={KeyFeauture} />
          <Route path="/prizing" component={Prizing} />
          <Route path="/testimonials" component={Testimonial} />
          <Route path="/demo" component={Demo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
