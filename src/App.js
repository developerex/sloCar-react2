import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CreateAdPage from './pages/CreateAdPage';
import AdsPage from './pages/AdsPage';
import SingleAdPage from './pages/SingleAdPage';
import Default from './pages/Default';
import Footer from './components/Footer';
import Prijava from './components/Prijava';
import Racun from './pages/Racun';
import PonastavitevGesla from './components/PonastavitevGesla';
import PotrditevEmaila from './components/PotrditevEmaila';
import Navbar from './components/Navbar';
import PriljubljenoPage from './pages/PriljubljenoPage';
import PrimerjavaPage from './pages/PrimerjavaPage';

import './scss/AppBase.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createad" component={CreateAdPage} />
          <Route path="/ads" exact component={AdsPage} />
          <Route path="/ads/:ID" component={SingleAdPage} />
          <Route path="/prijava" exact component={Prijava} />
          <Route path="/racun" exact component={Racun} />
          <Route path="/priljubljeno" exact component={PriljubljenoPage} />
          <Route path="/primerjava" exact component={PrimerjavaPage} />

          <Route
            path="/ponastavitev-gesla/:token"
            exact
            component={PonastavitevGesla}
          />
          <Route
            path="/potrditev-racuna/:TOKEN"
            exact
            component={PotrditevEmaila}
          />
          <Route component={Default} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
