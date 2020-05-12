import React, { Component } from 'react';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';
import { ponastavitevGesla, passwordResetTokenCheck } from '../actions/index';
import { connect } from 'react-redux';

import '../scss/Prijava.scss';

class PonastavitevGesla extends Component {
  state = {
    user: {
      password: '',
      passConfirm: '',
    },
    showPw: false,
    showPwConf: false,
    green: false,
    msg: '',
    redirect: false,
  };

  componentDidMount() {
    this.props.passwordResetTokenCheck(this.props.match.params.token);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.ponastavitevGeslaInfo.passResetTokenCheck !==
      this.props.ponastavitevGeslaInfo.passResetTokenCheck
    ) {
      if (this.props.ponastavitevGeslaInfo.passResetTokenCheck.success === 0) {
        this.setState({
          redirect: true,
        });
      } else {
        this.setState({
          redirect: false,
        });
      }
    }
    if (
      prevProps.ponastavitevGeslaInfo.ponastGesla !==
      this.props.ponastavitevGeslaInfo.ponastGesla
    ) {
      if (this.props.ponastavitevGeslaInfo.ponastGesla.success === 1) {
        this.setState(
          {
            msg: this.props.ponastavitevGeslaInfo.ponastGesla.message,
            green: true,
          },
          () => setTimeout(() => this.setState({ redirect: true }), 1500)
        );
      } else {
        this.setState({
          msg: this.props.ponastavitevGeslaInfo.ponastGesla.message,
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
    this.props.ponastavitevGesla(this.props.match.params.token, {
      password: this.state.user.password,
      passCheck: this.state.user.passConfirm,
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

  render() {
    console.log('props ponast gesla', this.props);

    if (this.state.redirect) {
      return <Redirect to="/prijava" />;
    } else {
      return (
        <>
          <div className="prijava">
            <div className="prijava__form">
              <form
                onSubmit={this.handleSubmit}
                style={{ paddingTop: '12rem' }}
              >
                <h2 id="pozabilGesloNaslov">Ponastavitev gesla</h2>
                <label htmlFor="password" data-label="pw">
                  <p>Novo geslo</p>
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
                <label htmlFor="passConfirm">
                  <p>Ponovi novo geslo</p>
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
                <input type="submit" value="Ponastavi geslo" />
              </form>
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = ({ ponastavitevGeslaInfo }, ownProps) => {
  return {
    ponastavitevGeslaInfo,
  };
};

export default connect(mapStateToProps, {
  ponastavitevGesla,
  passwordResetTokenCheck,
})(PonastavitevGesla);
