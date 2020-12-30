import React from 'react';
import { withStyles } from '@material-ui/core';
import { withControl } from './ControlContext';
import { SliderDivision, SliderFactor, SliderSpeed } from './Slider';
import AutoPlay from './AutoPlay';

const styles = theme => ({
  root: {
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: '75%',
    },
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    padding: 4,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

function Control({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <SliderDivision name="division" />
        <SliderFactor name="factor" />
      </div>
      <div className={classes.section}>
        <AutoPlay />
        <SliderSpeed name="speed" />
      </div>
    </div>
  );
}

export default withControl(withStyles(styles)(Control));
