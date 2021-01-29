import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { HashRouter, Switch, Route } from 'react-router-dom';
import {lawnServices, landscapeServices, snowServices, cleanup} from './components/pages/Services'
import About from './components/pages/About';
import Footer from './components/Footer';
import error404 from "./components/pages/404";
import Quote from "./components/pages/Quote";
import Appointment from "./components/pages/Appointment"
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/pages/Testimonials";

function App() {
  return (
    <div className="main__container">
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/quote' exact component={Quote} />
          <Route path='/schedule' exact component={Appointment} />
          <Route path='/services/lawn' exact component={lawnServices} />
          <Route path='/services/landscape' exact component={landscapeServices} />
          <Route path='/services/snow' exact component={snowServices} />
          <Route path='/services/cleanup' exact component={cleanup} />
          <Route path='/about' exact component={About} />
          <Route path='/testimonials' exact component={Testimonials} />
          <Route component={error404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
