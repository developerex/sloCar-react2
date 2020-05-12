import React from 'react';
import '../scss/Footer.scss';
import { Link } from 'react-router-dom';
import { znamke } from '../data/znamke';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__znamke">
          {' '}
          <h4>Znamke </h4>
          <ul>
            {znamke.slice(1).map(item => (
              <li key={item.id}>{item.znamka}</li>
            ))}
          </ul>
        </div>
        <div className="footer__links">
          {' '}
          <Link to="/">0 Nas</Link>
          <Link to="/">Ustvari oglas</Link>
          <Link to="/">Novice</Link>
          <Link to="/">Facebook</Link>
          <Link to="/">Instagram</Link>
          <Link to="/">Kontakt</Link>
        </div>
      </div>
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} |{' '}
        <Link to="/">Splosni pogoji</Link> | Created by{' '}
        <Link to="/">DM Group</Link>{' '}
      </p>
    </div>
  );
}
