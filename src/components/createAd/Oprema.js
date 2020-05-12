import React, { Component } from 'react';
import '../../scss/createAd/Oprema.scss';

import { CreateAdContextConsumer } from './CreateAdContext';

export default class Oprema extends Component {
  hideDiv = e => {
    const opremaDiv = document.getElementById('idOprema');
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
            zracneBlazine,
            ustvariOglasHandleChange,
            alarmniSistem,
            ABS,
            ESP,
            ASR,
            TCS,
            xenonZarometi,
            biXenon,
            ledZarometi,
            prilagodljiviZarometi,
            meglenke,
            avtomatskaKlima,
            dvoConskaKlima,
            triConskaKlima,
            stiriConskaKlima,
            samodejnoOgrevanjeVozila,
            SOSklicVsili,
            OpozoriloProtiUtrujnosti,
            laneAsist,
            blindAsist,
            nocniVidAsist,
            tempomat,
            sistemZaviranjaVsili,
            zaznavanjePrometnihZnakov,
            speljevanjeAsist,
            sistemOpozorilaRazdalje,
            AktivniTempomat,
            dolgaLucAsist,
            blutooth,
            appleCarPlay,
            androidAuto,
            wifi,
            brezzicnoPolnjenjeTelefona
          } = value;
          return (
            <div className="oprema" id="idOprema">
              {/* varnost */}
              <div>
                <button
                  onClick={e => this.hideDiv(e)}
                  className="oprema__addBtnBg"
                >
                  Varnost potnikov
                </button>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      name="zracneBlazine"
                      checked={zracneBlazine}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Zracne blazine</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="alarmniSistem"
                      checked={alarmniSistem}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Alarmni sistem</label>
                  </li>
                </ul>
              </div>
              {/* end varnost */}
              {/* stabilizacija */}
              <div className="oprema__addClassDiv">
                <button onClick={e => this.hideDiv(e)}>Stabilizacija</button>
                <ul className="oprema__addClassUl">
                  <li>
                    <input
                      type="checkbox"
                      name="ABS"
                      checked={ABS}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>ABS</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="ESP"
                      checked={ESP}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>ESP</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="ASR"
                      checked={ASR}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>ASR</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="TCS"
                      checked={TCS}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>TCS</label>
                  </li>
                </ul>
              </div>
              {/* end stabilizacija */}
              {/* luci */}
              <div className="oprema__addClassDiv">
                <button onClick={e => this.hideDiv(e)}>Luci</button>
                <ul className="oprema__addClassUl">
                  <li>
                    <input
                      type="checkbox"
                      name="xenonZarometi"
                      checked={xenonZarometi}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Xenon zarometi</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="biXenon"
                      checked={biXenon}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Bi-xenon <br></br> zarometi
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="ledZarometi"
                      checked={ledZarometi}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>LED zarometi</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="meglenke"
                      checked={meglenke}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Meglenke</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="prilagodljiviZarometi"
                      checked={prilagodljiviZarometi}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Prilagodljivi <br></br>zarometi
                    </label>
                  </li>
                </ul>
              </div>
              {/* end luci */}
              {/* klima */}
              <div className="oprema__addClassDiv">
                <button onClick={e => this.hideDiv(e)}>Klima</button>
                <ul className="oprema__addClassUl">
                  <li>
                    <input
                      type="checkbox"
                      name="avtomatskaKlima"
                      checked={avtomatskaKlima}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Avtomatska <br></br> klima
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="dvoConskaKlima"
                      checked={dvoConskaKlima}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      2-conska <br></br> klima
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="triConskaKlima"
                      checked={triConskaKlima}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      3-conska <br></br> klima
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="stiriConskaKlima"
                      checked={stiriConskaKlima}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      4-conska <br></br> klima
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="samodejnoOgrevanjeVozila"
                      checked={samodejnoOgrevanjeVozila}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Samodejno
                      <br />
                      ogrevanje vozila
                    </label>
                  </li>
                </ul>
              </div>
              {/* end klima */}
              {/* asistence */}
              <div className="oprema__addClassDiv">
                <button onClick={e => this.hideDiv(e)}>Asistence</button>
                <ul className="oprema__addClassUl">
                  <li>
                    <input
                      type="checkbox"
                      name="SOSklicVsili"
                      checked={SOSklicVsili}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      SOS-klic v <br></br> sili
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="OpozoriloProtiUtrujnosti"
                      checked={OpozoriloProtiUtrujnosti}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Opozorilo proti <br></br> utrujnosti
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="laneAsist"
                      checked={laneAsist}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Lane asistenca</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="blindAsist"
                      checked={blindAsist}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Senzor za mrtvi <br></br> kot
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="nocniVidAsist"
                      checked={nocniVidAsist}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Asistenca za
                      <br />
                      nocni vid
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="tempomat"
                      checked={tempomat}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Tempomat</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="sistemZaviranjaVsili"
                      checked={sistemZaviranjaVsili}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Sistem zaviranja
                      <br />v sili
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="zaznavanjePrometnihZnakov"
                      checked={zaznavanjePrometnihZnakov}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Zaznavanje
                      <br />
                      prometnih znakov
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="speljevanjeAsist"
                      checked={speljevanjeAsist}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Asistenca pri
                      <br />
                      speljevanju
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="sistemOpozorilaRazdalje"
                      checked={sistemOpozorilaRazdalje}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Sistem za
                      <br />
                      opozorila razdalje
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="AktivniTempomat"
                      checked={AktivniTempomat}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Aktivnit <br /> tempomat
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="dolgaLucAsist"
                      checked={dolgaLucAsist}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Asistenca za
                      <br />
                      dolgo luc
                    </label>
                  </li>
                </ul>
              </div>
              {/* end asistence */}
              {/* multimedija */}
              <div className="oprema__addClassDiv">
                <button onClick={e => this.hideDiv(e)}>Multimedija</button>
                <ul className="oprema__addClassUl">
                  <li>
                    <input
                      type="checkbox"
                      name="blutooth"
                      checked={blutooth}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Blutooth</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="appleCarPlay"
                      checked={appleCarPlay}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Apple car play</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="androidAuto"
                      checked={androidAuto}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Android Auto</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="wifi"
                      checked={wifi}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>Wifi hotspot</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="brezzicnoPolnjenjeTelefona"
                      checked={brezzicnoPolnjenjeTelefona}
                      onChange={ustvariOglasHandleChange}
                    />
                    <label>
                      Brezzicno <br /> polnjenje telefona
                    </label>
                  </li>
                </ul>
              </div>
              {/* end multimedija */}
            </div>
          );
        }}
      </CreateAdContextConsumer>
    );
  }
}
