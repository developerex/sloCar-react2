import React, { Component } from 'react';

import '../../scss/createAd/base.scss';
import '../../scss/createAd/Pagination.scss';
import '../../scss/createAd/DisplayDivs.scss';
import '../../scss/createAd/ProgressBar.scss';

import Vin from './Vin';
import OsnovniPodatki from './OsnovniPodatki';
import OstaliPodatki from './OstaliPodatki';
import OstaliOstaliPodatki from './OstaliOstaliPodatki';
import Oprema from './Oprema';
import Oprema2 from './Oprema2';
import UploadImages from './UploadImages';
import ObjaviOglasDiv from './ObjaviOglasDiv';

export default class CreateAd extends Component {
  state = {
    count: 0
  };

  progressBar = type => {
    var elem = document.getElementById('myBar');
    if (type === 'next') {
      var start = this.state.count === 0 ? 12.5 : this.state.count * 12.5;
      var end = this.state.count === 0 ? 25 : (this.state.count + 1) * 12.5;
      var width = [start, end];
      var id = setInterval(frame, 10);
      function frame() {
        if (width[0] <= width[1]) {
          elem.style.width = width[0] + '%';
          elem.innerHTML = width[0] + '%';
          width[0] += 0.5;
          if (width[0] > width[1]) {
            clearInterval(id);
          }
        } else {
          clearInterval(id);
        }
      }
    } else if (type === 'prev') {
      var start = this.state.count === 0 ? 12.5 : (this.state.count + 1) * 12.5;
      var end = this.state.count === 0 ? 25 : (this.state.count + 2) * 12.5;
      var width = [start, end];
      var id = setInterval(frame, 10);
      function frame() {
        if (width[0] <= width[1]) {
          elem.style.width = width[1] + '%';
          elem.innerHTML = width[1] + '%';
          width[1] -= 0.5;
          if (width[0] > width[1]) {
            clearInterval(id);
          }
        } else {
          clearInterval(id);
        }
      }
    }
  };

  leftContent = () => {
    switch (this.state.count) {
      case 1:
        return <Vin />;
      case 2:
        return <OsnovniPodatki />;
      case 3:
        return <OstaliPodatki />;
      case 4:
        return <OstaliOstaliPodatki />;
      case 5:
        return <Oprema />;
      case 6:
        return <Oprema2 />;
      case 7:
        return <UploadImages />;
      default:
        return null;
    }
  };

  mainContent = () => {
    switch (this.state.count) {
      case 0:
        return <Vin />;
      case 1:
        return <OsnovniPodatki />;
      case 2:
        return <OstaliPodatki />;
      case 3:
        return <OstaliOstaliPodatki />;
      case 4:
        return <Oprema />;
      case 5:
        return <Oprema2 />;
      case 6:
        return <UploadImages />;
      case 7:
        return <ObjaviOglasDiv />;
      default:
        return null;
    }
  };

  rightContent = () => {
    switch (this.state.count) {
      case 0:
        return <OsnovniPodatki />;
      case 1:
        return <OstaliPodatki />;
      case 2:
        return <OstaliOstaliPodatki />;
      case 3:
        return <Oprema />;
      case 4:
        return <Oprema2 />;
      case 5:
        return <UploadImages />;
      case 6:
        return <ObjaviOglasDiv />;
      default:
        return null;
    }
  };

  render() {
    //console.log(this.state);

    return (
      <div className="createAdBase">
        <div className="progressBar">
          <div className="progressBar__bg w3-light-grey">
            <div
              id="myBar"
              className="progressBar__bar w3-container w3-green"
              style={{ width: '12.5%' }}
            >
              12.5%
            </div>
          </div>
        </div>

        <div className={`createAdDivs`} id="changingStyle">
          <div
            className={`createAdDivs__sideContent`}
            onClick={() =>
              this.setState({ count: this.state.count - 1 }, () =>
                this.progressBar('prev')
              )
            }
          >
            {this.leftContent()}
          </div>

          <div className={`createAdDivs__mainContent`}>
            {this.mainContent()}
          </div>

          <div
            className={`createAdDivs__sideContent`}
            onClick={() =>
              this.setState({ count: this.state.count + 1 }, () =>
                this.progressBar('next')
              )
            }
          >
            {this.rightContent()}
          </div>
        </div>

        <div className="createAdSteps">
          <div className="createAdSteps__prev">
            {this.state.count > 0 && (
              <button
                name="prev"
                onClick={() =>
                  this.setState({ count: this.state.count - 1 }, () =>
                    this.progressBar('prev')
                  )
                }
                className={
                  this.state.count > 0 ? 'createAdSteps__btn' : 'invisible'
                }
              >
                Nazaj
              </button>
            )}
          </div>
          <div className="createAdSteps__next">
            <button
              name="next"
              onClick={() =>
                this.setState(
                  {
                    count: this.state.count + 1
                  },
                  () => this.progressBar('next')
                )
              }
              className={
                this.state.count >= 0 && this.state.count < 7
                  ? 'createAdSteps__btn'
                  : 'invisible'
              }
            >
              Naprej
            </button>
          </div>
        </div>
      </div>
    );
  }
}
