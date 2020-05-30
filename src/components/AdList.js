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
import '../scss/displayNone.scss';
import { Link } from 'react-router-dom';
import AdListSidebarLeft from './AdListSidebarLeft';
import AdListSidebarRight from './AdListSidebarRight';
import Pagination from './Pagination';
import SingleAdInList from './SingleAdInList';

class AdList extends React.Component {
  state = {
    fav: [],
    comp: [],
    compTab: false,
    scroll: false,
  };

  constructor(props) {
    super(props);
    window.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = (e) => {
    if (document.documentElement.scrollTop > 0) {
      this.setState({
        scroll: true,
      });
    } else {
      this.setState({
        scroll: false,
      });
    }
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

  componentDidUpdate(prevProps, prevState) {
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
    if (prevState.comp.length !== this.state.comp.length) {
      if (this.state.comp.length > 0) {
        this.setState({
          compTab: true,
        });
      }
    }
  }

  closeTab = () => {
    this.setState({
      compTab: false,
    });
  };

  renderPrimerjajTab = () => {
    if (this.state.comp.length > 0 && this.state.compTab) {
      return (
        <div className="adList-container__comparisonTab">
          <img
            className={'adList-container__comparisonTab--close'}
            src="/close.png"
            alt="zapri"
            onClick={this.closeTab}
          />
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
                <div
                  className={
                    this.state.scroll
                      ? 'sideBarLeftAndRight sideBarLeftAndRight--true'
                      : 'sideBarLeftAndRight sideBarLeftAndRight--false'
                  }
                >
                  <AdListSidebarLeft scroll={this.state.scroll} />
                  <AdListSidebarRight scroll={this.state.scroll} />
                </div>
                {test.map((item) => {
                  //console.log('SINGLE ITEM', item);
                  return (
                    <SingleAdInList
                      primerjaj={this.state.comp}
                      priljubljeno={this.state.fav}
                      ime={item.naslov}
                      datum={item.Created_At}
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
