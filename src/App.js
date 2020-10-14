import React from 'react';

import Navbar from './components/Navbar/Navbar.component';
import HomePage from './components/Pages/HomePage/HomePage.component';
import Footer from './components/Footer/Footer.component';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Stories from '../src/components/Pages/Stories/Stories.component';
import Features from '../src/components/Pages/Features/Features.component';
import Pricing from '../src/components/Pages/Pricing/Pricing.component';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/stories" component={Stories} />
        <Route path="/features" component={Features} />
        <Route path="/pricing" component={Pricing} /> 
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
