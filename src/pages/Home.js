import React from 'react';
import Search from '../components/Search';
import Navbar from './../components/Navbar';
import LastAds from '../components/LastAds';

import '../scss/naslovna/base.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className="naslovna-container">
        <Search />
        <LastAds />
      </div>
    );
  }
}
