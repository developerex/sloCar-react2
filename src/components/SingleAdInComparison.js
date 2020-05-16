import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dodajPrimerjajCD, izbrisiPrimerjajCD } from '../actions';

class SingleAdInList extends React.Component {
  state = {
    primerjaj: false,
    primerjajText: 'Primerjaj z drugim vozilom',

    luci: null,
    varnostPotnikov: null,
    stabilizacija: null,
    klima: null,
    asistence: null,
    multimedija: null,
    notranja_oprema: null,
    sedezi: null,
    zunanja_oprema: null,
    podvozje_in_vzmetenje: null,
    parking: null,
    kolesa: null,
    xenonZarometi: null,
    prilagodljiviZarometi: null,
    biXenon: null,
    meglenke: null,
    zracneBlazine: null,
    ABS: null,
    ESP: null,
    ASR: null,
    TCS: null,
    avtomatskaKlima: null,
    triConskaKlima: null,
    dvoConskaKlima: null,
    stiriConskaKlima: null,
    samodejnoOgrevanjeVozila: null,
    SOSklicVsili: null,
    OpozoriloProtiUtrujnosti: null,
    laneAsist: null,
    blindAsist: null,
    nocniVidAsist: null,
    tempomat: null,
    sistemZaviranjaVsili: null,
    zaznavanjePrometnihZnakov: null,
    speljevanjeAsist: null,
    sistemOpozorilaRazdalje: null,
    AktivniTempomat: null,
    dolgaLucAsist: null,
    blutooth: null,
    appleCarPlay: null,
    androidAuto: null,
    wifi: null,
    alarmniSistem: null,
    brezzicnoPolnjenjeTelefona: null,
    headUp: null,
    digitalniStevci: null,
    panoramskaStreha: null,
    ogrevanVolan: null,
    ogrevaniSedeziSpredaj: null,
    ogrevaniSedeziZadaj: null,
    elektricnoNastavljivVoznikovSedez: null,
    elektricnoNastavljivaSprednjaSedeza: null,
    sportniSedezi: null,
    sportniSedezi: null,
    prezracevanaSprednjaSedeza: null,
    prezracevaniVsiSedezi: null,
    podporaZaLedveniDel: null,
    masazniSedezi: null,
    naslonjaloZaRoke: null,
    vlecnaKljuka: null,
    stresneSani: null,
    samodejnoOdpiranjePrtljaznika: null,
    sportnoVzmetenje: null,
    zracnoVzmetenje: null,
    nastavljivoVzmetenje: null,
    senzorjiSpredaj: null,
    senzorjiZadaj: null,
    avtoParkiranjeAsist: null,
    parkiranjeSPrikolicoAsist: null,
    kameraZaVzvratnoVoznjo: null,
    tristosestdesetKamera: null,
    tristosestdesetSenzorji: null,
    litaPlatisca: null,
    aluPlatisca: null,
    letnePnevmatike: null,
    zimskePnevmatike: null,
    celoletnePnevmatike: null,
    sistemZaPopraviloKolesa: null,
    rezervnoKolo: null,
    runFlat: null,
    senzorTlakaVPnevmatikah: null,
  };

  constructor(props) {
    super(props);

    this.categoriesOprema = [
      'luci',
      'varnostPotnikov',
      'stabilizacija',
      'klima',
      'asistence',
      'multimedija',
      'notranja_oprema',
      'sedezi',
      'zunanja_oprema',
      'podvozje_in_vzmetenje',
      'parking',
      'kolesa',
    ];

    this.objOprema = {
      luci: this.luci,
      varnostPotnikov: this.varnostPotnikov,
      stabilizacija: this.stabilizacija,
      klima: this.klima,
      asistence: this.asistence,
      multimedija: this.multimedija,
      notranja_oprema: this.notranja_oprema,
      sedezi: this.sedezi,
      zunanja_oprema: this.zunanja_oprema,
      podvozje_in_vzmetenje: this.podvozje_in_vzmetenje,
      parking: this.parking,
      kolesa: this.kolesa,
    };

    this.luci = [
      'xenonZarometi',
      'prilagodljiviZarometi',
      'biXenon',
      'meglenke',
    ];
    this.varnostPotnikov = ['zracneBlazine'];
    this.stabilizacija = ['ABS', 'ESP', 'ASR', 'TCS'];
    this.klima = [
      'avtomatskaKlima',
      'triConskaKlima',
      'dvoConskaKlima',
      'stiriConskaKlima',
      'samodejnoOgrevanjeVozila',
    ];
    this.asistence = [
      'SOSklicVsili',
      'OpozoriloProtiUtrujnosti',
      'laneAsist',
      'blindAsist',
      'nocniVidAsist',
      'tempomat',
      'sistemZaviranjaVsili',
      'zaznavanjePrometnihZnakov',
      'speljevanjeAsist',
      'sistemOpozorilaRazdalje',
      'AktivniTempomat',
      'dolgaLucAsist',
    ];
    this.multimedija = ['blutooth', 'appleCarPlay', 'androidAuto', 'wifi'];
    this.notranja_oprema = [
      'alarmniSistem',
      'brezzicnoPolnjenjeTelefona',
      'headUp',
      'digitalniStevci',
      'panoramskaStreha',
      'ogrevanVolan',
    ];
    this.sedezi = [
      'ogrevaniSedeziSpredaj',
      'ogrevaniSedeziZadaj',
      'elektricnoNastavljivVoznikovSedez',
      'elektricnoNastavljivaSprednjaSedeza',
      'sportniSedezi',
      'sportniSedezi',
      'prezracevanaSprednjaSedeza',
      'prezracevaniVsiSedezi',
      'podporaZaLedveniDel',
      'masazniSedezi',
      'naslonjaloZaRoke',
    ];
    this.zunanja_oprema = [
      'vlecnaKljuka',
      'stresneSani',
      'samodejnoOdpiranjePrtljaznika',
    ];
    this.podvozje_in_vzmetenje = [
      'sportnoVzmetenje',
      'zracnoVzmetenje',
      'nastavljivoVzmetenje',
    ];
    this.parking = [
      'senzorjiSpredaj',
      'senzorjiZadaj',
      'avtoParkiranjeAsist',
      'parkiranjeSPrikolicoAsist',
      'kameraZaVzvratnoVoznjo',
      'tristosestdesetKamera',
      'tristosestdesetSenzorji',
    ];
    this.kolesa = [
      'litaPlatisca',
      'aluPlatisca',
      'letnePnevmatike',
      'zimskePnevmatike',
      'celoletnePnevmatike',
      'sistemZaPopraviloKolesa',
      'rezervnoKolo',
      'runFlat',
      'senzorTlakaVPnevmatikah',
    ];
  }

  componentDidMount() {
    if (this.props.primerjaj.length > 0) {
      if (this.props.primerjaj.includes(this.props.id)) {
        this.setState({
          primerjaj: true,
          primerjajText: 'Odstrani vozilo iz primerjave',
        });
      }
    }
    this.categoriesOprema.forEach((item) => {
      if (this.props.oprema.one.hasOwnProperty(item)) {
        this.setState({
          [item]: true,
        });
        if (item === 'luci') {
          this.props.oprema.one.luci.forEach((item) => {
            var val = this.luci[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'varnostPotnikov') {
          this.props.oprema.one.varnostPotnikov.forEach((item) => {
            var val = this.varnostPotnikov[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'stabilizacija') {
          this.props.oprema.one.stabilizacija.forEach((item) => {
            var val = this.stabilizacija[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'klima') {
          this.props.oprema.one.klima.forEach((item) => {
            var val = this.klima[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'asistence') {
          this.props.oprema.one.asistence.forEach((item) => {
            var val = this.asistence[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'multimedija') {
          this.props.oprema.one.multimedija.forEach((item) => {
            var val = this.multimedija[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'notranja_oprema') {
          this.props.oprema.one.notranja_oprema.forEach((item) => {
            var val = this.notranja_oprema[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'sedezi') {
          this.props.oprema.one.sedezi.forEach((item) => {
            var val = this.sedezi[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'zunanja_oprema') {
          this.props.oprema.one.zunanja_oprema.forEach((item) => {
            var val = this.zunanja_oprema[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'podvozje_in_vzmetenje') {
          this.props.oprema.one.podvozje_in_vzmetenje.forEach((item) => {
            var val = this.podvozje_in_vzmetenje[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'parking') {
          this.props.oprema.one.parking.forEach((item) => {
            var val = this.parking[item];
            this.setState({
              [val]: true,
            });
          });
        }
        if (item === 'kolesa') {
          this.props.oprema.one.kolesa.forEach((item) => {
            var val = this.kolesa[item];
            this.setState({
              [val]: true,
            });
          });
        }
      }
      if (this.props.oprema.zero.hasOwnProperty(item)) {
        console.log('CENA', this.props.cena, 'ITEM: ', item);
        this.setState({
          [item]: true,
        });
        if (item === 'luci') {
          this.props.oprema.zero.luci.forEach((item) => {
            var val = this.luci[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'varnostPotnikov') {
          this.props.oprema.zero.varnostPotnikov.forEach((item) => {
            var val = this.varnostPotnikov[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'stabilizacija') {
          this.props.oprema.zero.stabilizacija.forEach((item) => {
            var val = this.stabilizacija[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'klima') {
          this.props.oprema.zero.klima.forEach((item) => {
            var val = this.klima[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'asistence') {
          this.props.oprema.zero.asistence.forEach((item) => {
            var val = this.asistence[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'multimedija') {
          this.props.oprema.zero.multimedija.forEach((item) => {
            var val = this.multimedija[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'notranja_oprema') {
          this.props.oprema.zero.notranja_oprema.forEach((item) => {
            var val = this.notranja_oprema[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'sedezi') {
          this.props.oprema.zero.sedezi.forEach((item) => {
            var val = this.sedezi[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'zunanja_oprema') {
          this.props.oprema.zero.zunanja_oprema.forEach((item) => {
            var val = this.zunanja_oprema[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'podvozje_in_vzmetenje') {
          this.props.oprema.zero.podvozje_in_vzmetenje.forEach((item) => {
            var val = this.podvozje_in_vzmetenje[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'parking') {
          this.props.oprema.zero.parking.forEach((item) => {
            var val = this.parking[item];
            this.setState({
              [val]: false,
            });
          });
        }
        if (item === 'kolesa') {
          this.props.oprema.zero.kolesa.forEach((item) => {
            var val = this.kolesa[item];
            this.setState({
              [val]: false,
            });
          });
        }
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.primerjaj.length !== this.props.primerjaj.length) {
      if (this.props.primerjaj.includes(this.props.id)) {
        this.setState({
          primerjaj: true,
          primerjajText: 'Odstrani vozilo iz primerjave',
        });
      }
      if (
        this.props.primerjaj.length === 0 &&
        this.props.userData.login === false
      ) {
        this.setState({
          primerjaj: false,
          primerjajText: 'Primerjaj z drugim vozilom',
          reqLogin: true,
        });
      }
    }
  }

  primerjajClicked = (e, id) => {
    if (this.state.reqLogin) {
      this.setState({
        primerjajText: 'Najprej se morate prijaviti',
      });
    } else {
      if (e.target.dataset.primerjaj === 'primerjajDodaj') {
        if (this.props.primerjaj.length < 3) {
          this.props.dodajPrimerjajCD(id, this.props.userData.userLogin.token);
          this.setState({
            primerjaj: true,
            primerjajText: 'Odstrani vozilo iz primerjave',
          });
        }
      } else {
        this.props.izbrisiPrimerjajCD(id, this.props.userData.userLogin.token);
        this.setState({
          primerjaj: false,
          primerjajText: 'Primerjaj z drugim vozilom',
        });
      }
    }
  };

  render() {
    console.log('PROPS SINGLEAD_IN_LIST', this.state, this.props);
    return (
      <div className="comparison-container__item" key={this.props.key}>
        <div className="comparison-container__item--img">
          <div>
            <img src={this.props.srcImg} alt="car"></img>
          </div>
        </div>
        <div className="comparison-container__item--data">
          <div>
            <img
              src={`/logo/${this.props.znamka}.png`}
              alt={this.props.znamka}
              style={{ width: '30px' }}
            />
            <p>{this.props.model}</p>
          </div>
          <div>
            <img
              src={`/oblika/${this.props.oblika}.png`}
              alt={this.props.oblika}
              style={{ width: '50px' }}
            ></img>
            <p>{this.props.oblika}</p>
          </div>
          <div>
            <img
              src="/prevozeni.png"
              alt="prevozeni kilometri"
              style={{ width: '20px' }}
            />
            <p>
              {parseInt(this.props.km).toLocaleString().replace(',', '.')} km
            </p>
          </div>
          <div>
            <img src="/motor.png" alt="moc motorja" style={{ width: '20px' }} />
            <p>{this.props.motor} KM</p>
          </div>
          <div>
            <img src={'/letnik.png'} alt="letnik" style={{ width: '20px' }} />
            <p>{this.props.letnik}</p>
          </div>
          <div>
            <img
              src={`/gorivo/${this.props.gorivo}.png`}
              alt={this.props.gorivo}
              style={{ width: '50px' }}
            />
            <p>
              {this.props.prostornina &&
                (parseInt(this.props.prostornina) / 1000).toFixed(1) + ' ccm'}
            </p>
          </div>
          <div className="cena">
            {this.props.cena &&
              parseInt(this.props.cena).toLocaleString().replace(',', '.')}
            &nbsp;€
          </div>
          <div className="comparison-container__item--data--primerjavaData">
            <h4>Tehnični podatki</h4>
            <ul>
              <li>Število valjev: {this.props.valji}</li>
              <li>Pogon: {this.props.pogon}</li>
              <li>Menjanik: {this.props.menjalnik}</li>
            </ul>
          </div>
          <div className="comparison-container__item--data--primerjavaData">
            <h4>Izgled</h4>
            <ul>
              <li>Barva zunanjosti: {this.props.barvaZunanjosti}</li>
              <li>Barva notrajnosti: {this.props.barvaNotrajnosti}</li>
              <li>Število sedežev: {this.props.steviloSedezev}</li>
              <li>Število vrat: {this.props.vrata}</li>
            </ul>
          </div>
          <div className="comparison-container__item--data--primerjavaData">
            <h4>Emisije</h4>
            <ul>
              <li>Mestna poraba: {this.props.mestnaPoraba} L/100 km</li>
              <li>
                Izvenmestna poraba: {this.props.izvenmestnaPoraba} L/100 km
              </li>
              <li>
                Kombinirana poraba: {this.props.kombiniranaPoraba} L/100 km
              </li>
              <li>Emisijski razred: {this.props.emisijskiRazred}</li>
              <li>C02 emisije: {this.props.co2} g/km</li>
            </ul>
          </div>
          <div className="comparison-container__item--data--primerjavaData comparison-container__item--data--primerjavaData--opremaContainer">
            <h4>Oprema</h4>
            <div
              className={
                this.state.luci
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Luči</h3>
              <ul>
                <li
                  className={
                    this.state.xenonZarometi === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Xenon žarometi: {this.state.xenonZarometi ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.prilagodljiviZarometi === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Prilagodljivi žarometi:{' '}
                  {this.state.prilagodljiviZarometi ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.biXenon === null ? 'displayNone' : 'noClass'
                  }
                >
                  Bi-Xenon žarometi: {this.state.biXenon ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.meglenke === null ? 'displayNone' : 'noClass'
                  }
                >
                  Meglenke: {this.state.meglenke ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.varnostPotnikov
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Varnost potnikov</h3>
              <ul>
                <li
                  className={
                    this.state.zracneBlazine === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Zračne blazine: {this.state.zracneBlazine ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.stabilizacija
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Stabilizacija vozila</h3>
              <ul>
                <li
                  className={
                    this.state.ABS === null ? 'displayNone' : 'noClass'
                  }
                >
                  ABS: {this.state.ABS ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.ESP === null ? 'displayNone' : 'noClass'
                  }
                >
                  ESP: {this.state.ESP ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.ASR === null ? 'displayNone' : 'noClass'
                  }
                >
                  ASR: {this.state.ASR ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.TCS === null ? 'displayNone' : 'noClass'
                  }
                >
                  TCS: {this.state.TCS ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.klima
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Klima</h3>
              <ul>
                <li
                  className={
                    this.state.avtomatskaKlima === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Avtomatska klima: {this.state.avtomatskaKlima ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.dvoConskaKlima === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  2-conska klima: {this.state.dvoConskaKlima ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.triConskaKlima === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  3-conska klima: {this.state.triConskaKlima ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.stiriConskaKlima === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  4-conska klima: {this.state.stiriConskaKlima ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.samodejnoOgrevanjeVozila === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Samodejno ogrevanje vozila:{' '}
                  {this.state.samodejnoOgrevanjeVozila ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.asistence
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Asistence</h3>
              <ul>
                <li
                  className={
                    this.state.SOSklicVsili === null ? 'displayNone' : 'noClass'
                  }
                >
                  SOS: {this.state.SOSklicVsili ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.OpozoriloProtiUtrujnosti === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Opozorilo proti utrujenosti:{' '}
                  {this.state.OpozoriloProtiUtrujnosti ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.laneAsist === null ? 'displayNone' : 'noClass'
                  }
                >
                  Lane asistenca: {this.state.laneAsist ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.blindAsist === null ? 'displayNone' : 'noClass'
                  }
                >
                  Blind asistenca: {this.state.blindAsist ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.nocniVidAsist === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Asistenca nočnega vid:{' '}
                  {this.state.nocniVidAsist ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.tempomat === null ? 'displayNone' : 'noClass'
                  }
                >
                  Tempomat: {this.state.tempomat ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.AktivniTempomat === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Aktivni tempomat: {this.state.AktivniTempomat ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.sistemZaviranjaVsili === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Sistem zaviranja v sili:{' '}
                  {this.state.sistemZaviranjaVsili ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.zaznavanjePrometnihZnakov === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Zaznavanje prometnih znakov:{' '}
                  {this.state.zaznavanjePrometnihZnakov ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.speljevanjeAsist === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Asistenca pri speljevanju:{' '}
                  {this.state.speljevanjeAsist ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.sistemOpozorilaRazdalje === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Sistem opozorila razdalje:{' '}
                  {this.state.sistemOpozorilaRazdalje ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.dolgaLucAsist === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Asistenca dolge luči: {this.state.dolgaLucAsist ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.multimedija
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Multimedija</h3>
              <ul>
                <li
                  className={
                    this.state.blutooth === null ? 'displayNone' : 'noClass'
                  }
                >
                  Blutooth: {this.state.blutooth ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.appleCarPlay === null ? 'displayNone' : 'noClass'
                  }
                >
                  Apple Car Play: {this.state.appleCarPlay ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.androidAuto === null ? 'displayNone' : 'noClass'
                  }
                >
                  Android Auto: {this.state.androidAuto ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.wifi === null ? 'displayNone' : 'noClass'
                  }
                >
                  Wifi: {this.state.wifi ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.notranja_oprema
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Notranja oprema</h3>
              <ul>
                <li
                  className={
                    this.state.alarmniSistem === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Alarmni sistem: {this.state.alarmniSistem ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.brezzicnoPolnjenjeTelefona === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Brezžično polnjenje telefona:{' '}
                  {this.state.brezzicnoPolnjenjeTelefona ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.headUp === null ? 'displayNone' : 'noClass'
                  }
                >
                  Head-up: {this.state.headUp ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.digitalniStevci === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Digitalni števci: {this.state.digitalniStevci ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.panoramskaStreha === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Panoramska streha: {this.state.panoramskaStreha ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.ogrevanVolan === null ? 'displayNone' : 'noClass'
                  }
                >
                  Ogrevan volan: {this.state.ogrevanVolan ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.zunanja_oprema
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Zunanja oprema</h3>
              <ul>
                <li
                  className={
                    this.state.vlecnaKljuka === null ? 'displayNone' : 'noClass'
                  }
                >
                  Vlečna kljuka: {this.state.vlecnaKljuka ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.stresneSani === null ? 'displayNone' : 'noClass'
                  }
                >
                  Strešne sani: {this.state.stresneSani ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.samodejnoOdpiranjePrtljaznika === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Samodejno odpiranje prtljažnika:{' '}
                  {this.state.samodejnoOdpiranjePrtljaznika ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.sedezi
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Sedeži</h3>
              <ul>
                <li
                  className={
                    this.state.ogrevaniSedeziSpredaj === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Ogrevani sedeži spredaj:{' '}
                  {this.state.ogrevaniSedeziSpredaj ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.ogrevaniSedeziZadaj === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Ogrevani sedeži zadaj:{' '}
                  {this.state.ogrevaniSedeziZadaj ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.elektricnoNastavljivVoznikovSedez === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Električno nastavljiv voznikov sedež:{' '}
                  {this.state.elektricnoNastavljivVoznikovSedez ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.elektricnoNastavljivaSprednjaSedeza === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Električno nastavljiva sprednja sedeža:{' '}
                  {this.state.elektricnoNastavljivaSprednjaSedeza ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.sportniSedezi === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Športni sedeži: {this.state.sportniSedezi ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.prezracevanaSprednjaSedeza === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Prezračevana sprednja sedeža:{' '}
                  {this.state.prezracevanaSprednjaSedeza ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.prezracevaniVsiSedezi === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Prezračevani vsi sedeži:{' '}
                  {this.state.prezracevaniVsiSedezi ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.podporaZaLedveniDel === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Podpora za ledveni del:{' '}
                  {this.state.podporaZaLedveniDel ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.masazniSedezi === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Masažni sedeži: {this.state.masazniSedezi ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.naslonjaloZaRoke === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Naslonjalo za roke:{' '}
                  {this.state.naslonjaloZaRoke ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.podvozje_in_vzmetenje
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Podvozje in vzmetenje</h3>
              <ul>
                <li
                  className={
                    this.state.sportnoVzmetenje === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Športno vzmetenje: {this.state.sportnoVzmetenje ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.zracnoVzmetenje === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Zračno vzmetenje: {this.state.zracnoVzmetenje ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.nastavljivoVzmetenje === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Nastavljivo vzmetenje:{' '}
                  {this.state.nastavljivoVzmetenje ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.parking
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Parking</h3>
              <ul>
                <li
                  className={
                    this.state.senzorjiSpredaj === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Senzorji spredaj: {this.state.senzorjiSpredaj ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.senzorjiZadaj === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Senzorji zadaj: {this.state.senzorjiZadaj ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.avtoParkiranjeAsist === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Asistenca avtomatskega parkiranja:{' '}
                  {this.state.avtoParkiranjeAsist ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.parkiranjeSPrikolicoAsist === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Asistenca parkiranja s prikolico:{' '}
                  {this.state.parkiranjeSPrikolicoAsist ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.kameraZaVzvratnoVoznjo === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Kamera za vzvratno vožnjo:{' '}
                  {this.state.kameraZaVzvratnoVoznjo ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.tristosestdesetKamera === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Kamera 360°: {this.state.tristosestdesetKamera ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.tristosestdesetSenzorji === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Senzorji 360°:{' '}
                  {this.state.tristosestdesetSenzorji ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
            <div
              className={
                this.state.kolesa
                  ? `comparison-container__item--data--primerjavaData--oprema`
                  : 'displayNone'
              }
            >
              <h3>Kolesa</h3>
              <ul>
                <li
                  className={
                    this.state.litaPlatisca === null ? 'displayNone' : 'noClass'
                  }
                >
                  Lita platišča: {this.state.litaPlatisca ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.aluPlatisca === null ? 'displayNone' : 'noClass'
                  }
                >
                  Alu platišča: {this.state.aluPlatisca ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.letnePnevmatike === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Letne pnevmatike: {this.state.letnePnevmatike ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.zimskePnevmatike === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Zimske pnevmatike: {this.state.zimskePnevmatike ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.celoletnePnevmatike === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Celoletne pnevmatike:{' '}
                  {this.state.celoletnePnevmatike ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.sistemZaPopraviloKolesa === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Sistem za popravilo koles:{' '}
                  {this.state.sistemZaPopraviloKolesa ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.rezervnoKolo === null ? 'displayNone' : 'noClass'
                  }
                >
                  Rezervno kolo: {this.state.rezervnoKolo ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.runFlat === null ? 'displayNone' : 'noClass'
                  }
                >
                  Run-flat: {this.state.runFlat ? 'Da' : 'Ne'}
                </li>
                <li
                  className={
                    this.state.senzorTlakaVPnevmatikah === null
                      ? 'displayNone'
                      : 'noClass'
                  }
                >
                  Senzor tlaka v pnevmatikah:{' '}
                  {this.state.senzorTlakaVPnevmatikah ? 'Da' : 'Ne'}
                </li>
              </ul>
            </div>
          </div>
          <div className="comparison-container__item--data--primerjavaData">
            <h4>Ostali podatki o vozilu</h4>
            <ul>
              <li>Prva registracija: {this.props.prvaRegistracija}</li>
              <li>Tehnični pregled: {this.props.tehnicniPregled}</li>
              <li>Lastništvo: {this.props.lastnistvo}</li>
              <li>Stanje: {this.props.stanje}</li>
              <li>Poreklo: {this.props.poreklo}</li>
            </ul>
          </div>
          <Link to={`/ads/${this.props.id}`} className="ogled">
            Oglej si oglas
          </Link>

          <div className="comparison-container__item--justPrimerjajPng">
            <img
              src={this.state.primerjaj ? '/primerjaj2.png' : '/primerjaj.png'}
              alt="Primerjava vozil"
              data-primerjaj={
                this.state.primerjaj ? 'primerjajOdstrani' : 'primerjajDodaj'
              }
              onClick={(e) => this.primerjajClicked(e, this.props.id)}
            />
            <p
              style={{
                color:
                  this.state.primerjajText === 'Najprej se morate prijaviti'
                    ? '#DC143C'
                    : '#000',
              }}
            >
              {this.state.primerjajText}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ favCompCD, userData, compCD }) => {
  return {
    favCompCD,
    userData,
    compCD,
  };
};

export default connect(mapStateToProps, {
  dodajPrimerjajCD,
  izbrisiPrimerjajCD,
})(SingleAdInList);
