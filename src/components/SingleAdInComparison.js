import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dodajPrimerjajCD, izbrisiPrimerjajCD } from '../actions';

class SingleAdInList extends React.Component {
  state = {
    primerjaj: false,
    primerjajText: 'Primerjaj z drugim vozilom',
  };

  componentDidMount() {
    if (this.props.primerjaj.length > 0) {
      if (this.props.primerjaj.includes(this.props.id)) {
        this.setState({
          primerjaj: true,
          primerjajText: 'Odstrani vozilo iz primerjave',
        });
      }
    }
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
    //console.log('PROPS SINGLEAD_IN_LIST', this.props.favCompCD);
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
              className="comparison-container__item--data--primerjavaData--oprema"
              id="firstOprema"
            >
              <h3>Luči</h3>
              <ul>
                <li>Xenon žarometi: </li>
                <li>Prilagodljivi žarometi: </li>
                <li>Bi-Xenon žarometi: </li>
                <li>Meglenke: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Varnost potnikov</h3>
              <ul>
                <li>Zračne blazine: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Stabilizacija vozila</h3>
              <ul>
                <li>ABS: </li>
                <li>ESP: </li>
                <li>ASR: </li>
                <li>TCS: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Klima</h3>
              <ul>
                <li>Avtomatska klima: </li>
                <li>2-conska klima: </li>
                <li>3-conska klima: </li>
                <li>4-conska klima: </li>
                <li>Samodejno ogrevanje vozila: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Asistence</h3>
              <ul>
                <li>SOS: </li>
                <li>Opozorilo proti utrujenosti: </li>
                <li>Lane asistenca: </li>
                <li>Blind asistenca: </li>
                <li>Asistenca nočnega vid: </li>
                <li>Tempomat: </li>
                <li>Aktivni tempomat: </li>
                <li>Sistem zaviranja v sili: </li>
                <li>Zaznavanje prometnih znakov: </li>
                <li>Asistenca pri speljevanju: </li>
                <li>Sistem opozorila razdalje: </li>
                <li>Asistenca dolge luči: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Multimedija</h3>
              <ul>
                <li>Blutooth: </li>
                <li>Apple Car Play: </li>
                <li>Android Auto: </li>
                <li>Wifi: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Notranja oprema</h3>
              <ul>
                <li>Alarmni sistem: </li>
                <li>Brezžično polnjenje telefona: </li>
                <li>Head-up: </li>
                <li>Digitalni števci: </li>
                <li>Panoramska streha: </li>
                <li>Ogrevan volan: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Zunanja oprema</h3>
              <ul>
                <li>Vlečna kljuka: </li>
                <li>Strešne sani: </li>
                <li>Samodejno odpiranje prtljažnika: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Sedeži</h3>
              <ul>
                <li>Ogrevani sedeži spredaj: </li>
                <li>Ogrevani sedeži zadaj: </li>
                <li>Električno nastavljiv voznikov sedež: </li>
                <li>Električno nastavljiva sprednja sedeža: </li>
                <li>Športni sedeži: </li>
                <li>Prezračevana sprednja sedeža: </li>
                <li>Prezračevani vsi sedeži: </li>
                <li>Podpora za ledveni del: </li>
                <li>Masažni sedeži: </li>
                <li>Naslonjalo za roke: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Podvozje in vzmetenje</h3>
              <ul>
                <li>Športno vzmetenje: </li>
                <li>Zračno vzmetenje: </li>
                <li>Nastavljivo vzmetenje: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Parking</h3>
              <ul>
                <li>Senzorji spredaj: </li>
                <li>Senzorji zadaj: </li>
                <li>Asistenca avtomatskega parkiranja: </li>
                <li>Asistenca parkiranja s prikolico: </li>
                <li>Kamera za vzvratno vožnjo: </li>
                <li>Kamera 360°: </li>
                <li>Senzorji 360°: </li>
              </ul>
            </div>
            <div className="comparison-container__item--data--primerjavaData--oprema">
              <h3>Kolesa</h3>
              <ul>
                <li>Lita platišča: </li>
                <li>Alu platišča: </li>
                <li>Letne pnevmatike: </li>
                <li>Zimske pnevmatike: </li>
                <li>Celoletne pnevmatike: </li>
                <li>Sistem za popravilo koles: </li>
                <li>Rezervno kolo: </li>
                <li>Run-flat: </li>
                <li>Senzor tlaka v pnevmatikah: </li>
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
