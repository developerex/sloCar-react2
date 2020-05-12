import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleAdInList from '../components/SingleAdInList';
import {
  getFavourites,
  fetchOneAd,
  dodajMedPriljubljene,
  dodajMedPrimerjaj,
} from '../actions';

import '../scss/Favourites.scss';
import '../scss/displayNone.scss';
import '../scss/list/AdList.scss';

class PriljubljenoPage extends Component {
  state = {
    fav: [],
    favAds: [],
    comp: [],
  };

  componentDidMount() {
    const token = this.props.userData.userLogin
      ? this.props.userData.userLogin.token
      : undefined;
    if (typeof token !== 'undefined') {
      this.props.getFavourites(this.props.userData.userLogin.token);
    }
  }

  /* 
       for(var i = 0; i < this.state.favAds.length; i++){
        var arr = this.state.favAds.includes(
            this.props.all_ads.getSingleAd.message.id
          )
            ? [...this.state.favAds]
            : [...this.state.favAds, this.props.all_ads.getSingleAd.message];
     }
      this.setState({
        favAds: arr,
      });
  */

  componentDidUpdate(prevProps) {
    if (prevProps.all_ads !== this.props.all_ads) {
      this.setState({
        favAds: [...this.state.favAds, this.props.all_ads.getSingleAd.message],
      });
    }
    if (
      this.props.favCompCD !== prevProps.favCompCD &&
      this.props.userData.userLogin.token
    ) {
      this.props.dodajMedPriljubljene(
        this.props.userData.userLogin.token,
        this.props.favCompCD
      );
      var stateArr = [];
      for (var i = 0; i < this.state.favAds.length; i++) {
        if (this.props.favCompCD.includes(this.state.favAds[i].id)) {
          stateArr.push(this.state.favAds[i]);
        }
      }
      this.setState({
        favAds: stateArr,
      });
    }
    if (this.props.favComp.fav !== prevProps.favComp.fav) {
      this.setState(
        {
          fav: JSON.parse(this.props.favComp.fav.data),
        },
        () => this.getAds()
      );
    }
  }

  getAds = () => {
    for (var i = 0; i < this.state.fav.length; i++) {
      this.props.fetchOneAd(this.state.fav[i]);
    }
  };

  isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  render() {
    console.log('#######PRILJUBLJENO', this.state, this.props);
    if (
      this.isEmpty(this.props.userData) ||
      this.props.userData.login === false
    )
      return <Redirect to="/" />;
    return (
      <div className="favourites">
        <p
          className={
            this.state.favAds.length === 0 ? 'favourites__zero' : 'displayNone'
          }
        >
          Med priljubljenimi trenutno nimate še nobenih vozil.
        </p>
        <div
          className={
            this.state.favAds.length !== 0 ? 'adList-container' : 'displayNone'
          }
        >
          {this.state.favAds.map((item) => {
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ favComp, userData, all_ads, favCompCD }) => {
  return {
    favComp,
    userData,
    all_ads,
    favCompCD,
  };
};

export default connect(mapStateToProps, {
  getFavourites,
  fetchOneAd,
  dodajMedPriljubljene,
  dodajMedPrimerjaj,
})(PriljubljenoPage);
