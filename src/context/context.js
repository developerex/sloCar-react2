import React, { Component } from 'react';

import { znamke } from '../data/znamke';
import { modeli } from '../data/modeli';
import { motorjiOd, motorjiDo } from '../data/motorji';
import { vsikm } from '../data/vsikm';
import { porabe } from '../data/porabe';
import { oblike } from '../data/oblike';
import { ceneOd, ceneDo } from '../data/cene';
import { prostornineOd, prostornineDo } from '../data/prostornine';
import { letnikiOd, letnikiDo } from '../data/letniki';

import axios from 'axios';

const AdContext = React.createContext();

export class AdProvider extends Component {
  state = {
    vseZnamke: znamke,
    vsiModeli: modeli,
    vsePorabe: porabe,
    vsiKm: vsikm,
    vsiMotorjiOd: motorjiOd,
    vsiMotorjiDo: motorjiDo,
    vseProstornineOd: prostornineOd,
    vseProstornineDo: prostornineDo,
    vseOblike: oblike,
    vseCeneOd: ceneOd,
    vseCeneDo: ceneDo,
    vsiLetnikiOd: letnikiOd,
    vsiLetnikiDo: letnikiDo,
    znamka: 'znamka',
    model: 'model',
    poraba: 'poraba do',
    cenaOd: 'cena od',
    cenaDo: 'cena do',
    prostorninaOd: 'prostornina od',
    prostorninaDo: 'prostornina do',
    motorOd: 'moc motorja od',
    motorDo: 'moc motorja do',
    letnikOd: 'letnik od',
    letnikDo: 'letnik do',
    km: 'prevozeni km do',
    oblika: 'oblika',
    ads: [],
    filteredAds: [],
    currentPage: 0,
    pages: 18,
    prevNext: {
      activePrev: false,
      activeNext: true,
      singlePage: 0,
    },
    razvrstitev: 'razvrstitev',
  };

  componentDidMount() {
    axios
      .get('https://radiant-fortress-56278.herokuapp.com/posts')
      .then((res) => {
        this.setState({
          ads: res.data.message,
          filteredAds: res.data.message,
        });
      });
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      this.sortData
    );
  };

  modelToModel = () => {
    this.setState({
      model: 'model',
    });
  };

  sortData = () => {
    const {
      znamka,
      model,
      motor,
      km,
      poraba,
      oblika,
      ads,
      filteredAds,
      razvrstitev,
    } = this.state;
    let tempAds = [...ads];
    //////// FILTERING //////////
    if (znamka !== 'znamka') {
      tempAds = tempAds.filter((item) => item.znamka === znamka);
    }
    if (model !== 'model') {
      tempAds = tempAds.filter((item) => item.model === model);
    }
    if (oblika !== 'oblika') {
      tempAds = tempAds.filter((item) => item.oblika === oblika);
    }
    /*  if (motor !== 'motor') {
      const tempMotor = parseInt(motor);
      tempAds = tempAds.filter(item => item.motor <= tempMotor);
    } */
    //////// SORTING //////////
    if (razvrstitev === 'cenadol') {
      tempAds = tempAds.sort((a, b) => b.cena - a.cena);
    }
    if (razvrstitev === 'cenagor') {
      tempAds = tempAds.sort((a, b) => a.cena - b.cena);
    }

    this.setState({
      filteredAds: tempAds,
    });
  };

  pagination = (adsArray, type = 'nimaveze', e) => {
    if (type === 'next') {
      this.setState(
        {
          currentPage: this.state.currentPage + 18,
          pages: this.state.pages + 18,
          prevNext: {
            activePrev: true,
            activeNext: true,
            singlePage: this.state.prevNext.singlePage + 1,
          },
        },
        () => window.scrollTo(0, 0)
      );
    } else if (type === 'prev') {
      this.setState(
        {
          currentPage: this.state.currentPage + -18,
          pages: this.state.pages - 18,
          prevNext: {
            activePrev: this.state.prevNext.activePrev,
            activeNext: this.state.prevNext.activeNext,
            singlePage: this.state.prevNext.singlePage - 1,
          },
        },
        () => window.scrollTo(0, 0)
      );
    } else if (type === 'goToPageNum') {
      let num = e.target.dataset.pagenum;
      if (num !== '...') {
        this.setState(
          {
            pages: (num - 1) * 18 + 18,
            currentPage: (num - 1) * 18,
            prevNext: {
              activePrev: num - 1 > 0 ? true : false,
              activeNext:
                num - 1 < this.state.filteredAds.length - 1 ? true : false,
              singlePage: num - 1,
            },
          },
          () => window.scrollTo(0, 0)
        );
      }
    }
    const display10Ads = adsArray.slice(
      this.state.currentPage,
      this.state.pages
    );
    return display10Ads;
  };

  setToDefault = () => {
    this.setState({
      currentPage: 0,
      pages: 18,
      prevNext: {
        activePrev: false,
        activeNext: true,
        singlePage: 0,
      },
    });
  };

  render() {
    //console.log('CONTEXT', this.state.prevNext.singlePage);

    return (
      <AdContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          modelToModel: this.modelToModel,
          pagination: this.pagination,
          setToDefault: this.setToDefault,
        }}
      >
        {this.props.children}
      </AdContext.Provider>
    );
  }
}

export const AdConsumer = AdContext.Consumer;
