import React from 'react';
import { AdConsumer } from '../context/context';
import { Link } from 'react-router-dom';
import '../scss/naslovna/Search.scss';
import FlipCard from '../utils/FlipCard';

export default function Search() {
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
          <div className="bg">
            {/* <p className="prodaja">
              hiter in enostaven nacin za nakup in prodajo avtomobila
            </p> */}
            <div className="search-box">
              {/* znamka */}
              <div className="znamka">
                <select
                  name="znamka"
                  id="znamka"
                  onChange={handleChange}
                  value={znamka}
                  onClick={modelToModel}
                >
                  {vseZnamke.map(item => {
                    return (
                      <option key={item.id} value={item.znamka}>
                        {item.znamka}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* end znamka */}
              {/* model */}
              <div className="model">
                <select
                  name="model"
                  id="model"
                  onChange={handleChange}
                  value={model}
                >
                  {vsiModeli.find(item => item.znamka === znamka) ? (
                    vsiModeli
                      .find(item => item.znamka === znamka)
                      .modeli.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })
                  ) : (
                    <option value="model" disabled>
                      Model
                    </option>
                  )}
                </select>
              </div>
              {/* end model */}
              {/* oblika */}
              {/* <div>
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
              </div> */}
              {/* end oblika */}
              {/* cena */}
              <div>
                <FlipCard
                  clickToFlip={
                    <img
                      src="/euro.png"
                      alt="Cena od/do"
                      style={{ height: '3.7rem' }}
                    ></img>
                  }
                  clickToFlipBack={
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        padding: '1.3rem'
                      }}
                    >
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
                  }
                />
              </div>
              {/* end cena */}
              {/* prostornina */}
              <div>
                <FlipCard
                  clickToFlip={
                    <img
                      src="/prostornina.png"
                      alt="Prostornina motorja"
                      style={{ height: '4.5rem' }}
                    ></img>
                  }
                  clickToFlipBack={
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        padding: '1.3rem'
                      }}
                    >
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
                  }
                />
              </div>
              {/* end prostornina */}
              {/* motor */}
              <div>
                <FlipCard
                  clickToFlip={
                    <img
                      src="/motor.png"
                      alt="Moč motorja"
                      style={{ height: '4.5rem' }}
                    ></img>
                  }
                  clickToFlipBack={
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        padding: '1.3rem'
                      }}
                    >
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
                  }
                />
              </div>
              {/* end motor */}
              {/* letnik */}
              <div>
                <FlipCard
                  clickToFlip={
                    <img
                      src="/letnik.png"
                      alt="Letnik od/do"
                      style={{ height: '4.5rem' }}
                    ></img>
                  }
                  clickToFlipBack={
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        padding: '1.3rem'
                      }}
                    >
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
                  }
                />
              </div>
              {/* end letnik */}
              {/* km */}
              <div>
                <FlipCard
                  clickToFlip={
                    <img
                      src="/prevozeni.png"
                      alt="Prevozeni kilometri do"
                      style={{ height: '4.5rem' }}
                    ></img>
                  }
                  clickToFlipBack={
                    <select
                      name="km"
                      id="km"
                      onChange={handleChange}
                      value={km}
                    >
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
                  }
                />
              </div>
              {/* end km */}
              {/* poraba --> oblika */}
              <div>
                <FlipCard
                  clickToFlip={
                    <img
                      src="/oblika.png"
                      alt="Oblika vozila"
                      style={{ height: '4.5rem' }}
                    ></img>
                  }
                  clickToFlipBack={
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
                  }
                />
              </div>
              {/* <div>
                <FlipCard
                  clickToFlip={
                    <img
                      src="/poraba.png"
                      alt="Poraba do"
                      style={{ height: '4.5rem' }}
                    ></img>
                  }
                  clickToFlipBack={
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
                  }
                />
              </div> */}
              {/* end poraba */}
              <div className="search">
                <Link to="/ads" onClick={setToDefault}>
                  {filteredAds.length === 1
                    ? filteredAds.length + ' PONUDBA'
                    : filteredAds.length === 2
                    ? filteredAds.length + ' PONUDBI'
                    : filteredAds.length === 3
                    ? filteredAds.length + ' PONUDBE'
                    : filteredAds.length + ' PONUDB'}
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    </AdConsumer>
  );
}
