import React from 'react';
import axios from 'axios';

import '../scss/singleAd/base.scss';
import SingleAd from '../components/SingleAd';
import Navbar from '../components/Navbar';

export default class SingleAdPage extends React.Component {
  state = {
    adData: {},
    bgBlack: false,
  };

  componentDidMount() {
    axios
      .get(
        `https://radiant-fortress-56278.herokuapp.com/posts/${this.props.match.params.ID}`
      )
      .then((res) => {
        this.setState({
          adData: res.data.message,
        });
      });
  }

  renderBgBlack = () => {
    this.setState({
      bgBlack: true,
    });
    document.documentElement.style.setProperty('--disableScroll', 'hidden');
  };

  closeImg = () => {
    this.setState({
      bgBlack: false,
    });
    document.documentElement.style.setProperty('--disableScroll', 'visible');
  };

  render() {
    return (
      <div
        className="Ad-container"
        style={{
          backgroundColor: this.state.bgBlack && 'rgba(0, 0, 0, .8)',
        }}
      >
        <SingleAd
          adData={this.state.adData}
          renderBgBlack={this.renderBgBlack}
          bgBlack={this.state.bgBlack}
          closeImg={this.closeImg}
        />
      </div>
    );
  }
}
