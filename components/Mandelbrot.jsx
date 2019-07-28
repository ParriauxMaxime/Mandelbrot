import React, { useState, useEffect } from 'react';
import { withWidth } from '@material-ui/core';
import { withControl } from './ControlContext';


function Container({ children, RAYON }) {
  return (
    <div style={{
      width: RAYON * 2 + 8,
      height: RAYON * 2 + 8,
    }}
    >
      {children}
    </div>
  );
}

const getPosition = (rayon, division) => {
  const angle = 360 / division;
  const angleToRadian = angle2 => ((angle2 * Math.PI * 2) / 360);
  const positionWheel = [];
  for (let i = 0; i < division; i++) {
    const radianx = parseFloat(Math.cos(angleToRadian(i * angle) % (2 * Math.PI)).toFixed(3));
    const radiany = parseFloat(Math.sin(angleToRadian(i * angle) % (2 * Math.PI)).toFixed(3));
    positionWheel.push({
      radianx, radiany, x: (radianx * rayon) + rayon, y: (radiany * rayon) + rayon,
    });
  }
  // console.info(JSON.stringify(positionWheel, null, 2));
  // console.info({
  //   center,
  //   angle,
  //   positionWheel,
  //   perimeter,
  // });
  return positionWheel;
};

const getLines = (positions, factor) => {
  const tab = positions.map((e, i, arr) => ({
    x1: arr[(i) % arr.length].x,
    y1: arr[(i) % arr.length].y,
    x2: arr[(i * factor) % arr.length].x,
    y2: arr[(i * factor) % arr.length].y,
  }));
  return tab;
};

const OFFSET = 1;

class Mandelbrot extends React.PureComponent {
  render() {
    const makeSufficientRandom = i => Math.round(Math.random() * 1000000) * i - (((-1 * Math.round(Math.random())) * Math.PI) * (i / 2));
    const {
      division, factor, showPoint, width,
    } = this.props;
    console.info(width);
    let RAYON = 100;
    if (width === 'xs') { RAYON = 150; }
    if (width === 'sm') { RAYON = 200; }
    if (width === 'md') { RAYON = 250; }
    if (width === 'lg') { RAYON = 300; }
    if (width === 'xl') { RAYON = 400; }
    const positions = getPosition(RAYON, division);
    const lines = getLines(positions, factor);

    return (
      <Container RAYON={RAYON}>
        <svg style={{
          height: '100%',
          width: '100%',
        }}
        >
          <circle cx={RAYON} cy={RAYON} r={RAYON} stroke="black" strokeWidth="1" fill="white" />
          { showPoint
          && positions.map((e, i) => (
            <line key={`Je m'en basl${makeSufficientRandom(i)}`} x1={e.x - OFFSET} strokeWidth="3" y1={e.y - OFFSET} x2={e.x + OFFSET} y2={e.y + OFFSET} stroke="black" />
          ))
        }
          {/* {
          positions.map((e, i) => (
            <text key={`Je m'en bastextl${i}`} x={e.x} y={e.y}>{i + 1}</text>
          ))
        } */}
          {
          lines.map((e, i) => (
            <line key={`Je m'en bas la race${makeSufficientRandom(i)}`} x1={e.x1} strokeWidth="1" y1={e.y1} x2={e.x2} y2={e.y2} stroke="black" />
          ))
        }
        </svg>
      </Container>
    );
  }
}

export default withControl(withWidth()(Mandelbrot));
