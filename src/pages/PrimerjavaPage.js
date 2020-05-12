import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getComparison, fetchOneAd, dodajMedPrimerjaj } from '../actions';
import SingleAdIdComparison from '../components/SingleAdInComparison';

import '../scss/Favourites.scss';
import '../scss/displayNone.scss';
import '../scss/Comparison.scss';

class PrimerjavaPage extends Component {
  state = {
    comp: [],
    compAds: [],
  };

  componentDidMount() {
    const token = this.props.userData.userLogin
      ? this.props.userData.userLogin.token
      : undefined;
    if (typeof token !== 'undefined') {
      this.props.getComparison(this.props.userData.userLogin.token);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.all_ads !== this.props.all_ads) {
      this.setState({
        compAds: [
          ...this.state.compAds,
          this.props.all_ads.getSingleAd.message,
        ],
      });
    }
    if (
      this.props.compCD !== prevProps.compCD &&
      this.props.userData.userLogin.token
    ) {
      this.props.dodajMedPriljubljene(
        this.props.userData.userLogin.token,
        this.props.compCD
      );
      var stateArr = [];
      for (var i = 0; i < this.state.compAds.length; i++) {
        if (this.props.favCompCD.includes(this.state.compAds[i].id)) {
          stateArr.push(this.state.compAds[i]);
        }
      }
      this.setState({
        compAds: stateArr,
      });
    }
    if (this.props.favComp.comp !== prevProps.favComp.comp) {
      this.setState(
        {
          comp: JSON.parse(this.props.favComp.comp.data),
        },
        () => this.getAds()
      );
    }
  }

  getAds = () => {
    for (var i = 0; i < this.state.comp.length; i++) {
      this.props.fetchOneAd(this.state.comp[i]);
    }
  };

  isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  render() {
    console.log('#######PRIMERJAVA', this.state, this.props);
    if (
      this.isEmpty(this.props.userData) ||
      this.props.userData.login === false
    )
      return <Redirect to="/" />;
    return (
      <div className="favourites">
        <p
          className={
            this.state.compAds.length === 0 ? 'favourites__zero' : 'displayNone'
          }
        >
          Za primerjavo niste izbrali še nobenih vozil.
        </p>
        <div
          className={
            this.state.compAds.length !== 0
              ? 'comparison-container'
              : 'displayNone'
          }
        >
          {this.state.compAds.map((item) => {
            return (
              <SingleAdIdComparison
                primerjaj={this.state.comp}
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
                valji={JSON.parse(item.tehnicniPodatki)[0]}
                pogon={JSON.parse(item.tehnicniPodatki)[1]}
                menjalnik={JSON.parse(item.tehnicniPodatki)[2]}
                barvaZunanjosti={JSON.parse(item.izgled)[0]}
                barvaNotrajnosti={JSON.parse(item.izgled)[1]}
                steviloSedezev={JSON.parse(item.izgled)[2]}
                vrata={JSON.parse(item.izgled)[3]}
                emisijskiRazred={JSON.parse(item.emisije)[0]}
                co2={JSON.parse(item.emisije)[1]}
                mestnaPoraba={JSON.parse(item.emisije)[2]}
                izvenmestnaPoraba={JSON.parse(item.emisije)[3]}
                kombiniranaPoraba={JSON.parse(item.emisije)[4]}
                prvaRegistracija={JSON.parse(item.podatki)[0]}
                tehnicniPregled={JSON.parse(item.podatki)[1]}
                lastnistvo={JSON.parse(item.podatki)[2]}
                stanje={JSON.parse(item.podatki)[3]}
                poreklo={JSON.parse(item.podatki)[4]}
                oprema={JSON.parse(item.oprema)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ favComp, userData, all_ads, compCD }) => {
  return {
    userData,
    all_ads,
    favComp,
    compCD,
  };
};

export default connect(mapStateToProps, {
  getComparison,
  fetchOneAd,
  dodajMedPrimerjaj,
})(PrimerjavaPage);
