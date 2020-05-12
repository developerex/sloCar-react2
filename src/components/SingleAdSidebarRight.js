import React, { Component } from 'react';
import '../scss/singleAd/SingleAdSidebarRight.scss';

export default class SingleAdSidebarRight extends Component {
  render() {
    return (
      <div className="SingleAdSidebarRight">
        <div className="SingleAdSidebarRight__images">
          {this.props.images.map((img, index) => (
            <div
              key={index}
              className={
                img === this.props.images[this.props.count]
                  ? 'SingleAdSidebarRight__images--active'
                  : ''
              }
            >
              <img
                src={img}
                alt="img"
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.handleSmallImgClick(index)}
              ></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
