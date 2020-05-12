import React, { Component } from 'react';
import '../../scss/createAd/Oprema.scss';

import { CreateAdContextConsumer } from './CreateAdContext';

export default class Oprema extends Component {
  hideDiv = e => {
    const opremaDiv = document.getElementById('idOprema2');
    const divs = opremaDiv.children;
    const divsArray = Array.from(divs);
    divsArray.forEach(item => {
      item.classList.add('oprema__addClassDiv');
      item.getElementsByTagName('ul')[0].classList.add('oprema__addClassUl');
      item
        .getElementsByTagName('button')[0]
        .classList.remove('oprema__addBtnBg');
    });
    const selectedDiv = e.target.parentNode;
    selectedDiv.classList.remove('oprema__addClassDiv');
    selectedDiv
      .getElementsByTagName('ul')[0]
      .classList.remove('oprema__addClassUl');
    selectedDiv
      .getElementsByTagName('button')[0]
      .classList.toggle('oprema__addBtnBg');
  };

  render() {
    return (
      <CreateAdContextConsumer>
        {value => {
          const {
            ustvariOglasHandleChange,
            headUp,
            digitalniStevci,
            panoramskaStreha,
            ogrevanVolan,
            ogrevaniSedeziSpredaj,
            ogrevaniSedeziZadaj,
            elektricnoNastavljivVoznikovSedez,
            elektricnoNastavljivaSprednjaSedeza,
            sportniSedezi,
            prezracevanaSprednjaSedeza,
            prezracevaniVsiSedezi,
            podporaZaLedveniDel,
            masazniSedezi,
            naslonjaloZaRoke,
            vlecnaKljuka,
            stresneSani,
            samodejnoOdpiranjePrtljaznika,
            sportnoVzmetenje,
            zracnoVzmetenje,
            nastavljivoVzmetenje,
            senzorjiSpredaj,
            senzorjiZadaj,
            avtoParkiranjeAsist,
            parkiranjeSPrikolicoAsist,
            kameraZaVzvratnoVoznjo,
            tristosestdesetKamera,
            tristosestdesetSenzorji,
            litaPlatisca,
            aluPlatisca,
            letnePnevmatike,
            zimskePnevmatike,
            celoletnePnevmatike,
            sistemZaPopraviloKolesa,
            rezervnoKolo,
            runFlat,
            senzorTlakaVPnevmatikah
          } = value;
          return (
            <div className="oprema" id="idOprema2">
              {/*  notranja oprema */}
              <div>
                <button
                  onClick={e => this.hideDiv(e)}
                  className="oprema__addBtnBg"
                >
                  Notranja oprema
                </button>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      name="headUp"
                      checked={headUp}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Head-up prikaz</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="digitalniStevci"
                      checked={digitalniStevci}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Digitalni stevci</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="panoramskaStreha"
                      checked={panoramskaStreha}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Panoramska
                      <br />
                      streha
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="ogrevanVolan"
                      checked={ogrevanVolan}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Ogrevan volan</label>
                  </li>
                </ul>
              </div>
              {/* end notranja oprema */}
              {/* Sedezi */}
              <div className="oprema__addClassDiv">
                <button onClick={e => this.hideDiv(e)}>Sedezi</button>
                <ul className="oprema__addClassUl">
                  <li>
                    <input
                      type="checkbox"
                      name="ogrevaniSedeziSpredaj"
                      checked={ogrevaniSedeziSpredaj}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Ogrevani <br />
                      sedezi spredaj
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="ogrevaniSedeziZadaj"
                      checked={ogrevaniSedeziZadaj}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Ogrevani <br />
                      sedezi zadaj
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="elektricnoNastavljivVoznikovSedez"
                      checked={elektricnoNastavljivVoznikovSedez}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      El. nastavljiv <br />
                      voznikov sedez
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="elektricnoNastavljivaSprednjaSedeza"
                      checked={elektricnoNastavljivaSprednjaSedeza}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      El. nastavljiva <br />
                      sprednja sedeza
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="sportniSedezi"
                      checked={sportniSedezi}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Sportni sedezi</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="prezracevanaSprednjaSedeza"
                      checked={prezracevanaSprednjaSedeza}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Prezracevana <br />
                      sprednja sedeza
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="prezracevaniVsiSedezi"
                      checked={prezracevaniVsiSedezi}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Prezracevani <br />
                      vsi sedezi
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="podporaZaLedveniDel"
                      checked={podporaZaLedveniDel}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Podpora za
                      <br />
                      ledveni del
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="masazniSedezi"
                      checked={masazniSedezi}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Masazni sedezi</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="naslonjaloZaRoke"
                      checked={naslonjaloZaRoke}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Naslonjalo <br />
                      za roke
                    </label>
                  </li>
                </ul>
              </div>
              {/* end Sedezi */}
              {/* Zunanja oprema */}
              <div className="oprema__addClassDiv">
                <button onClick={e => this.hideDiv(e)}>Zunanja oprema</button>
                <ul className="oprema__addClassUl">
                  <li>
                    <input
                      type="checkbox"
                      name="vlecnaKljuka"
                      checked={vlecnaKljuka}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Vlecna kljuka</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="stresneSani"
                      checked={stresneSani}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Stresne sani</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="samodejnoOdpiranjePrtljaznika"
                      checked={samodejnoOdpiranjePrtljaznika}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Samodejno odpi-
                      <br />
                      ranje prtljaznika
                    </label>
                  </li>
                </ul>
              </div>
              {/* end Zunanja oprema */}
              {/* Podvozje in vzmetenje */}
              <div className="oprema__addClassDiv">
                <button onClick={e => this.hideDiv(e)}>
                  Podvozje in vzmetenje
                </button>
                <ul className="oprema__addClassUl">
                  <li>
                    <input
                      type="checkbox"
                      name="sportnoVzmetenje"
                      checked={sportnoVzmetenje}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Sportno
                      <br /> vzmetenje
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="zracnoVzmetenje"
                      checked={zracnoVzmetenje}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Zracno vzmetenje</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="nastavljivoVzmetenje"
                      checked={nastavljivoVzmetenje}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Nastavljivo
                      <br /> vzmetenje
                    </label>
                  </li>
                </ul>
              </div>
              {/* end Podvozje in vzmetenje */}
              {/* Parkiranje */}
              <div className="oprema__addClassDiv">
                <button onClick={e => this.hideDiv(e)}>Parkiranje</button>
                <ul className="oprema__addClassUl">
                  <li>
                    <input
                      type="checkbox"
                      name="senzorjiSpredaj"
                      checked={senzorjiSpredaj}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Senzorji spredaj</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="senzorjiZadaj"
                      checked={senzorjiZadaj}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Senzorji zadaj</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="avtoParkiranjeAsist"
                      checked={avtoParkiranjeAsist}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Asistenca za
                      <br />
                      avtomatsko <br /> parkiranje
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="parkiranjeSPrikolicoAsist"
                      checked={parkiranjeSPrikolicoAsist}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Asistenca za <br />
                      parkiranje s <br />
                      prikolico
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="kameraZaVzvratnoVoznjo"
                      checked={kameraZaVzvratnoVoznjo}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Kamera za <br />
                      vzvratno voznjo
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="tristosestdesetKamera"
                      checked={tristosestdesetKamera}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>360° kamera</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="tristosestdesetSenzorji"
                      checked={tristosestdesetSenzorji}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>360° senzorji</label>
                  </li>
                </ul>
              </div>
              {/* end Parkiranje */}
              {/* Kolesa */}
              <div className="oprema__addClassDiv">
                <button onClick={e => this.hideDiv(e)}>Kolesa</button>
                <ul className="oprema__addClassUl">
                  <li>
                    <input
                      type="checkbox"
                      name="litaPlatisca"
                      checked={litaPlatisca}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Lita platisca</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="aluPlatisca"
                      checked={aluPlatisca}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Alu platisca</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="letnePnevmatike"
                      checked={letnePnevmatike}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Letne pnevmatike</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="zimskePnevmatike"
                      checked={zimskePnevmatike}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Zimske
                      <br /> pnevmatike
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="celoletnePnevmatike"
                      checked={celoletnePnevmatike}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Celoletne
                      <br /> pnevmatike
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="sistemZaPopraviloKolesa"
                      checked={sistemZaPopraviloKolesa}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Sistem za
                      <br />
                      popravilo kolesa
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="rezervnoKolo"
                      checked={rezervnoKolo}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Rezervno kolo</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="runFlat"
                      checked={runFlat}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Run-Flat</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="senzorTlakaVPnevmatikah"
                      checked={senzorTlakaVPnevmatikah}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Senzor tlaka
                      <br />v pnevmatikah
                    </label>
                  </li>
                </ul>
              </div>
              {/* end Kolesa */}
            </div>
          );
        }}
      </CreateAdContextConsumer>
    );
  }
}
