import React, { Component } from 'react';

import { CreateAdContextConsumer } from './CreateAdContext';
import '../../scss/createAd/OsnovniPodatki.scss';

import {
  valjiData,
  pogoniData,
  vrataData,
  menjalnikiData,
  emisijskiRazrediData,
  barveData,
  materialiNotranjostiData
} from '../../data/OstaliPodatkiData';

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
            valji,
            menjalnik,
            pogon,
            vrata,
            emisijskiRazred,
            emisijeCO2,
            steviloSedezev,
            barvaNotranjosti,
            barvaZunanjosti,
            materialNotranjosti,
            mestnaPoraba,
            izvenmestnaPoraba,
            kombiniranaPoraba,
            ustvariOglasHandleChange
          } = value;
          return (
            <div className="createAdOsnovniPodatki">
              {/* valji */}
              <div>
                <select
                  name="valji"
                  id="valji"
                  onChange={ustvariOglasHandleChange}
                  //value={valji}
                  value="Valji"
                >
                  {valjiData.map(item => {
                    return (
                      <option key={item.id} value={item.valji}>
                        {item.valji === 'stevilo valjev'
                          ? 'Stevilo valjev'
                          : item.valji}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {valji !== 'stevilo valjev' ? valji : null}
                </p>
              </div>
              {/* end valji */}
              {/* pogon */}
              <div>
                <select
                  name="pogon"
                  id="pogon"
                  onChange={ustvariOglasHandleChange}
                  //value={pogon}
                  value="Pogon"
                >
                  {pogoniData.map(item => {
                    return (
                      <option key={item.id} value={item.pogon}>
                        {item.pogon === 'pogon' ? 'Pogon' : item.pogon}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {pogon !== 'pogon' ? pogon : null}
                </p>
              </div>
              {/* end pogon */}
              {/* menjalnik */}
              <div>
                <select
                  name="menjalnik"
                  id="menjalnik"
                  onChange={ustvariOglasHandleChange}
                  //value={menjalnik}
                  value="Menjalnik"
                >
                  {menjalnikiData.map(item => {
                    return (
                      <option key={item.id} value={item.menjalnik}>
                        {item.menjalnik === 'menjalnik'
                          ? 'Menjalnik'
                          : item.menjalnik}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {menjalnik !== 'menjalnik' ? menjalnik : null}
                </p>
              </div>
              {/* end menjalnik */}
              {/* vrata */}
              <div>
                <select
                  name="vrata"
                  id="vrata"
                  onChange={ustvariOglasHandleChange}
                  //value={vrata}
                  value="Vrata"
                >
                  {vrataData.map(item => {
                    return (
                      <option key={item.id} value={item.vrata}>
                        {item.vrata === 'stevilo vrat'
                          ? 'Stevilo vrat'
                          : item.vrata}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {vrata !== 'stevilo vrat' ? vrata : null}
                </p>
              </div>
              {/* end vrata */}
              {/* emisijskiRazred-emisijeCO2 */}
              <div className="emisijskiRazred-emisijeCO2">
                <select
                  name="emisijskiRazred"
                  id="emisijskiRazred"
                  onChange={ustvariOglasHandleChange}
                  //value={emisijskiRazred}
                  value="emisijskiRazred"
                >
                  {emisijskiRazrediData.map(item => {
                    return (
                      <option key={item.id} value={item.emisijskiRazred}>
                        {item.emisijskiRazred === 'emisijski razred'
                          ? 'Emisijski razred'
                          : item.emisijskiRazred}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="number"
                  name="emisijeCO2"
                  id="emisijeCO2"
                  onChange={ustvariOglasHandleChange}
                  placeholder="Emisije CO2"
                  onFocus={() => this.setState({ focusEmisijeCO2: true })}
                  onBlur={() => this.setState({ focusEmisijeCO2: false })}
                  value={
                    this.state.focusEmisijeCO2 && emisijeCO2 !== 'emisije CO2'
                      ? emisijeCO2
                      : 'Emisije CO2'
                  }
                />
                <p className="selectedOption">
                  {emisijskiRazred !== 'emisijski razred'
                    ? emisijskiRazred
                    : null}
                </p>
                <p className="selectedOption">
                  {emisijeCO2 !== 0 &&
                    emisijeCO2 !== '' &&
                    emisijeCO2 !== 'emisije CO2' &&
                    `${emisijeCO2
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} g/km`}
                </p>
              </div>
              {/* end emisijskiRazred */}
              {/* barvaZunanjosti */}
              <div>
                <select
                  name="barvaZunanjosti"
                  id="barvaZunanjosti"
                  onChange={ustvariOglasHandleChange}
                  //value={barvaZunanjosti}
                  value="Barva zunanjosti"
                >
                  {barveData.map(item => {
                    return (
                      <option key={item.id} value={item.barva}>
                        {item.barva === 'barva'
                          ? 'Barva zunanjosti'
                          : item.barva}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {barvaZunanjosti !== 'barva' ? barvaZunanjosti : null}
                </p>
              </div>
              {/* end barvaZunanjosti */}
              {/* barvaNotranjosti */}
              <div>
                <select
                  name="barvaNotranjosti"
                  id="barvaNotranjosti"
                  onChange={ustvariOglasHandleChange}
                  //value={barvaNotranjosti}
                  value="Barva notranjosti"
                >
                  {barveData.map(item => {
                    return (
                      <option key={item.id} value={item.barva}>
                        {item.barva === 'barva'
                          ? 'Barva notranjosti'
                          : item.barva}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {barvaNotranjosti !== 'barva' ? barvaNotranjosti : null}
                </p>
              </div>
              {/* end barvaNotranjosti */}
              {/* steviloSedzev-Material */}
              <div className="steviloSedzev-Material">
                <select
                  name="materialNotranjosti"
                  id="materialNotranjosti"
                  onChange={ustvariOglasHandleChange}
                  //value={materialNotranjosti}
                  value="materialNotranjosti"
                >
                  {materialiNotranjostiData.map(item => {
                    return (
                      <option key={item.id} value={item.materialNotranjosti}>
                        {item.materialNotranjosti === 'material notranjosti'
                          ? 'Material notranjosti'
                          : item.materialNotranjosti}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="number"
                  name="steviloSedezev"
                  id="steviloSedezev"
                  onChange={ustvariOglasHandleChange}
                  placeholder="St. sedezev"
                  onFocus={() => this.setState({ focusSteviloSedezev: true })}
                  onBlur={() => this.setState({ focusSteviloSedezev: false })}
                  value={
                    this.state.focusSteviloSedezev &&
                    steviloSedezev !== 'stevilo sedezev'
                      ? steviloSedezev
                      : 'Stevilo sedezev'
                  }
                />
                <p className="selectedOption">
                  {materialNotranjosti !== 'material notranjosti'
                    ? materialNotranjosti
                    : null}
                </p>
                <p className="selectedOption">
                  {steviloSedezev !== 0 &&
                    steviloSedezev !== '' &&
                    steviloSedezev !== 'stevilo sedezev' &&
                    `${steviloSedezev
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}
                </p>
              </div>
              {/* end steviloSedzev-Material */}
              {/* poraba */}
              <div className="createAdOsnovniPodatki__poraba">
                <input
                  type="number"
                  name="mestnaPoraba"
                  id="mestnaPoraba"
                  onChange={ustvariOglasHandleChange}
                  placeholder="Mestna poraba"
                  onFocus={() => this.setState({ focusMestnaPoraba: true })}
                  onBlur={() => this.setState({ focusMestnaPoraba: false })}
                  value={
                    this.state.focusMestnaPoraba && mestnaPoraba !== 0
                      ? mestnaPoraba
                      : 'Mestna poraba'
                  }
                />
                <input
                  type="number"
                  name="izvenmestnaPoraba"
                  id="izvenmestnaPoraba"
                  onChange={ustvariOglasHandleChange}
                  placeholder="Izvenestna poraba"
                  onFocus={() =>
                    this.setState({ focusIzvenmestnaPoraba: true })
                  }
                  onBlur={() =>
                    this.setState({ focusIzvenmestnaPoraba: false })
                  }
                  value={
                    this.state.focusIzvenmestnaPoraba && izvenmestnaPoraba !== 0
                      ? izvenmestnaPoraba
                      : 'Mestna poraba'
                  }
                />
                <input
                  type="number"
                  name="kombiniranaPoraba"
                  id="kombiniranaPoraba"
                  onChange={ustvariOglasHandleChange}
                  placeholder="Kombinirana poraba"
                  onFocus={() =>
                    this.setState({ focusKombiniranaPoraba: true })
                  }
                  onBlur={() =>
                    this.setState({ focusKombiniranaPoraba: false })
                  }
                  value={
                    this.state.focusKombiniranaPoraba && kombiniranaPoraba !== 0
                      ? kombiniranaPoraba
                      : 'Kombinirana poraba'
                  }
                />
                <p className="selectedOption">
                  {mestnaPoraba !== 0 &&
                    mestnaPoraba !== '' &&
                    mestnaPoraba !== 'Mestna poraba' &&
                    `${mestnaPoraba
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} l/100km`}
                </p>
                <p className="selectedOption">
                  {izvenmestnaPoraba !== 0 &&
                    izvenmestnaPoraba !== '' &&
                    izvenmestnaPoraba !== 'Mestna poraba' &&
                    `${izvenmestnaPoraba
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} l/100km`}
                </p>

                <p className="selectedOption">
                  {kombiniranaPoraba !== 0 &&
                    kombiniranaPoraba !== '' &&
                    kombiniranaPoraba !== 'Kombinirana poraba' &&
                    `${kombiniranaPoraba
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} l/100km`}
                </p>
              </div>
              {/* end poraba */}
            </div>
          );
        }}
      </CreateAdContextConsumer>
    );
  }
}
