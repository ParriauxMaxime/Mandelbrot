// @flow
import React from 'react';
import { Slider as SliderMui, Typography } from '@material-ui/core';
import { withControl } from './ControlContext';

const styles = ({
  root: {
    width: '90%',
    border: '8px solid transparent',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  text: {
    position: 'relative',
    top: '0.5rem',
  },
});

const MIN = 2;
const MAX = 2000;

const Slider = ({ name, value, ...props }) => (
  <div style={styles.container}>
    <Typography style={styles.text}>
      {`${name}: ${value}`}
    </Typography>
    <SliderMui
      {...{
        ...props,
        value,
        name,
        style: styles.root,
      }}
    />
  </div>
);

export const SliderDivision = withControl(({
  children, division, setDivision, setFactor, speed, setSpeed, factor, ...props
}) => (
  <Slider min={MIN} max={MAX} {...props} value={division} onChange={(a, b) => setDivision(b)} />
));

export const SliderFactor = withControl(({
  children, factor, setFactor, setDivision, speed, setSpeed, division, ...props
}) => (
  <Slider min={2} max={256} step={1} {...props} value={factor} onChange={(a, b) => setFactor(b)} />
));

export const SliderSpeed = withControl(({
  children, factor, setFactor, setDivision, speed, setSpeed, division, ...props
}) => (
  <Slider min={1} max={100} step={1} {...props} value={speed} onChange={(a, b) => setSpeed(b)} />
));
