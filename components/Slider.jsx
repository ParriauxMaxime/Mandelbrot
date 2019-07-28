// @flow
import React, { Fragment } from 'react';
import { makeStyles, Slider as SliderMui, Typography } from '@material-ui/core';
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
});

const MIN = 2;
const MAX = 2000;

const Slider = props => (
  <div style={styles.container}>
    <Typography>
      {`${props.name}: ${props.value}`}
    </Typography>
    <SliderMui style={styles.root} {...props} />
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
