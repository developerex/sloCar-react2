import React, { Component } from 'react';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';
import { registerUser, loginUser, pozabilGesloUser } from '../actions/index';
import { connect } from 'react-redux';
import '../scss/Prijava.scss';

class Prijava extends Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
      passConfirm: '',
    },
    reg: false,
    showPw: false,
    showPwConf: false,
    msgLogin: '',
    msgReg: '',
    msg: '',
    pozabilGeslo: false,
    green: false,
  };

  componentDidMount() {
    //if user is already logged in !?!?!?!
    //this.props.loginUser();
  }

  componentDidUpdate(prevProps) {
    if (this.props.userData !== prevProps.userData) {
      let arr = {};
      if (this.props.userData && this.props.userData.userLogin) {
        if (this.props.userData.userLogin.success === 1) {
          this.setState({
            msgLogin: this.props.userData.userLogin.message,
            green: true,
          });
        } else {
          this.setState({
            msgLogin: this.props.userData.userLogin.message,
            green: false,
          });
        }
      }
      if (this.props.userData && this.props.userData.userReg) {
        if (this.props.userData.userReg.success === 1) {
          this.setState({
            msgReg: this.props.userData.userReg.message,
            green: true,
          });
        } else {
          this.setState({
            msgReg: this.props.userData.userReg.message,
            green: false,
          });
        }
      }
    }

    if (prevProps.userData.pozabilGeslo !== this.props.userData.pozabilGeslo) {
      if (this.props.userData.pozabilGeslo.success === 1) {
        this.setState({
          msg: this.props.userData.pozabilGeslo.message,
          green: true,
        });
      } else if (this.props.userData.pozabilGeslo.success === 0) {
        this.setState({
          msg: this.props.userData.pozabilGeslo.message,
          green: false,
        });
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let list = e.target.getElementsByTagName('input');
    var arr = [...list];
    for (var item in arr) {
      if (arr[item].dataset.info === 'reg') {
        this.props.registerUser(this.state.user);
      } else if (arr[item].dataset.info === 'login') {
        this.props.loginUser({
          email: this.state.user.email,
          password: this.state.user.password,
        });
      } else if (arr[item].dataset.info === 'pozabilGeslo') {
        this.props.pozabilGesloUser({
          email: this.state.user.email,
        });
      }
    }
  };

  handleLoginReg = () => {
    this.setState({
      reg: !this.state.reg,
      msg: '',
      msgLogin: '',
      msgReg: '',
      pozabilGeslo: false,
      green: false,
    });
  };

  change = (e) => {
    if (e === 'pw') {
      if (this.state.showPw) {
        document.getElementById('pw').type = 'text';
      } else {
        document.getElementById('pw').type = 'password';
      }
    } else if (e === 'pwConf') {
      if (this.state.showPwConf) {
        document.getElementById('pwConf').type = 'text';
      } else {
        document.getElementById('pwConf').type = 'password';
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
    } else {
      this.setState(
        {
          showPwConf: !this.state.showPwConf,
        },
        () => this.change('pwConf')
      );
    }
  };

  handlePozabilGeslo = () => {
    this.setState({
      pozabilGeslo: true,
      msg: '',
      msgLogin: '',
      msgReg: '',
    });
  };

  render() {
    console.log('props prijava', this.props);

    if (this.props.userData && this.props.userData.login)
      return <Redirect to="/racun" />;
    return (
      <div className="prijava">
        <div className="prijava__form">
          <form onSubmit={this.handleSubmit}>
            <h2 id={this.state.pozabilGeslo ? 'pozabilGesloNaslov' : null}>
              {this.state.reg && this.state.pozabilGeslo === false
                ? 'Registracija'
                : this.state.reg === false && this.state.pozabilGeslo === false
                ? 'Prijava'
                : 'Ponastavi geslo'}
            </h2>
            <label
              htmlFor="username"
              className={this.state.reg ? null : 'prijava__displayNone'}
            >
              <p>Username</p>
              <input type="text" onChange={this.handleChange} name="username" />
            </label>
            <label htmlFor="email">
              <p>E-mail naslov</p>
              <input type="email" onChange={this.handleChange} name="email" />
            </label>
            <label
              htmlFor="password"
              data-label="pw"
              className={
                this.state.pozabilGeslo ? 'prijava__displayNone' : null
              }
            >
              <p>Geslo</p>
              <input
                id="pw"
                type="password"
                onChange={this.handleChange}
                name="password"
              />
              <span onClick={this.handleShowHide}>
                {this.state.showPw ? 'skrij' : 'pokaži'}
              </span>
            </label>
            <label
              htmlFor="passConfirm"
              className={this.state.reg ? null : 'prijava__displayNone'}
            >
              <p>Ponovi geslo</p>
              <input
                id="pwConf"
                type="password"
                onChange={this.handleChange}
                name="passConfirm"
              />
              <span onClick={this.handleShowHide}>
                {this.state.showPwConf ? 'skrij' : 'pokaži'}
              </span>
            </label>
            <p
              className={
                this.state.msg === '' &&
                this.state.msgLogin === '' &&
                this.state.msgReg === ''
                  ? 'prijava__displayNone'
                  : 'prijava__form--msg'
              }
              style={{
                backgroundColor: this.state.green ? '#32CD32' : '#DC143C',
              }}
            >
              {this.state.pozabilGeslo
                ? this.state.msg
                : this.state.reg === false
                ? this.state.msgLogin
                : this.state.reg
                ? this.state.msgReg
                : null}
            </p>
            <input
              data-info={
                this.state.reg && this.state.pozabilGeslo === false
                  ? 'reg'
                  : this.state.reg === false &&
                    this.state.pozabilGeslo === false
                  ? 'login'
                  : 'pozabilGeslo'
              }
              type="submit"
              value={
                this.state.reg && this.state.pozabilGeslo === false
                  ? 'Registriraj se'
                  : this.state.reg === false &&
                    this.state.pozabilGeslo === false
                  ? 'Prijavi se'
                  : 'Ponastavi geslo'
              }
            />
            <p onClick={this.handlePozabilGeslo} id="pozabilGeslo">
              {this.state.reg === false &&
                this.state.pozabilGeslo === false &&
                'Pozabil sem geslo'}
            </p>
            <p onClick={this.handleLoginReg} id="imaRacun">
              {this.state.reg
                ? 'Že imaš račun? Prijavi se tukaj'
                : 'Še nimaš računa? Registriraj se zdaj'}
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userData }, ownProps) => {
  return {
    userData,
  };
};

export default connect(mapStateToProps, {
  registerUser,
  loginUser,
  pozabilGesloUser,
})(Prijava);
