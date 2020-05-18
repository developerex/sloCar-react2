import React, { Component } from 'react';
import '../scss/list/AdListSidebarRight.scss';
import { AdConsumer } from '../context/context';

export default class AdListSidebarRight extends Component {
  render() {
    return (
      <AdConsumer>
        {(value) => {
          const { filteredAds, handleChange, razvrstitev } = value;

          return (
            <div
              className={
                this.props.scroll
                  ? 'adList-sidebarRight adList-sidebarRight--true'
                  : 'adList-sidebarRight'
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
          );
        }}
      </AdConsumer>
    );
  }
}
