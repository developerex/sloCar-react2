import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { potrditevEmaila, validateToken } from '../actions';

import '../scss/Prijava.scss';

class PotrditevEmaila extends Component {
  state = {
    redirect: false,
    msg: '',
    green: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      redirect: true,
      msg: '',
    });
  };

  componentDidMount() {
    this.props.validateToken(this.props.match.params.TOKEN);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.emailInfo.validateToken !== this.props.emailInfo.validateToken
    ) {
      if (this.props.emailInfo.validateToken.success === 1) {
        this.props.potrditevEmaila(this.props.match.params.TOKEN);
      } else {
        this.setState({
          redirect: true,
        });
      }
    }
    if (prevProps.emailInfo.emailData !== this.props.emailInfo.emailData) {
      if (this.props.emailInfo.emailData.success === 1) {
        this.setState({
          msg: this.props.emailInfo.emailData.message,
          green: true,
        });
      } else if (this.props.emailInfo.emailData.success === 0) {
        this.setState({
          msg: this.props.emailInfo.emailData.message,
          green: false,
        });
      }
    }
  }

  render() {
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
                <h2 id="pozabilGesloNaslov">Potrditev računa</h2>
                <p
                  className="racunPotrjen"
                  style={{
                    backgroundColor: this.state.green ? '#32CD32' : '#DC143C',
                  }}
                >
                  {this.state.msg}
                </p>
                <input type="submit" value="Prijavi se tukaj" />
              </form>
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = ({ emailInfo }, ownProps) => {
  return {
    emailInfo,
  };
};

export default connect(mapStateToProps, { potrditevEmaila, validateToken })(
  PotrditevEmaila
);
