import React, { Component } from 'react';
import '../../scss/createAd/Vin.scss';

import { CreateAdContextConsumer } from './CreateAdContext';

export default class Vin extends Component {
  render() {
    return (
      <CreateAdContextConsumer>
        {value => {
          return (
            <div className="vin">
              <label htmlFor="vin">Vnesite vaso vin stevilko avtomobila</label>
              <input
                placeholder="WV2ZZZ70ZSH123456"
                size="28"
                name="vin"
                id="vin"
              />
              <button>Potrdi</button>
              <p>
                V kolikor zelite lahko poenostavite in pospesite vaso objavo
                oglasa z uporabito brezplačnega VIN dekoderja.
              </p>
              <p>
                VIN dekoder omogoca pridobivanje osnovnih podatkov o vasem
                vozilu (kot je npr znamka, model, poraba, ...), ki so del
                evidence, ki jo vodi Statistični urad Republike Slovenije.
              </p>
              <p>
                V kolikor tega ne zelite, lahko prosto nadaljujete z objavo
                oglasa s klikom na Naprej.
              </p>
            </div>
          );
        }}
      </CreateAdContextConsumer>
    );
  }
}
