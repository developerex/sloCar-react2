import React, { Component } from 'react';

const CreateAdContext = React.createContext();

export class CreateAdContexProvider extends Component {
  state = {
    znamka: 'znamka',
    model: 'model',
    cena: 0,
    km: 0,
    letnik: 'letnik od',
    prostornina: 'prostornina motorja od',
    motor: 'moc motorja od',
    oblika: 'oblika',
    gorivo: 'gorivo',

    valji: 'stevilo valjev',
    pogon: 'pogon',
    menjalnik: 'menjalnik',
    vrata: 'stevilo vrat',
    emisijskiRazred: 'emisijski razred',
    emisijeCO2: 'emisije CO2',
    steviloSedezev: 'stevilo sedezev',
    barvaNotranjosti: 'barva',
    barvaZunanjosti: 'barva',
    materialNotranjosti: 'material notranjosti',
    mestnaPoraba: 0,
    izvenmestnaPoraba: 0,
    kombiniranaPoraba: 0,

    prvaRegistracija: '1. registracija',
    tehnicniPregled: 'tehnicni pregled',
    lastnistvo: 'lastnistvo',
    stanje: 'stanje',
    poreklo: 'poreklo',
    potrjenaServisna: false,

    zracneBlazine: false,
    alarmniSistem: false,
    ABS: false,
    ESP: false,
    ASR: false,
    TCS: false,
    xenonZarometi: false,
    biXenon: false,
    ledZarometi: false,
    prilagodljiviZarometi: false,
    meglenke: false,
    avtomatskaKlima: false,
    dvoConskaKlima: false,
    triConskaKlima: false,
    stiriConskaKlima: false,
    samodejnoOgrevanjeVozila: false,
    SOSklicVsili: false,
    OpozoriloProtiUtrujnosti: false,
    laneAsist: false,
    blindAsist: false,
    nocniVidAsist: false,
    tempomat: false,
    sistemZaviranjaVsili: false,
    zaznavanjePrometnihZnakov: false,
    speljevanjeAsist: false,
    sistemOpozorilaRazdalje: false,
    AktivniTempomat: false,
    dolgaLucAsist: false,
    blutooth: false,
    appleCarPlay: false,
    androidAuto: false,
    wifi: false,
    brezzicnoPolnjenjeTelefona: false,
    headUp: false,
    digitalniStevci: false,
    panoramskaStreha: false,
    ogrevanVolan: false,
    ogrevaniSedeziSpredaj: false,
    ogrevaniSedeziZadaj: false,
    elektricnoNastavljivVoznikovSedez: false,
    elektricnoNastavljivaSprednjaSedeza: false,
    sportniSedezi: false,
    prezracevanaSprednjaSedeza: false,
    prezracevaniVsiSedezi: false,
    podporaZaLedveniDel: false,
    masazniSedezi: false,
    naslonjaloZaRoke: false,
    vlecnaKljuka: false,
    stresneSani: false,
    samodejnoOdpiranjePrtljaznika: false,
    sportnoVzmetenje: false,
    zracnoVzmetenje: false,
    nastavljivoVzmetenje: false,
    senzorjiSpredaj: false,
    senzorjiZadaj: false,
    avtoParkiranjeAsist: false,
    parkiranjeSPrikolicoAsist: false,
    kameraZaVzvratnoVoznjo: false,
    tristosestdesetKamera: false,
    tristosestdesetSenzorji: false,
    litaPlatisca: false,
    aluPlatisca: false,
    letnePnevmatike: false,
    zimskePnevmatike: false,
    celoletnePnevmatike: false,
    sistemZaPopraviloKolesa: false,
    rezervnoKolo: false,
    runFlat: false,
    senzorTlakaVPnevmatikah: false,

    kontakti: [],
    ostaloText: '',
    naslovna: '',
    ostaleSlike: [],
  };

  ustvariOglasHandleChange = (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  modelToModel = () => {
    this.setState({
      model: 'model',
    });
  };

  kontaktiHandleChange = (ime, st) => {
    this.setState({
      kontakti: [...this.state.kontakti, { ime, st }],
    });
  };

  handleNaslovna = (e) => {
    if (e.target.value) {
      const url = URL.createObjectURL(e.target.files[0]);
      this.setState({
        naslovna: url,
      });
    }
  };

  handleOstaleSlike = (e) => {
    let urls = [];
    if (e.target.value) {
      for (let i = 0; i < e.target.files.length; i++) {
        let url = URL.createObjectURL(e.target.files[i]);
        urls.push(url);
      }
      this.setState({
        ostaleSlike: urls,
      });
    }
  };

  render() {
    //console.log(this.state);
    return (
      <CreateAdContext.Provider
        value={{
          ...this.state,
          ustvariOglasHandleChange: this.ustvariOglasHandleChange,
          modelToModel: this.modelToModel,
          changeStateToTrue: this.changeStateToTrue,
          changeStateToFalse: this.changeStateToFalse,
          kontaktiHandleChange: this.kontaktiHandleChange,
          handleNaslovna: this.handleNaslovna,
          handleOstaleSlike: this.handleOstaleSlike,
        }}
      >
        {this.props.children}
      </CreateAdContext.Provider>
    );
  }
}

export const CreateAdContextConsumer = CreateAdContext.Consumer;
