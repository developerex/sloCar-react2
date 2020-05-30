import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  userInfo,
  updateUser,
  spremembaGesla,
  deleteAccount,
  logoutUser,
} from '../actions/index';
import { connect } from 'react-redux';
import '../scss/Prijava.scss';

import '../scss/naslovna/base.scss';

class Racun extends React.Component {
  state = {
    user: {
      password: '',
      newPass: '',
      passCheck: '',
    },
    showPw: false,
    showNewPw: false,
    showPwCheck: false,
    green: false,
    msg: '',

    desc: '',
    spremenjeno: false,
    spremeniGeslo: false,

    izbrisRacunaMsg: '',
  };
  componentDidMount() {
    const id = this.props.userData.userLogin
      ? this.props.userData.userLogin.id
      : undefined;
    const token = this.props.userData.userLogin
      ? this.props.userData.userLogin.token
      : undefined;
    if (typeof id !== 'undefined' && typeof token !== 'undefined') {
      this.props.userInfo(id, token);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userData.userInfo !== this.props.userData.userInfo) {
      this.setState({
        desc: this.props.userData.userInfo.results.descryption,
      });
    }
    if (
      prevProps.userData.spremembaGesla !== this.props.userData.spremembaGesla
    ) {
      if (this.props.userData.spremembaGesla.success === 1) {
        this.setState(
          {
            msg: this.props.userData.spremembaGesla.message,
            green: true,
          },
          () => setTimeout(() => this.spremeniGeslo(false), 1000)
        );
      } else if (this.props.userData.spremembaGesla.success === 0) {
        this.setState({
          msg: this.props.userData.spremembaGesla.message,
          green: false,
        });
      }
    }
    if (
      prevProps.userData.deleteAccount !== this.props.userData.deleteAccount
    ) {
      this.setState(
        {
          izbrisRacunaMsg: this.props.userData.deleteAccount.message,
        },
        () =>
          setTimeout(() => {
            this.props.logoutUser();
          }, 1200)
      );
    }
  }

  isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  changeDesc = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.updateUser(
      this.props.userData.userLogin.id,
      this.props.userData.userLogin.token,
      this.state.desc
    );
    this.props.userInfo(
      this.props.userData.userLogin.id,
      this.props.userData.userLogin.token
    );
    this.setState({
      spremenjeno: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  change = (e) => {
    if (e === 'pw') {
      if (this.state.showPw) {
        document.getElementById('pw').type = 'text';
      } else {
        document.getElementById('pw').type = 'password';
      }
    } else if (e === 'newPass') {
      if (this.state.showNewPw) {
        document.getElementById('newPass').type = 'text';
      } else {
        document.getElementById('newPass').type = 'password';
      }
    } else if (e === 'passCheck') {
      if (this.state.showPwCheck) {
        document.getElementById('passCheck').type = 'text';
      } else {
        document.getElementById('passCheck').type = 'password';
      }
    }
  };

  handleShowHide = (e) => {
    if (e.target.parentNode.dataset.label === 'pw') {
      this.setState(
        {
          showPw: !this.state.showPw,
        },
        () => this.change('pw')
      );
    } else if (e.target.parentNode.dataset.label === 'newPass') {
      this.setState(
        {
          showNewPw: !this.state.showNewPw,
        },
        () => this.change('newPass')
      );
    } else {
      this.setState(
        {
          showPwCheck: !this.state.showPwCheck,
        },
        () => this.change('passCheck')
      );
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.spremembaGesla(
      { email: this.props.userData.userInfo.results.email, ...this.state.user },
      this.props.userData.userLogin.token
    );
  };

  spremeniGeslo = (e) => {
    this.setState({
      spremeniGeslo: e,
    });
    if (e === false) {
      this.setState({
        msg: '',
        user: {
          password: '',
          newPass: '',
          passCheck: '',
        },
        green: false,
      });
    }
  };

  izbrisRacuna = (e) => {
    e.preventDefault();
    this.props.deleteAccount(
      this.props.userData.userLogin.id,
      this.props.userData.userLogin.token
    );
  };

  render() {
    console.log('racun props', this.props);
    console.log('racun state', this.state);
    if (
      this.isEmpty(this.props.userData) ||
      this.props.userData.login === false
    )
      return <Redirect to="/" />;
    return (
      <div className="racun">
        <form
          onSubmit={this.submit}
          className={this.state.spremeniGeslo ? 'prijava__displayNone' : null}
        >
          <label htmlFor="desc">
            Description
            <input
              name="desc"
              value={this.state.desc}
              onChange={this.changeDesc}
            />
            <input type="submit" value="Spremeni" />
            {this.state.spremenjeno ? 'Uspesno spremenjeno' : null}
          </label>
        </form>
        <button
          className={this.state.spremeniGeslo ? 'prijava__displayNone' : null}
          onClick={() => this.spremeniGeslo(true)}
        >
          Spremeni Geslo
        </button>
        <button
          className={this.state.spremeniGeslo ? 'prijava__displayNone' : null}
          onClick={this.izbrisRacuna}
        >
          Izbrisi racun
        </button>
        <p className={this.state.spremeniGeslo ? 'prijava__displayNone' : null}>
          {this.state.izbrisRacunaMsg}
        </p>
        <div
          className={
            this.state.spremeniGeslo ? 'prijava' : 'prijava__displayNone'
          }
        >
          <div className="prijava__form">
            <form onSubmit={this.handleSubmit} style={{ paddingTop: '12rem' }}>
              <h2 id="pozabilGesloNaslov">Sprememba gesla</h2>
              <label htmlFor="password" data-label="pw">
                <p>Obstoječe geslo</p>
                <input
                  id="pw"
                  type="password"
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.user.password}
                />
                <span onClick={this.handleShowHide}>
                  {this.state.showPw ? 'skrij' : 'pokaži'}
                </span>
              </label>
              <label htmlFor="newPass" data-label="newPass">
                <p>Novo geslo</p>
                <input
                  id="newPass"
                  type="password"
                  onChange={this.handleChange}
                  name="newPass"
                  value={this.state.user.newPass}
                />
                <span onClick={this.handleShowHide}>
                  {this.state.showNewPw ? 'skrij' : 'pokaži'}
                </span>
              </label>
              <label htmlFor="passCheck">
                <p>Ponovi novo geslo</p>
                <input
                  id="passCheck"
                  type="password"
                  onChange={this.handleChange}
                  name="passCheck"
                  value={this.state.user.passCheck}
                />
                <span onClick={this.handleShowHide}>
                  {this.state.showPwCheck ? 'skrij' : 'pokaži'}
                </span>
              </label>
              <p
                className={
                  this.state.msg === ''
                    ? 'prijava__displayNone'
                    : 'prijava__form--msg'
                }
                style={{
                  backgroundColor: this.state.green ? '#32CD32' : '#DC143C',
                }}
              >
                {this.state.msg}
              </p>
              <input type="submit" value="Spremeni geslo" />
              <input
                type="button"
                className="prijava__preklici"
                onClick={() => this.spremeniGeslo(false)}
                value="Prekliči"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userData }) => {
  return {
    userData,
  };
};

export default connect(mapStateToProps, {
  userInfo,
  updateUser,
  spremembaGesla,
  deleteAccount,
  logoutUser,
})(Racun);
