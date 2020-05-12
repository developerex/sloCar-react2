import React, { Component } from 'react';
import '../scss/list/AdListSidebarRight.scss';
import { AdConsumer } from '../context/context';

export default class AdListSidebarRight extends Component {
  state = {
    sort: true
  };

  handleSort = () => {
    this.setState({
      sort: !this.state.sort
    });
  };
  render() {
    return (
      <AdConsumer>
        {value => {
          const { filteredAds, handleChange, razvrstitev } = value;

          return (
            <div className="adList-sidebarRight">
              <button
                className="adList-sidebarRight__sort"
                onClick={this.handleSort}
              >
                {this.state.sort === true ? 'Skrij razvrscanje' : 'Razvrsti'}
              </button>
              <div
                className={
                  this.state.sort
                    ? 'adList-sidebarRight__content adList-sidebarRight__content--sort--true'
                    : 'adList-sidebarRight__content adList-sidebarRight__content--sort--false'
                }
              >
                <label htmlFor="razvrstitev">Razvrstitev</label>
                <select
                  name="razvrstitev"
                  id="razvrstitev"
                  onChange={handleChange}
                  value={razvrstitev}
                >
                  <option value="datumdol">po datumu padajoce</option>
                  <option value="datumgor">po datumu narascajoce</option>
                  <option value="cenadol">po ceni padajoce</option>
                  <option value="cenagor">po ceni narascajoce</option>
                  <option value="kmdol">po kilometrih padajoce</option>
                  <option value="kmgor">po kilometrih narascajoce</option>
                  <option value="letnikdol">po letniku padajoce</option>
                  <option value="letnikgor">po letniku narascajoce</option>
                </select>
              </div>
            </div>
          );
        }}
      </AdConsumer>
    );
  }
}
