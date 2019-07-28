import React, { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { ControlConsumer, withControl } from './ControlContext';
import { SliderDivision, SliderFactor, SliderSpeed } from './Slider';
import AutoPlay from './AutoPlay';

const styles = ({
  root: {
    width: '75%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'baseline',
  },
});

function Control({
  division, factor, setDivision, setFactor,
}) {
  const [div, setDiv] = useState(division);
  const [fac, setFac] = useState(factor);
  return (
    <div style={styles.root}>
      <div style={styles.section}>
        <SliderDivision name="division" />
        <SliderFactor name="factor" />
      </div>
      <div style={styles.section}>
        <AutoPlay />
        <SliderSpeed name="speed" />
      </div>
    </div>
  );
}

export default withControl(Control);
