import React, { Component } from 'react';

import { CreateAdContextConsumer } from './CreateAdContext';
import '../../scss/createAd/OsnovniPodatki.scss';

import { znamke } from '../../data/znamke';
import { modeli } from '../../data/modeli';
import { motorjiOd } from '../../data/motorji';
import { oblike } from '../../data/oblike';
import { prostornineOd } from '../../data/prostornine';
import { letnikiOd } from '../../data/letniki';
import { goriva } from '../../data/goriva';

export default class OsnovniPodatki extends Component {
  state = {
    focusCena: false,
    focusKm: false
  };
  render() {
    return (
      <CreateAdContextConsumer>
        {value => {
          const {
            znamka,
            model,
            cena,
            km,
            letnik,
            prostornina,
            motor,
            oblika,
            gorivo,
            focusCena,
            focusKm,
            ustvariOglasHandleChange,
            modelToModel,
            changeStateToTrue,
            changeStateToFalse
          } = value;
          return (
            <div className="createAdOsnovniPodatki">
              {/* znamka */}
              <div className="reateAdOsnovniPodatki__znamka">
                <select
                  name="znamka"
                  id="znamka"
                  onChange={ustvariOglasHandleChange}
                  //value={this.state.znamka}
                  value="Znamka"
                  onClick={modelToModel}
                >
                  {znamke.map(item => {
                    return (
                      <option key={item.id} value={item.znamka}>
                        {item.znamka === 'znamka' ? 'Znamka' : item.znamka}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {znamka !== 'znamka' ? (
                    <img
                      src={`/logo/${znamka}.png`}
                      style={{ height: '30px' }}
                      alt="znamka"
                    />
                  ) : null}
                </p>
              </div>
              {/* end znamka */}
              {/* model */}
              <div className="reateAdOsnovniPodatki__model">
                <select
                  name="model"
                  id="model"
                  onChange={ustvariOglasHandleChange}
                  //value={model}
                  value="Model"
                >
                  {modeli.find(item => item.znamka === znamka) ? (
                    modeli
                      .find(item => item.znamka === znamka)
                      .modeli.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item === 'model' ? 'Model' : item}
                          </option>
                        );
                      })
                  ) : (
                    <option value="model" disabled selected>
                      Model
                    </option>
                  )}
                </select>
                <p className="selectedOption">
                  {model !== 'model' ? model : null}
                </p>
              </div>
              {/* end model */}
              {/* cena */}
              <div>
                <input
                  type="number"
                  name="cena"
                  id="cena"
                  onChange={ustvariOglasHandleChange}
                  placeholder="Cena"
                  onFocus={() => this.setState({ focusCena: true })}
                  onBlur={() => this.setState({ focusCena: false })}
                  value={this.state.focusCena && cena !== 0 ? cena : 'Cena'}
                />
                <p className="selectedOption">
                  {cena !== 0 &&
                    cena !== '' &&
                    `${cena
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} €`}
                </p>
              </div>
              {/* end cena */}
              {/* prostornina */}
              <div>
                <select
                  name="prostornina"
                  id="prostornina"
                  onChange={ustvariOglasHandleChange}
                  //value={prostornina}
                  value="Prostornina motorja"
                >
                  {prostornineOd.map(item => {
                    return (
                      <option key={item.id} value={item.prostorninaOd}>
                        {item.id > 0
                          ? item.prostorninaOd + ' ccm'
                          : 'Prostornina motorja'}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {prostornina !== 'prostornina motorja od' &&
                    `${prostornina} ccm`}
                </p>
              </div>
              {/* end prostornina */}
              {/* motor */}
              <div>
                <select
                  name="motor"
                  id="motor"
                  onChange={ustvariOglasHandleChange}
                  //value={motor}
                  value="Moc motorja"
                >
                  {motorjiOd.map(item => {
                    return (
                      <option key={item.id} value={item.motorOd}>
                        {item.id > 0 ? item.motorOd + ' KM' : 'Moc motorja'}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {motor !== 'moc motorja od' && `${motor} KM`}
                </p>
              </div>
              {/* end motor */}
              {/* letnik */}
              <div>
                <select
                  name="letnik"
                  id="letnik"
                  onChange={ustvariOglasHandleChange}
                  //value={letnik}
                  value="Letnik"
                >
                  {letnikiOd.map(item => {
                    return (
                      <option key={item.id} value={item.letnikOd}>
                        {item.id > 0 ? item.letnikOd : 'Letnik'}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {letnik !== 'letnik od' && `${letnik}`}
                </p>
              </div>
              {/* end letnik */}
              {/* km */}
              <div>
                <input
                  type="number"
                  name="km"
                  id="km"
                  onChange={ustvariOglasHandleChange}
                  placeholder="Prevozeni kilometri"
                  onFocus={() => this.setState({ focusKm: true })}
                  onBlur={() => this.setState({ focusKm: false })}
                  value={
                    this.state.focusKm && km !== 0 ? km : 'Prevozeni kilometri'
                  }
                />
                <p className="selectedOption">
                  {km !== '' &&
                    km !== 0 &&
                    `${km
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} km`}
                </p>
              </div>
              {/* end km */}
              {/* poraba --> oblika */}
              <div>
                <select
                  name="oblika"
                  id="oblika"
                  onChange={ustvariOglasHandleChange}
                  //value={oblika}
                  value="Oblika"
                >
                  {oblike.map(item => {
                    return (
                      <option key={item.id} value={item.oblika}>
                        {item.oblika === 'oblika' ? 'Oblika' : item.oblika}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {oblika !== 'oblika' && `${oblika}`}
                </p>
              </div>
              {/* gorivo */}
              <div>
                <select
                  name="gorivo"
                  id="gorivo"
                  onChange={ustvariOglasHandleChange}
                  //value={gorivo}
                  value="Gorivo"
                >
                  {goriva.map(item => {
                    return (
                      <option key={item.id} value={item.gorivo}>
                        {item.gorivo === 'gorivo' ? 'Gorivo' : item.gorivo}
                      </option>
                    );
                  })}
                </select>
                <p className="selectedOption">
                  {gorivo !== 'gorivo' && `${gorivo}`}
                </p>
              </div>
            </div>
          );
        }}
      </CreateAdContextConsumer>
    );
  }
}
