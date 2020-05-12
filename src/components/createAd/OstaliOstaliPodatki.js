import React, { Component } from 'react';

import { CreateAdContextConsumer } from './CreateAdContext';
import '../../scss/createAd/OsnovniPodatki.scss';

import {
  lastnistvaData,
  tehnicniPreglediData,
  prveRegistracijeData,
  stanjaData,
  poreklaData,
  meseciData
} from '../../data/OstaliOstaliPodatkiData';

export default class OstaliPodatki extends Component {
  state = {
    focusCena: false,
    focusKm: false,
    focusEmisijeCO2: false,
    focusSteviloSedezev: false,
    focusmestnaPoraba: false,
    focusizvenmestnaPoraba: false,
    focusKombiniranaPoraba: false
  };

  render() {
    return (
      <CreateAdContextConsumer>
        {value => {
          const {
            prvaRegistracija,
            tehnicniPregled,
            lastnistvo,
            stanje,
            poreklo,
            potrjenaServisna,
            ustvariOglasHandleChange
          } = value;
          return (
            <div className="createAdOsnovniPodatki">
              {/* prvaRegistracija */}
              <div className="LetoMesec">
                <select
                  name="prvaRegistracija"
                  id="prvaRegistracija"
                  onChange={ustvariOglasHandleChange}
                  //value={prvaRegistracija}
                  value="1. registracija"
                >
                  {prveRegistracijeData.map(item => {
                    return (
                      <option key={item.id} value={item.prvaRegistracija}>
                        {item.prvaRegistracija}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="prvaRegistracija"
                  id="prvaRegistracija"
                  onChange={ustvariOglasHandleChange}
                  //value={prvaRegistracija}
                  value="Mesec"
                >
                  {prvaRegistracija !== '1. registracija' ? (
                    meseciData.map(item => {
                      return (
                        <option
                          key={item.id}
                          value={`${item.mesec} ${
                            prvaRegistracija.split(' ').length > 1
                              ? prvaRegistracija.split(' ')[1]
                              : prvaRegistracija
                          }`}
                        >
                          {item.mesec === 'mesec'
                            ? 'Mesec'
                            : `${item.mesec} ${
                                prvaRegistracija.split(' ').length > 1
                                  ? prvaRegistracija.split(' ')[1]
                                  : prvaRegistracija
                              }`}
                        </option>
                      );
                    })
                  ) : (
                    <option disabled defaultValue>
                      Mesec
                    </option>
                  )}
                </select>
                <p className="selectedOption">
                  {prvaRegistracija !== '1. registracija'
                    ? prvaRegistracija
                    : null}
                </p>
              </div>
              {/* end prvaRegistracija */}
              {/* tehnicniPregled */}
              <div className="LetoMesec">
                <select
                  name="tehnicniPregled"
                  id="tehnicniPregled"
                  onChange={ustvariOglasHandleChange}
                  //value={tehnicniPregled}
                  value="Tehnicni pregled"
                >
                  {tehnicniPreglediData.map(item => {
                    return (
                      <option key={item.id} value={item.tehnicniPregled}>
                        {item.tehnicniPregled === 'tehnicni pregled'
                          ? 'Tehnicni pregled'
                          : item.tehnicniPregled}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="tehnicniPregled"
                  id="tehnicniPregled"
                  onChange={ustvariOglasHandleChange}
                  //value={tehnicniPregled}
                  value="Mesec"
                >
                  {tehnicniPregled !== 'tehnicni pregled' ? (
                    meseciData.map(item => {
                      return (
                        <option
                          key={item.id}
                          value={`${item.mesec} ${
                            tehnicniPregled.split(' ').length > 1
                              ? tehnicniPregled.split(' ')[1]
                              : tehnicniPregled
                          }`}
                        >
                          {item.mesec === 'mesec'
                            ? 'Mesec'
                            : `${item.mesec} ${
                                tehnicniPregled.split(' ').length > 1
                                  ? tehnicniPregled.split(' ')[1]
                                  : tehnicniPregled
                              }`}
                        </option>
                      );
                    })
                  ) : (
                    <option disabled defaultValue>
                      Mesec
                    </option>
                  )}
                </select>
                <p className="selectedOption">
                  {tehnicniPregled !== 'tehnicni pregled'
                    ? tehnicniPregled
                    : null}
                </p>
              </div>
              {/* end tehnicniPregled */}
              {/* lastnistvo */}
              <div>
                <select
                  name="lastnistvo"
                  id="lastnistvo"
                  onChange={ustvariOglasHandleChange}
                  //value={lastnistvo}
                  value="Lastnistvo"
                >
                  {lastnistvaData.map(item => {
                    return (
                      <option key={item.id} value={item.lastnik}>
                        {item.lastnik === 'lastnistvo'
                          ? 'Lastnistvo'
                          : item.lastnik}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {lastnistvo !== 'lastnistvo' ? lastnistvo : null}
                </p>
              </div>
              {/* end lastnistvo */}
              {/* stanje */}
              <div>
                <select
                  name="stanje"
                  id="stanje"
                  onChange={ustvariOglasHandleChange}
                  //value={stanje}
                  value="Stanje"
                >
                  {stanjaData.map(item => {
                    return (
                      <option key={item.id} value={item.stanje}>
                        {item.stanje === 'stanje' ? 'Stanje' : item.stanje}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {stanje !== 'stanje' ? stanje : null}
                </p>
              </div>
              {/* end stanje */}
              {/* poreklo */}
              <div>
                <select
                  name="poreklo"
                  id="poreklo"
                  onChange={ustvariOglasHandleChange}
                  //value={poreklo}
                  value="Poreklo"
                >
                  {poreklaData.map(item => {
                    return (
                      <option key={item.id} value={item.poreklo}>
                        {item.poreklo === 'poreklo' ? 'Poreklo' : item.poreklo}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {poreklo !== 'poreklo' ? poreklo : null}
                </p>
              </div>
              {/* end poreklo */}
              {/* potrjenaServisna */}
              <div className="potrjenaServisna">
                <label>Potrjena Servisna</label>
                <input
                  type="checkbox"
                  name="potrjenaServisna"
                  checked={potrjenaServisna}
                  onChange={ustvariOglasHandleChange}
                  value="Da"
                />
                <label>Da</label>
              </div>
              {/* end potrjenaServisna */}
            </div>
          );
        }}
      </CreateAdContextConsumer>
    );
  }
}
