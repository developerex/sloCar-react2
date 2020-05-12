import React, { Component } from 'react';
import '../../scss/createAd/ObjaviOglasDiv.scss';

import { CreateAdContextConsumer } from './CreateAdContext';

export default class ObjaviOglasDiv extends Component {
  render() {
    console.log(this.state);
    return (
      <CreateAdContextConsumer>
        {value => {
          const {
            kontakti,
            ustvariOglasHandleChange,
            kontaktiHandleChange
          } = value;
          return (
            <div className="objaviOglasDiv">
              <h3>Kontakt/i</h3>
              <div className="objaviOglasDiv__kontakt">
                <input
                  type="text"
                  name="kontaktIme"
                  id="kontaktIme"
                  placeholder="Ime"
                />
                <input
                  type="number"
                  name="kontaktTel"
                  placeholder="Telefonska stevilka"
                  id="kontaktTel"
                />
                <button
                  onClick={() =>
                    kontaktiHandleChange(
                      document.getElementById('kontaktIme').value,
                      document.getElementById('kontaktTel').value
                    )
                  }
                >
                  Dodaj kontakt
                </button>
                <ul
                  style={{
                    border: `${kontakti.length > 0 ? '2px solid #555' : 'none'}`
                  }}
                >
                  {kontakti.map((item, index) => (
                    <li key={index}>
                      {item.ime} - {item.st}
                    </li>
                  ))}
                </ul>
              </div>
              <h3>Ostale informacije o oglasu</h3>
              <textarea
                name="ostaloText"
                id="ostaloText"
                cols="30"
                rows="5"
                placeholder="Vozilo ima motor v okvari..."
                onChange={ustvariOglasHandleChange}
              ></textarea>
              <button>Objavi oglas</button>
            </div>
          );
        }}
      </CreateAdContextConsumer>
    );
  }
}
