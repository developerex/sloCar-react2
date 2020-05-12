import React from 'react';
import styled from 'styled-components';

export default class FlipCard extends React.Component {
  render() {
    return (
      <Wrapper>
        {' '}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">{this.props.clickToFlip}</div>
            <div className="flip-card-back">{this.props.clickToFlipBack}</div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .flip-card {
    background-color: transparent;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: all 0.5s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateX(180deg);
  }

  .flip-card .flip-card-front img {
    opacity: 1;
    transition: opacity 0.8s;
  }

  .flip-card:hover .flip-card-front img {
    opacity: 0;
    transition: opacity 0.5s;
    visibility: hidden;
  }

  .flip-card:hover .flip-card-back {
    border: 2px solid #555555;
    background-color: white;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    color: black;
    opacity: 1;
    transition: opacity 0.3s;
  }

  .flip-card-back {
    color: white;
    transform: rotateX(180deg);
  }
`;

//transform: ${props => (props.show ? 'translateX(0)' : 'translateX(-100%)')};
