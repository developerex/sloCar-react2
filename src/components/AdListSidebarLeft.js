import React from 'react';
import '../scss/list/AdListSidebarLeft.scss';
import { AdConsumer } from '../context/context';
import { Link } from 'react-router-dom';

export default class AdListSidebarLeft extends React.Component {
  state = {
    filter: true
  };

  handlefilter = () => {
    this.setState({
      filter: !this.state.filter
    });
  };

  render() {
    return (
      <AdConsumer>
        {value => {
          const {
            handleChange,
            vseZnamke,
            vsiModeli,
            vsiKm,
            vsePorabe,
            vsiMotorjiOd,
            vsiMotorjiDo,
            vseProstornineOd,
            vseProstornineDo,
            vseOblike,
            vseCeneOd,
            vseCeneDo,
            vsiLetnikiOd,
            vsiLetnikiDo,
            cenaOd,
            cenaDo,
            znamka,
            model,
            km,
            poraba,
            oblika,
            letnikOd,
            letnikDo,
            prostorninaOd,
            prostorninaDo,
            motorOd,
            motorDo,
            filteredAds,
            modelToModel,
            setToDefault
          } = value;

          return (
            <div className="adList-sidebarLeft">
              <button
                className="adList-sidebarLeft__filter"
                onClick={this.handlefilter}
              >
                {this.state.filter === true ? 'Skrij filtre' : 'Prikazi filtre'}
              </button>
              <div
                className={
                  this.state.filter
                    ? 'adList-sidebarLeft__content adList-sidebarLeft__content--filter--true'
                    : 'adList-sidebarLeft__content adList-sidebarLeft__content--filter--false'
                }
              >
                {/* oblika */}
                <div>
                  <select
                    name="oblika"
                    id="oblika"
                    onChange={handleChange}
                    value={oblika}
                  >
                    {vseOblike.map(item => {
                      return (
                        <option key={item.id} value={item.oblika}>
                          {item.oblika}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end oblika */}
                {/* cena */}
                <div>
                  <select
                    name="cenaOd"
                    id="cenaOd"
                    onChange={handleChange}
                    value={cenaOd}
                  >
                    {vseCeneOd.map(item => {
                      return (
                        <option key={item.id} value={item.cenaOd}>
                          {item.id > 0
                            ? parseInt(item.cenaOd)
                                .toLocaleString()
                                .replace(',', '.') + ' €'
                            : 'cena od'}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name="cenaDo"
                    id="cenaDo"
                    onChange={handleChange}
                    value={cenaDo}
                  >
                    {vseCeneDo.map(item => {
                      return (
                        <option key={item.id} value={item.cenaDo}>
                          {item.id > 0
                            ? parseInt(item.cenaDo)
                                .toLocaleString()
                                .replace(',', '.') + ' €'
                            : 'cena do'}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end cena */}
                {/* prostornina */}
                <div>
                  <select
                    name="prostorninaOd"
                    id="prostorninaOd"
                    onChange={handleChange}
                    value={prostorninaOd}
                  >
                    {vseProstornineOd.map(item => {
                      return (
                        <option key={item.id} value={item.prostorninaOd}>
                          {item.id > 0
                            ? item.prostorninaOd + ' ccm'
                            : 'prostornina od'}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name="prostorninaDo"
                    id="prostorninaDo"
                    onChange={handleChange}
                    value={prostorninaDo}
                  >
                    {vseProstornineDo.map(item => {
                      return (
                        <option key={item.id} value={item.prostorninaDo}>
                          {item.id > 0
                            ? item.prostorninaDo + ' ccm'
                            : 'prostornina do'}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end prostornina */}
                {/* motor */}
                <div>
                  <select
                    name="motorOd"
                    id="motorOd"
                    onChange={handleChange}
                    value={motorOd}
                  >
                    {vsiMotorjiOd.map(item => {
                      return (
                        <option key={item.id} value={item.motorOd}>
                          {item.id > 0
                            ? item.motorOd + ' KM'
                            : 'moc motorja od'}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name="motorDo"
                    id="motorDo"
                    onChange={handleChange}
                    value={motorDo}
                  >
                    {vsiMotorjiDo.map(item => {
                      return (
                        <option key={item.id} value={item.motorDo}>
                          {item.id > 0
                            ? item.motorDo + ' KM'
                            : 'moc motorja do'}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end motor */}
                {/* letnik */}
                <div>
                  <select
                    name="letnikOd"
                    id="letnikOd"
                    onChange={handleChange}
                    value={letnikOd}
                  >
                    {vsiLetnikiOd.map(item => {
                      return (
                        <option key={item.id} value={item.letnikOd}>
                          {item.id > 0 ? item.letnikOd : 'letnik od'}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name="letnikDo"
                    id="letnikDo"
                    onChange={handleChange}
                    value={letnikDo}
                  >
                    {vsiLetnikiDo.map(item => {
                      return (
                        <option key={item.id} value={item.letnikDo}>
                          {item.id > 0 ? item.letnikDo : 'letnik do'}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end letnik */}
                {/* km */}
                <div>
                  <select name="km" id="km" onChange={handleChange} value={km}>
                    {vsiKm.map(item => {
                      return (
                        <option key={item.id} value={item.km}>
                          {item.km > 0
                            ? parseInt(item.km)
                                .toLocaleString()
                                .replace(',', '.') + ' km'
                            : 'prevozeni km do'}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end km */}
                {/* poraba */}
                <div>
                  <select
                    name="poraba"
                    id="poraba"
                    onChange={handleChange}
                    value={poraba}
                  >
                    {vsePorabe.map(item => {
                      return (
                        <option key={item.id} value={item.poraba}>
                          {item.poraba > 0
                            ? item.poraba + ' L/100km'
                            : 'poraba do'}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end poraba */}
                <div>
                  <p>
                    {' '}
                    {filteredAds.length === 1
                      ? filteredAds.length + ' PONUDBA'
                      : filteredAds.length === 2
                      ? filteredAds.length + ' PONUDBI'
                      : filteredAds.length === 3
                      ? filteredAds.length + ' PONUDBE'
                      : filteredAds.length + ' PONUDB'}
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </AdConsumer>
    );
  }
}
