import React, { createRef } from 'react';
import '../scss/singleAd/SingleAd.scss';
import SingleAdSidebarRight from './SingleAdSidebarRight';
import axios from 'axios';

export default class SingleAd extends React.Component {
  state = {
    adData: {},
  };
  constructor(props) {
    super(props);
    this.osnovniPodatki = createRef();
    this.oprema = createRef();
    this.opremaVarnost = createRef();
    this.opremaUdobje = createRef();
    this.opremaMultimedija = createRef();
    this.opremaDodatnaOprema = createRef();
    this.opremaOstalo = createRef();
    this.porabaInEmisije = createRef();
    this.kontakt = createRef();
  }

  renderBorderToDefault = () => {
    const arr = [
      this.opremaVarnost.current,
      this.opremaUdobje.current,
      this.opremaMultimedija.current,
      this.opremaDodatnaOprema.current,
      this.opremaOstalo.current,
      this.porabaInEmisije.current,
      this.kontakt.current,
    ];
    arr.forEach((item) => {
      item.style.backgroundColor = '';
      item.style.border = '';
      item.style.padding = '';
      item.style.margin = '';
    });
  };

  renderBorder = (e) => {
    this.renderBorderToDefault();
    e.style.backgroundColor = '#fbfbfb';
    e.style.border = '2px solid #555';
    e.style.padding = '2rem';
    e.style.margin = '1rem';
  };

  state = {
    count: 0,
    images: [
      '/img/mercedes.jpg',
      '/img/bmw/bmw1.jpg',
      '/img/bmw/bmw2.jpg',
      '/img/bmw/bmw3.jpg',
      '/img/bmw/bmw4.jpg',
      '/img/bmw/bmw5.jpg',
    ],
    oprema: false,
    porabaEmisije: false,
  };

  currentImg = () => {
    if (this.state.count >= this.state.images.length - 1) {
      this.setState({ count: 0 });
    }
  };

  handleArrow = (e) => {
    if (e.target.dataset.type === 'next') {
      this.setState({
        count: this.state.count + 1,
      });
      this.currentImg();
    }
    if (e.target.dataset.type === 'prev') {
      this.setState({
        count:
          this.state.count > 0
            ? this.state.count - 1
            : this.state.images.length - 1,
      });
    }
  };

  handleSmallImgClick = (e) => {
    this.setState({
      count: e,
    });
  };

  renderOprema = () => {
    this.setState({
      oprema: !this.state.oprema,
    });
  };

  renderPorabaEmisije = () => {
    this.setState({
      porabaEmisije: !this.state.porabaEmisije,
    });
  };

  render() {
    const { adData: ad } = this.props;

    return (
      <>
        <div className="SingleAd-container">
          <div className="SingleAd-container__gallery">
            <p>
              <i
                data-type="prev"
                onClick={(e) => this.handleArrow(e)}
                className={`SingleAd-container__gallery__left ${
                  this.props.bgBlack &&
                  'SingleAd-container__gallery__left--bgBlack'
                } `}
              ></i>
            </p>
            <p
              className={`${this.props.bgBlack && 'close'}`}
              style={{ display: 'none' }}
              onClick={() => this.props.closeImg()}
            ></p>
            <p
              className={`${
                this.props.bgBlack ? 'pageCounter' : 'displayNone'
              }`}
            >
              {this.state.count + 1} / {this.state.images.length}
            </p>
            <div
              className={`SingleAd-container__gallery--mainImg ${
                this.props.bgBlack &&
                'SingleAd-container__gallery--mainImg--bgBlack'
              }`}
            >
              <img
                src={this.state.images[this.state.count]}
                alt="naslovna slika"
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.renderBgBlack()}
              />
            </div>
            <p>
              <i
                data-type="next"
                onClick={(e) => this.handleArrow(e)}
                className={`SingleAd-container__gallery__right ${
                  this.props.bgBlack &&
                  'SingleAd-container__gallery__right--bgBlack'
                } `}
              ></i>
            </p>
          </div>
          <div className="SingleAd-container__data" ref={this.osnovniPodatki}>
            <div className="SingleAd-container__data--main">
              <div className="SingleAd-container__data--main--title">
                <span>
                  {ad.znamka === undefined
                    ? ''
                    : `${
                        ad.znamka.charAt(0).toUpperCase() + ad.znamka.slice(1)
                      } ${ad.model} ${ad.gorivo} ${ad.prostornina} ccm ${
                        ad.motor
                      } KM`}
                </span>
                <span>
                  {ad.cena &&
                    parseInt(ad.cena).toLocaleString().replace(',', '.')}{' '}
                  €
                </span>
              </div>
              <div>
                <img
                  src={`/logo/${ad.znamka}.png`}
                  alt={ad.znamka === undefined ? '' : ad.znamka}
                  style={{ width: '30px' }}
                />
                <p>{ad.model}</p>
              </div>
              <div>
                <img
                  src={`/oblika/${ad.oblika}.png`}
                  alt={ad.oblika}
                  style={{ width: '50px' }}
                ></img>{' '}
                <p>{ad.oblika}</p>
              </div>
              <div>
                <img
                  src="/prevozeni.png"
                  alt="prevozeni kilometri"
                  style={{ width: '20px' }}
                ></img>
                <p>{parseInt(ad.km).toLocaleString().replace(',', '.')} km</p>
              </div>
              <div>
                <img
                  src="/motor.png"
                  alt="moc motorja"
                  style={{ width: '20px' }}
                />
                <p>{ad.motor} KM</p>
              </div>
              <div>
                <img
                  src={'/letnik.png'}
                  alt="letnik"
                  style={{ width: '20px' }}
                />
                <p>{ad.letnik}</p>
              </div>
              <div>
                <img
                  src={`/gorivo/${ad.gorivo}.png`}
                  alt={ad.gorivo}
                  style={{ width: '50px' }}
                />
                <p>{ad.prostornina + ' ccm'}</p>
              </div>
            </div>

            <p
              className="separation-line"
              style={{ paddingBottom: '2rem' }}
            ></p>

            <div className="SingleAd-container__data--side">
              <div>
                <img src={`/vrata.png`} alt="vrata" style={{ width: '30px' }} />
                <p>5 vrat</p>
              </div>
              <div>
                <img
                  src={`/barva.png`}
                  alt="barva"
                  style={{ width: '50px' }}
                ></img>{' '}
                <p>zelena</p>
              </div>
              <div>
                <img
                  src="/menjalnik.png"
                  alt="menjalnik"
                  style={{ width: '25px' }}
                ></img>
                <p>avtomatski</p>
              </div>
            </div>

            <div className="SingleAd-container__data--equip" ref={this.oprema}>
              <button
                className="SingleAd-container__data--equip--btn"
                onClick={() => {
                  this.renderOprema();
                  this.renderBorderToDefault();
                }}
              >
                {this.state.oprema ? 'Skrij opremo' : 'Prikazi opremo'}
              </button>
              <div
                className={
                  this.state.oprema
                    ? 'SingleAd-container__data--equip--data'
                    : 'displayNone'
                }
              >
                <div
                  className="SingleAd-container__data--equip--varnost"
                  ref={this.opremaVarnost}
                >
                  <h4>Varnost</h4>
                  <ul>
                    <li>ABS</li>
                    <li>ESP - stabilizacijski sistem</li>
                    <li>ASR - sistem proti zdrsu</li>
                    <li>Sistem za zaviranje v sili</li>
                    <li>Potovalni računalnik</li>
                    <li>Airbag: Sprednje, stranske in drugo</li>
                    <li>Tip žarometov: Xenon</li>
                    <li>Sistem pranja žarometov</li>
                  </ul>
                </div>

                <div
                  className="SingleAd-container__data--equip--udobje"
                  ref={this.opremaUdobje}
                >
                  <h4>Udobje</h4>
                  <ul>
                    <li>Klima: Ročna</li>
                    <li>Samodejno parkiranje</li>
                    <li>Zvočna opozorila pri parkiranju zadaj</li>
                    <li>Električno pomična okna</li>
                    <li>Centralno zaklepanje: Da</li>
                    <li>Servo volan</li>
                    <li>Usnjen volan</li>
                  </ul>
                </div>

                <div
                  className="SingleAd-container__data--equip--multimedija"
                  ref={this.opremaMultimedija}
                >
                  <h4>Multimedija</h4>
                  <ul>
                    <li>Radio</li>
                    <li>Navigacija</li>
                    <li>Multifunkcijski volan</li>
                    <li>Digitalni zaslon</li>
                  </ul>
                </div>

                <div
                  className="SingleAd-container__data--equip--dodatnaOprema"
                  ref={this.opremaDodatnaOprema}
                >
                  <h4>Dodatna oprema</h4>
                  <ul>
                    <li>Lita / Alu platišča</li>
                    <li>Športno vzmetenje</li>
                    <li>Zračno vzmetenje</li>
                    <li>Strešne sani</li>
                    <li>Panoramska streha</li>
                  </ul>
                </div>

                <div
                  className="SingleAd-container__data--equip--ostalo"
                  ref={this.opremaOstalo}
                >
                  <h4>Ostalo</h4>
                  <ul>
                    <li>Garažirano</li>
                    <li>Potrjena servisna knjiga</li>
                    <li>Brezhibno</li>
                    <li>Start-stop sistem</li>
                  </ul>
                  <p style={{ paddingTop: '.5rem' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam rerum facilis voluptates ipsa exercitationem autem
                    nam, dolor sit officiis reprehenderit pariatur, neque
                    quaerat maiores facere corrupti possimus distinctio iusto
                    enim?
                  </p>
                </div>
              </div>

              <div className="SingleAd-container__data--porabaEmisije">
                <button
                  className="SingleAd-container__data--porabaEmisije--btn"
                  onClick={() => {
                    this.renderPorabaEmisije();
                    this.renderBorderToDefault();
                  }}
                >
                  {this.state.porabaEmisije
                    ? 'Skrij porabo in emisije'
                    : 'Prikazi porabo in emisije'}
                </button>
                <div
                  className={
                    this.state.porabaEmisije
                      ? 'SingleAd-container__data--porabaEmisije--data'
                      : 'displayNone'
                  }
                  ref={this.porabaInEmisije}
                >
                  <p>
                    Kombinirana poraba <span>6,6 L/100km</span>
                  </p>
                  <p>
                    Emisijski razred <span>Euro</span>
                  </p>

                  <p>
                    Mestna poraba <span>7,0 L/100km</span>
                  </p>
                  <p>
                    CO2 emisije <span>172 g/km</span>
                  </p>
                  <p>
                    Izvenmestna poraba <span>6,4 L/100km</span>
                  </p>
                </div>
              </div>

              <p
                className="separation-line"
                style={{ paddingBottom: '1rem' }}
              ></p>

              <div
                className="SingleAd-container__data--kontakt"
                ref={this.kontakt}
              >
                <p>
                  Kontakt prodajalca <span>Lima Ci: 030/222/222</span>
                </p>
                <img src="/img/ljubljana.jpg" alt="lj" />
              </div>
            </div>
          </div>
        </div>

        <SingleAdSidebarRight
          count={this.state.count}
          images={this.state.images}
          handleSmallImgClick={this.handleSmallImgClick}
        />
        <>
          <div className="SingleAdSidebarLeft">
            <div className="SingleAdSidebarLeft__content">
              <ul>
                <li
                  onClick={() => this.osnovniPodatki.current.scrollIntoView()}
                >
                  Osnovni podatki
                </li>
                <li onClick={() => this.props.renderBgBlack()}>
                  Galerija slika
                </li>
                <li
                  onClick={() => {
                    this.setState({ oprema: true }, () => {
                      this.oprema.current.scrollIntoView();
                    });
                    this.renderBorderToDefault();
                  }}
                >
                  Oprema
                </li>
                <li
                  onClick={() => {
                    this.setState(
                      {
                        oprema: true,
                      },
                      () => {
                        this.opremaVarnost.current.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                        this.renderBorder(this.opremaVarnost.current);
                      }
                    );
                  }}
                >
                  Varnost
                </li>
                <li
                  onClick={() => {
                    this.setState(
                      {
                        oprema: true,
                      },
                      () => {
                        this.opremaUdobje.current.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                        this.renderBorder(this.opremaUdobje.current);
                      }
                    );
                  }}
                >
                  Udobje
                </li>
                <li
                  onClick={() => {
                    this.setState(
                      {
                        oprema: true,
                      },
                      () => {
                        this.opremaMultimedija.current.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                        this.renderBorder(this.opremaMultimedija.current);
                      }
                    );
                  }}
                >
                  Multimedija
                </li>
                <li
                  onClick={() => {
                    this.setState(
                      {
                        oprema: true,
                      },
                      () => {
                        this.opremaDodatnaOprema.current.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                        this.renderBorder(this.opremaDodatnaOprema.current);
                      }
                    );
                  }}
                >
                  Dodatna oprema
                </li>
                <li
                  onClick={() => {
                    this.setState(
                      {
                        oprema: true,
                      },
                      () => {
                        this.opremaOstalo.current.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                        this.renderBorder(this.opremaOstalo.current);
                      }
                    );
                  }}
                >
                  Ostalo
                </li>
                <li
                  onClick={() =>
                    this.setState(
                      {
                        porabaEmisije: true,
                      },
                      () => {
                        this.porabaInEmisije.current.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                        this.renderBorder(this.porabaInEmisije.current);
                      }
                    )
                  }
                >
                  Poraba in emisije
                </li>
                <li
                  onClick={() => {
                    this.setState(
                      {
                        porabaEmisije: true,
                      },
                      () => {
                        this.porabaInEmisije.current.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                        this.renderBorder(this.kontakt.current);
                      }
                    );
                  }}
                >
                  Kontakt prodajalca
                </li>
              </ul>
            </div>
          </div>
        </>
      </>
    );
  }
}
