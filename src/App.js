import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { lawnServices, landscapeServices, fertilizerServices, snowServices } from './components/pages/Services'
import About from './components/pages/About';
import Footer from './components/Footer';
import error404 from "./components/pages/404";
import Quote from "./components/pages/Quote";

function App() {
  return (
    <div className="main__container">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/quote' component={Quote} />
          <Route path='/services/lawn' component={lawnServices} />
          <Route path='/services/landscape' component={landscapeServices} />
          <Route path='/services/fertilizer' component={fertilizerServices} />
          <Route path='/services/snow' component={snowServices} />
          <Route path='/about' component={About} />
          <Route component={error404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
