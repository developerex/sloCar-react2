import React, { Component, useEffect } from 'react';
import '../../scss/createAd/UploadImages.scss';
import { CreateAdContextConsumer } from './CreateAdContext';

export default class UploadImages extends Component {
  render() {
    return (
      <CreateAdContextConsumer>
        {value => {
          const {
            handleNaslovna,
            handleOstaleSlike,
            ostaleSlike,
            naslovna
          } = value;
          return (
            <div className="uploadImages">
              <div className="uploadImages__naslovna">
                <label htmlFor="naslovna" className="uploadImages__btn">
                  Naslovna slika
                </label>
                <input
                  type="file"
                  id="naslovna"
                  name="naslovna"
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={e => handleNaslovna(e)}
                />
                {naslovna !== '' && (
                  <img
                    src={naslovna}
                    alt="naslovna"
                    style={{ maxHeight: '150px' }}
                  />
                )}
              </div>
              <div className="uploadImages__ostaleSlike">
                <label htmlFor="ostaleSlike" className="uploadImages__btn">
                  Ostale slike
                </label>
                <input
                  type="file"
                  id="ostaleSlike"
                  name="ostaleSlike"
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={e => handleOstaleSlike(e)}
                  multiple
                />
                <div className="uploadImages__ostaleSlike--preview">
                  {ostaleSlike !== [] &&
                    ostaleSlike.map(item => <img key={item} src={item} />)}
                </div>
              </div>
            </div>
          );
        }}
      </CreateAdContextConsumer>
    );
  }
}
