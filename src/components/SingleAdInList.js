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
          priljubljenoText: 'Odstrani vozilo iz priljubljenih',
        });
      }
    }
    if (this.props.primerjaj.length > 0) {
      if (this.props.primerjaj.includes(this.props.id)) {
        this.setState({
          primerjaj: true,
          primerjajText: 'Odstrani vozilo iz primerjave',
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
        this.setState({
          priljubljeno: true,
          priljubljenoText: 'Odstrani vozilo iz priljubljenih',
        });
      }
      if (this.props.priljubljeno.length === 0) {
        this.setState({
          priljubljeno: false,
          priljubljenoText: 'Dodaj vozilo med priljubljene',
          reqLogin: true,
        });
      }
    }
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

  priljubljenoClicked = (e, id) => {
    if (this.state.reqLogin) {
      this.setState({
        priljubljenoText: 'Najprej se morate prijaviti',
      });
    } else {
      if (e.target.dataset.priljubljeno === 'prilDodaj') {
        this.props.dodajMedPriljubljeneCD(
          id,
          this.props.userData.userLogin.token
        );
        this.setState({
          priljubljeno: true,
          priljubljenoText: 'Odstrani vozilo iz priljubljenih',
        });
      } else {
        this.props.izbrisiPriljubljeneCD(
          id,
          this.props.userData.userLogin.token
        );
        this.setState({
          priljubljeno: false,
          priljubljenoText: 'Dodaj vozilo med priljubljene',
        });
      }
    }
  };

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
      <div className="adList-container__item" key={this.props.key}>
        <div className="adList-container__item--img">
          <div>
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

          <Link to={`/ads/${this.props.id}`} className="ogled">
            Oglej si oglas
          </Link>

          <div className="adList-container__item--primerjajPriljubljeno">
            <div>
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
            <div>
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
              <p
                style={{
                  color:
                    this.state.priljubljenoText ===
                    'Najprej se morate prijaviti'
                      ? '#DC143C'
                      : '#000',
                }}
              >
                {this.state.priljubljenoText}
              </p>
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
