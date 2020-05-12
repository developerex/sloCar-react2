import React from 'react';
import { AdConsumer } from '../context/context';
import { connect } from 'react-redux';
import {
  dodajMedPriljubljene,
  getFavourites,
  dodajMedPrimerjaj,
  getComparison,
} from '../actions';

import '../scss/list/AdList.scss';
import { Link } from 'react-router-dom';
import AdListSidebarLeft from './AdListSidebarLeft';
import AdListSidebarRight from './AdListSidebarRight';
import Pagination from './Pagination';
import SingleAdInList from './SingleAdInList';

class AdList extends React.Component {
  state = {
    fav: [],
    comp: [],
  };

  componentDidMount() {
    const token = this.props.userData.userLogin
      ? this.props.userData.userLogin.token
      : undefined;
    if (typeof token !== 'undefined') {
      this.props.getFavourites(this.props.userData.userLogin.token);
      this.props.getComparison(this.props.userData.userLogin.token);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.favCompCD !== prevProps.favCompCD &&
      this.props.userData.userLogin.token
    ) {
      this.props.dodajMedPriljubljene(
        this.props.userData.userLogin.token,
        this.props.favCompCD
      );
    }
    if (this.props.favComp.fav !== prevProps.favComp.fav) {
      this.setState({
        fav: JSON.parse(this.props.favComp.fav.data),
      });
    }
    if (
      this.props.compCD !== prevProps.compCD &&
      this.props.userData.userLogin.token
    ) {
      this.props.dodajMedPrimerjaj(
        this.props.userData.userLogin.token,
        this.props.compCD
      );
      if (this.state.comp.length > this.props.compCD.length) {
        var stateArr = [];
        for (var i = 0; i < this.state.comp.length; i++) {
          if (this.props.compCD.includes(this.state.comp[i])) {
            stateArr.push(this.state.comp[i]);
          }
        }
        this.setState({
          comp: stateArr,
        });
      } else if (this.state.comp.length < this.props.compCD.length) {
        var stateArr = [...this.props.compCD];
        this.setState({
          comp: stateArr,
        });
      }
    }
    if (this.props.favComp.comp !== prevProps.favComp.comp) {
      this.setState({
        comp: JSON.parse(this.props.favComp.comp.data),
      });
    }
    if (this.props.userData.login !== prevProps.userData.login) {
      if (this.props.userData.login === false) {
        this.setState({
          fav: [],
          comp: [],
        });
      }
    }
  }

  renderPrimerjajTab = () => {
    if (this.state.comp.length > 0) {
      return (
        <div className="adList-container__comparisonTab">
          <p>
            {this.state.comp.length === 1
              ? 'Za primerjavo morate izbrati še vsaj eno vozilo'
              : this.state.comp.length === 2
              ? 'V kolikor želite lahko izberete še eno vozilo'
              : 'Med seboj lahko primerjate največ tri vozila'}
          </p>
          <Link
            to="/primerjava"
            className={
              this.state.comp.length === 1
                ? 'displayNone'
                : 'adList-container__comparisonTab--btn'
            }
          >
            Primerjaj
          </Link>
        </div>
      );
    }
  };

  render() {
    console.log('ADLIST', this.state);
    return (
      <AdConsumer>
        {(value) => {
          const { filteredAds, pagination, prevNext } = value;
          const test = pagination(filteredAds);
          console.log(test);
          return (
            <>
              <div className="adList-container">
                {test.map((item) => {
                  return (
                    <SingleAdInList
                      primerjaj={this.state.comp}
                      priljubljeno={this.state.fav}
                      key={item.id}
                      srcImg={'/img/bg/volkswagen.jpg'}
                      znamka={item.znamka}
                      model={item.model}
                      oblika={item.oblika}
                      km={item.km}
                      motor={item.motor}
                      letnik={item.letnik}
                      gorivo={item.gorivo}
                      prostornina={item.prostornina}
                      cena={item.cena}
                      id={item.id}
                    />
                  );
                })}
                {this.renderPrimerjajTab()}
              </div>
              <Pagination />

              <AdListSidebarLeft />
              <AdListSidebarRight />
            </>
          );
        }}
      </AdConsumer>
    );
  }
}

const mapStateToProps = ({ favCompCD, userData, favComp, compCD }) => {
  return {
    favCompCD,
    userData,
    favComp,
    compCD,
  };
};

export default connect(mapStateToProps, {
  dodajMedPriljubljene,
  getFavourites,
  dodajMedPrimerjaj,
  getComparison,
})(AdList);

{
  /*  {test.map((item, index) => {
                  //console.log(item);
                  return (
                    <div className="adList-container__item" key={index}>
                      <div className="adList-container__item--img">
                        <div>
                          <img src="/img/bg/volkswagen.jpg" alt="car"></img>
                        </div>
                      </div>
                      <div className="adList-container__item--data">
                        <div>
                          <img
                            src={`/logo/${item.znamka}.png`}
                            alt={item.znamka}
                            style={{ width: '30px' }}
                          />
                          <p>{item.model}</p>
                        </div>
                        <div>
                          <img
                            src={`/oblika/${item.oblika}.png`}
                            alt={item.oblika}
                            style={{ width: '50px' }}
                          ></img>{' '}
                          <p>{item.oblika}</p>
                        </div>
                        <div>
                          <img
                            src="/prevozeni.png"
                            alt="prevozeni kilometri"
                            style={{ width: '20px' }}
                          />
                          <p>
                            {parseInt(item.km)
                              .toLocaleString()
                              .replace(',', '.')}{' '}
                            km
                          </p>
                        </div>
                        <div>
                          <img
                            src="/motor.png"
                            alt="moc motorja"
                            style={{ width: '20px' }}
                          />
                          <p>{item.motor} KM</p>
                        </div>
                        <div>
                          <img
                            src={'/letnik.png'}
                            alt="letnik"
                            style={{ width: '20px' }}
                          />
                          <p>{item.letnik}</p>
                        </div>
                        <div>
                          <img
                            src={`/gorivo/${item.gorivo}.png`}
                            alt={item.gorivo}
                            style={{ width: '50px' }}
                          />
                          <p>
                            {item.prostornina &&
                              (parseInt(item.prostornina) / 1000).toFixed(1) +
                                ' ccm'}
                          </p>
                        </div>
                        <div className="cena">
                          {item.cena &&
                            parseInt(item.cena)
                              .toLocaleString()
                              .replace(',', '.')}
                          &nbsp;€
                        </div>

                        <Link to={`/ads/${item.id}`} className="ogled">
                          Oglej si oglas
                        </Link>
                      </div>
                    </div>
                  );
                })} */
}
