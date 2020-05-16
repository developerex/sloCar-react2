import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getComparison, fetchOneAd, dodajMedPrimerjaj } from '../actions';
import SingleAdIdComparison from '../components/SingleAdInComparison';

import '../scss/ComparisonPage.scss';
import '../scss/displayNone.scss';
import '../scss/Comparison.scss';
import Loader from '../utils/Loader';

class PrimerjavaPage extends Component {
  state = {
    comp: [],
    compAds: [],
    renderArrays: [],
    trigger: [],
    triggerSecond: [],
  };

  constructor(props) {
    super(props);

    this.obj1 = {};
    this.obj2 = {};
    this.obj3 = {};
    this.newArr = [];
  }

  componentDidMount() {
    const token = this.props.userData.userLogin
      ? this.props.userData.userLogin.token
      : undefined;
    if (typeof token !== 'undefined') {
      this.props.getComparison(this.props.userData.userLogin.token);
    }
  }

  componentDidUpdate(prevProps, prevState) {
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
        twoArrays: stateArr,
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
    if (
      prevState.compAds.length !== this.state.compAds.length ||
      this.state.compAds.length > 0
    ) {
      if (this.state.comp.length === 2) {
        this.renderJSONarray(2);
      } else if (this.state.comp.length === 3) {
        this.renderJSONarray(3);
      }
    }
    /*  if (
      prevState.twoArrays.length !== this.state.twoArrays.length ||
      this.state.twoArrays.length > 0
    ) {
      //this.compareTwoArrays(this.state.twoArrays[0], this.state.twoArrays[1]);}
    } */
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

  renderJSONarray = (len) => {
    var arr = [];
    for (var i = 0; i < this.state.compAds.length; i++) {
      arr.push(JSON.parse(this.state.compAds[i].oprema));
      for (var x = 0; x < arr[i].length; x++) {
        arr[i][x] = JSON.parse(arr[i][x]);
      }
    }
    var list = [
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
    if (len === 2) {
      if (arr.length === 2) {
        if (typeof arr[1][arr[1].length - 1] !== 'string') {
          for (var k = 0; k < arr[0].length; k++) {
            this.newArr = [
              ...this.compareTwoArrays(arr[0][k], arr[1][k], list[k]),
            ];
          }
        }
      }
      if (this.newArr.length === 2 && this.state.trigger.length === 0) {
        this.setState({
          trigger: this.newArr,
          renderArrays: [
            { ...this.state.compAds[0], oprema: this.newArr[0] },
            { ...this.state.compAds[1], oprema: this.newArr[1] },
          ],
        });
      }
    }
    if (len === 3) {
      if (arr.length === 3) {
        if (typeof arr[2][arr[2].length - 1] !== 'string') {
          for (var k = 0; k < arr[0].length; k++) {
            this.newArr = [
              ...this.compareThreeArrays(
                arr[0][k],
                arr[1][k],
                arr[2][k],
                list[k]
              ),
            ];
          }
        }
      }
      if (this.newArr.length === 3 && this.state.triggerSecond.length === 0) {
        this.setState({
          triggerSecond: this.newArr,
          renderArrays: [
            { ...this.state.compAds[0], oprema: this.newArr[0] },
            { ...this.state.compAds[1], oprema: this.newArr[1] },
            { ...this.state.compAds[2], oprema: this.newArr[2] },
          ],
        });
      }
    }
  };

  compareTwoArrays = (arr1, arr2, ime) => {
    var newArr1 = [];
    var newArr2 = [];
    var val_1 = [];
    var val_2 = [];
    for (var i = 0; i < arr1.length; i++) {
      if (
        (arr1[i] === 1 && arr2[i] === 1) ||
        (arr1[i] === 1 && arr2[i] === 0)
      ) {
        newArr1 = [...newArr1, i];
        this.obj1 = { ...this.obj1, one: { ...this.obj1.one, [ime]: newArr1 } };
        if (arr1[i] === 1 && arr2[i] === 0) {
          val_1 = [...val_1, i];
          this.obj2 = {
            ...this.obj2,
            zero: { ...this.obj2.zero, [ime]: val_1 },
          };
        }
      }
      if (
        (arr2[i] === 1 && arr1[i] === 1) ||
        (arr2[i] === 1 && arr1[i] === 0)
      ) {
        newArr2 = [...newArr2, i];
        this.obj2 = { ...this.obj2, one: { ...this.obj2.one, [ime]: newArr2 } };
        if (arr2[i] === 1 && arr1[i] === 0) {
          val_2 = [...val_2, i];
          this.obj1 = {
            ...this.obj1,
            zero: { ...this.obj1.zero, [ime]: val_2 },
          };
        }
      }
    }
    return [this.obj1, this.obj2];
  };

  compareThreeArrays = (array1, array2, array3, ime) => {
    var arr1 = array1;
    var arr2 = array2;
    var arr3 = array3;
    var newArrTrue1 = [];
    var newArrTrue2 = [];
    var newArrTrue3 = [];
    var newArrFalse1 = [];
    var newArrFalse2 = [];
    var newArrFalse3 = [];

    for (var i = 0; i < arr1.length; i++) {
      if (
        (arr1[i] === arr2[i] && arr1[i] === 1 && arr3[i] === 0) ||
        (arr1[i] === arr3[i] && arr1[i] === 1 && arr2[i] === 0) ||
        (arr1[i] === 1 && arr2[i] === 0 && arr3[i] === 0) ||
        (arr1[i] === arr2[i] && arr1[i] === arr3[i] && arr1[i] === 1)
      ) {
        newArrTrue1.push(i);
        this.obj1 = {
          ...this.obj1,
          one: { ...this.obj1.one, [ime]: newArrTrue1 },
        };
      }
      if (
        (arr1[i] === 0 && arr2[i] === 1) ||
        (arr1[i] === 0 && arr3[i] === 1)
      ) {
        newArrFalse1.push(i);
        this.obj1 = {
          ...this.obj1,
          zero: { ...this.obj1.zero, [ime]: newArrFalse1 },
        };
      }
      if (
        (arr2[i] === arr1[i] && arr2[i] === 1 && arr3[i] === 0) ||
        (arr2[i] === arr3[i] && arr2[i] === 1 && arr1[i] === 0) ||
        (arr2[i] === 1 && arr1[i] === 0 && arr3[i] === 0) ||
        (arr1[i] === arr2[i] && arr1[i] === arr3[i] && arr1[i] === 1)
      ) {
        newArrTrue2.push(i);
        this.obj2 = {
          ...this.obj2,
          one: { ...this.obj2.one, [ime]: newArrTrue2 },
        };
      }
      if (
        (arr2[i] === 0 && arr1[i] === 1) ||
        (arr2[i] === 0 && arr3[i] === 1)
      ) {
        newArrFalse2.push(i);
        this.obj2 = {
          ...this.obj2,
          zero: { ...this.obj2.zero, [ime]: newArrFalse2 },
        };
      }
      if (
        (arr3[i] === arr1[i] && arr3[i] === 1 && arr2[i] === 0) ||
        (arr3[i] === arr2[i] && arr3[i] === 1 && arr1[i] === 0) ||
        (arr3[i] === 1 && arr1[i] === 0 && arr2[i] === 0) ||
        (arr1[i] === arr2[i] && arr1[i] === arr3[i] && arr1[i] === 1)
      ) {
        newArrTrue3.push(i);
        this.obj3 = {
          ...this.obj3,
          one: { ...this.obj3.one, [ime]: newArrTrue3 },
        };
      }
      if (
        (arr3[i] === 0 && arr1[i] === 1) ||
        (arr3[i] === 0 && arr2[i] === 1)
      ) {
        newArrFalse3.push(i);
        this.obj3 = {
          ...this.obj3,
          zero: { ...this.obj3.zero, [ime]: newArrFalse3 },
        };
      }
    }
    return [this.obj1, this.obj2, this.obj3];
  };

  render() {
    console.log('#######PRIMERJAVA', this.state, this.props);
    if (
      this.isEmpty(this.props.userData) ||
      this.props.userData.login === false
    )
      return <Redirect to="/" />;
    return (
      <div className="comparisonPage">
        <p
          className={
            this.state.compAds.length === 0
              ? 'comparisonPage__zero'
              : 'displayNone'
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
          {this.state.renderArrays.map((item) => {
            console.log('OPREMA', item);
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
                oprema={item.oprema}
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
