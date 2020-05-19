import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  dodajMedPriljubljeneCD,
  izbrisiPriljubljeneCD,
  dodajPrimerjajCD,
  izbrisiPrimerjajCD,
} from '../actions';

class SingleAdInList extends React.Component {
  state = {
    priljubljeno: false,
    reqLogin: true,
    primerjaj: false,
    priljubljenoText: 'Dodaj vozilo med priljubljene',
    primerjajText: 'Primerjaj z drugim vozilom',
    novo: false,
    date: '',
    hoverText: false,
    hoverTextPrimerjaj: false,
  };

  componentDidMount() {
    if (this.props.userData && this.props.userData.userLogin) {
      if (this.props.userData.userLogin.success === 1) {
        this.setState({
          reqLogin: false,
        });
      }
    }
    if (this.props.priljubljeno.length > 0) {
      if (this.props.priljubljeno.includes(this.props.id)) {
        this.setState({
          priljubljeno: true,
        });
      }
    }
    if (this.props.primerjaj.length > 0) {
      if (this.props.primerjaj.includes(this.props.id)) {
        this.setState({
          primerjaj: true,
        });
      }
    }
    this.checkDate();
  }

  checkDate = () => {
    var date = this.props.datum.substr(0, 10);
    var year = date.substr(0, 4);
    var day = date.substr(8, 10);
    var month = date.substr(4, 4).replace('-', '').replace('-', '');

    var time = this.props.datum.substr(11, 11).split(':');

    var newDate = `${day}.${month}.${year} ob ${time[0]}:${time[1]}`;
    this.setState({
      date: newDate,
    });

    var today = new Date().getTime();
    var d = new Date(
      Date.UTC(year, month - 1, day, time[0] - 2, time[1])
    ).getTime();

    if (today - d < 604800000) {
      this.setState({
        novo: true,
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.priljubljeno.length !== this.props.priljubljeno.length) {
      if (this.props.priljubljeno.includes(this.props.id)) {
        this.setState(
          {
            priljubljeno: true,
            priljubljenoText: 'Dodano med priljubljene',
            hoverText: true,
          },
          () =>
            setTimeout(() => {
              this.setState({
                hoverText: false,
              });
            }, 1000)
        );
      }
      if (this.props.priljubljeno.length === 0) {
        this.setState({
          priljubljeno: false,
          reqLogin: true,
        });
      }
    }
    if (prevProps.primerjaj.length !== this.props.primerjaj.length) {
      if (this.props.primerjaj.includes(this.props.id)) {
        this.setState(
          {
            primerjaj: true,
            primerjajText: 'Dodano v primerjavo',
            hoverTextPrimerjaj: true,
          },
          () =>
            setTimeout(() => {
              this.setState({
                hoverTextPrimerjaj: false,
              });
            }, 1000)
        );
      }
      if (
        this.props.primerjaj.length === 0 &&
        this.props.userData.login === false
      ) {
        this.setState({
          primerjaj: false,
          reqLogin: true,
        });
      }
    }
  }

  priljubljenoClicked = (e, id) => {
    if (this.state.reqLogin) {
      this.setState(
        {
          priljubljenoText: 'Najprej se morate prijaviti',
          hoverText: true,
        },
        () =>
          setTimeout(() => {
            this.setState({
              hoverText: false,
            });
          }, 1000)
      );
    } else {
      if (e.target.dataset.priljubljeno === 'prilDodaj') {
        this.props.dodajMedPriljubljeneCD(
          id,
          this.props.userData.userLogin.token
        );
        this.setState(
          {
            priljubljeno: true,
            priljubljenoText: 'Dodano med priljubljene',
            hoverText: true,
          },
          () =>
            setTimeout(() => {
              this.setState({
                hoverText: false,
              });
            }, 1000)
        );
      } else {
        this.props.izbrisiPriljubljeneCD(
          id,
          this.props.userData.userLogin.token
        );
        this.setState({
          priljubljeno: false,
        });
      }
    }
  };

  primerjajClicked = (e, id) => {
    if (this.state.reqLogin) {
      this.setState(
        {
          primerjajText: 'Najprej se morate prijaviti',
          hoverTextPrimerjaj: true,
        },
        () =>
          setTimeout(() => {
            this.setState({
              hoverTextPrimerjaj: false,
            });
          }, 1000)
      );
    } else {
      if (e.target.dataset.primerjaj === 'primerjajDodaj') {
        if (this.props.primerjaj.length < 3) {
          this.props.dodajPrimerjajCD(id, this.props.userData.userLogin.token);
          this.setState(
            {
              primerjaj: true,
              primerjajText: 'Dodano v primerjavo',
              hoverTextPrimerjaj: true,
            },
            () =>
              setTimeout(() => {
                this.setState({
                  hoverTextPrimerjaj: false,
                });
              }, 1000)
          );
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
      <div className="adList-container__item" key={this.props.key}>
        <div className="adList-container__item--img">
          <div className="adList-container__item--img--imgContainer">
            <img src={this.props.srcImg} alt="car"></img>
            <img
              src="/novo.png"
              alt="novo"
              className={
                this.state.novo
                  ? 'adList-container__item--img--novo'
                  : 'displayNone'
              }
            />
          </div>
        </div>
        <div className="adList-container__item--data">
          <p className="adList-container__item--data--ime">{this.props.ime}</p>
          <div className="adList-container__item--data--mainDivs adList-container__item--data--znamka">
            <img
              src={`/logo/${this.props.znamka}.png`}
              alt={this.props.znamka}
              style={{ width: '30px' }}
            />
            <p>{this.props.model}</p>
          </div>
          <div className="adList-container__item--data--mainDivs adList-container__item--data--letnik">
            <img src={'/letnik.png'} alt="letnik" style={{ width: '20px' }} />
            <p>{this.props.letnik}</p>
          </div>
          <div className="adList-container__item--data--mainDivs adList-container__item--data--km">
            <img
              src="/prevozeni.png"
              alt="prevozeni kilometri"
              style={{ width: '20px' }}
            />
            <p>
              {parseInt(this.props.km).toLocaleString().replace(',', '.')} km
            </p>
          </div>
          <div className="adList-container__item--data--mainDivs adList-container__item--data--motor">
            <img src="/motor.png" alt="moc motorja" style={{ width: '20px' }} />
            <p>{this.props.motor} KM</p>
          </div>
          <div className="adList-container__item--data--mainDivs adList-container__item--data--oblika">
            <img
              src={`/oblika/${this.props.oblika}.png`}
              alt={this.props.oblika}
              style={{ width: '50px' }}
            ></img>
            <p>{this.props.oblika}</p>
          </div>
          <div className="adList-container__item--data--mainDivs adList-container__item--data--gorivo">
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

          <Link to={`/ads/${this.props.id}`} className="ogled">
            Oglej si oglas
          </Link>

          <p
            className={
              this.state.hoverText
                ? 'adList-container__item--data--hoverPriljubljenoText'
                : 'displayNone'
            }
            style={{
              color:
                this.state.priljubljenoText === 'Najprej se morate prijaviti'
                  ? '#DC143C'
                  : '#32CD32',
            }}
          >
            {this.state.priljubljenoText}
          </p>
          <p
            className={
              this.state.hoverTextPrimerjaj
                ? 'adList-container__item--data--hoverPrimerjajText'
                : 'displayNone'
            }
            style={{
              color:
                this.state.primerjajText === 'Najprej se morate prijaviti'
                  ? '#DC143C'
                  : '#32CD32',
            }}
          >
            {this.state.primerjajText}
          </p>

          <div className="adList-container__item--primerjajPriljubljeno">
            <div className="adList-container__item--primerjajPriljubljeno--divs">
              <img
                src={
                  this.state.primerjaj ? '/primerjaj2.png' : '/primerjaj.png'
                }
                alt="Primerjava vozil"
                data-primerjaj={
                  this.state.primerjaj ? 'primerjajOdstrani' : 'primerjajDodaj'
                }
                onClick={(e) => this.primerjajClicked(e, this.props.id)}
              />
            </div>
            <div className="adList-container__item--primerjajPriljubljeno--divs adList-container__item--primerjajPriljubljeno--divs--priljubljeno">
              <img
                src={
                  this.state.priljubljeno
                    ? '/priljubljeno2.png'
                    : '/priljubljeno.png'
                }
                alt="Priljubljena vozila"
                data-priljubljeno={
                  this.state.priljubljeno ? 'prilOdstrani' : 'prilDodaj'
                }
                onClick={(e) => this.priljubljenoClicked(e, this.props.id)}
              />
            </div>
          </div>
          <p className="adList-container__item--data--datum">
            Objavljeno: {this.state.date}
          </p>
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
  dodajMedPriljubljeneCD,
  izbrisiPriljubljeneCD,
  dodajPrimerjajCD,
  izbrisiPrimerjajCD,
})(SingleAdInList);
