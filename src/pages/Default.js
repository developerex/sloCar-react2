import React from 'react';
import '../scss/Default.scss';
import Navbar from '../components/Navbar';

export default function Default() {
  return (
    <>
      <div className="default">
        <div>
          <h4>404</h4>
          <p>Iskana stran ne obstaja</p>
          <img src="/img/404.jpg" alt="jpg" />
          <div className="default__bg"></div>
        </div>
      </div>
    </>
  );
}
