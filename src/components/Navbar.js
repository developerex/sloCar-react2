import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/naslovna/Navbar.scss';
import { logoutUser } from '../actions/index';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const [scrolling, setScrolling] = useState(false);

  window.onscroll = () => {
    scrollFun();
  };
  const scrollFun = () => {
    if (document.documentElement.scrollTop > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  //this.renderPrijavaProfil();

  /* useEffect(() => {
    if (props.logout.success === 3) {
      setLogin(false);
      localStorage.removeItem('login');
    }
    const locStorageLogin = localStorage.getItem('login');
    if (locStorageLogin) {
      setLogin(JSON.parse(locStorageLogin));
    }
  }); */

  const renderLogout = () => {
    props.logoutUser();
  };

  //console.log('state nav', this.state);
  //console.log('props nav', props);
  //console.log('props nav scrolling', scrolling);
  return (
    <div className={scrolling ? 'navbar navbar--true' : 'navbar navbar--false'}>
      <ul className="navbar-list">
        <li className="logo">
          <Link to="/">
            <img src="/img/logo.jpg" alt="logo" />
          </Link>
        </li>
        <li className="underline">
          <Link to="/">Kontakt</Link>
        </li>
        <li className="underline">
          <Link to="/">O nas</Link>
        </li>
        <li className="underline">
          <Link to="/">Novice</Link>
        </li>
        {props.userData && props.userData.login ? (
          <>
            <li className="underline">
              <Link to="/primerjava">Primerjava</Link>
            </li>
            <li className="underline">
              <Link to="/priljubljeno">Priljubljeno</Link>
            </li>
            <li className="underline" id="navbar-list--mojprofil">
              <Link to="/racun">Moj profil</Link>
              <p id="showponhover" onClick={renderLogout}>
                Odjavi se
              </p>
            </li>
          </>
        ) : (
          <li className="underline">
            <Link to="/prijava">Prijavi se</Link>
          </li>
        )}
        <li>
          <Link to="/createad" className="objaviOglas">
            Ustvari oglas
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ userData }) => {
  return {
    userData,
  };
};

export default connect(mapStateToProps, { logoutUser })(Navbar);

/* class Navbar extends React.Component {
  state = {
    scrolling: false,
    login: false,
  };

  componentDidMount() {
    window.onscroll = () => {
      scrollFun();
    };
    const scrollFun = () => {
      if (document.documentElement.scrollTop > 0) {
        this.setState({
          scrolling: true,
        });
      } else {
        this.setState({
          scrolling: false,
        });
      }
    };
    //this.renderPrijavaProfil();
  }



  componentDidUpdate(prevProps) {
    if (prevProps.logout !== this.props.logout) {
      if (this.props.logout.success === 3) {
        this.setState({
          login: false,
        });
      }
    }
    const locStorageLogin = localStorage.getItem('login');
    if (locStorageLogin) {
      this.setState({
        login: JSON.parse(locStorageLogin),
      });
    }
  }

  renderLogout = () => {
    this.props.logoutUser();
  };

  renderPrijavaProfil = () => {
    //let val = typeof this.props.login === 'undefined' ? 'undefined' : this.props.login;
    //Object.keys(val).length === 0 || val === undefined)
    if (this.state.login) {
      return (
        <li className="underline" id="navbar-list--mojprofil">
          <Link to={`/racun`}>Moj profil</Link>
          <p id="showponhover" onClick={this.renderLogout}>
            Odjavi se
          </p>
        </li>
      );
    } else {
      return (
        <li className="underline">
          <Link to="/prijava">Prijavi se</Link>
        </li>
      );
    }
  };

  render() {
    console.log('state nav', this.state);
    console.log('props nav', this.props);
    return (
      <div
        className={
          this.state.scrolling ? 'navbar navbar--true' : 'navbar navbar--false'
        }
      >
        <ul className="navbar-list">
          <li className="logo">
            <Link to="/">
              <img src="/img/logo.jpg" alt="logo" />
            </Link>
          </li>
          <li className="underline">
            <Link to="/">Kontakt</Link>
          </li>
          <li className="underline">
            <Link to="/">O nas</Link>
          </li>
          <li className="underline">
            <Link to="/">Novice</Link>
          </li>
          <li className="underline">
            <Link to="/">Priljubljeno</Link>
          </li>
          {this.renderPrijavaProfil()}
          <li>
            <Link to="/createad" className="objaviOglas">
              Ustvari oglas
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ userData }) => {
  return {
    logout: userData,
  };
};

export default connect(mapStateToProps, { logoutUser })(Navbar); */
