// @flow
import React, { useState, useEffect } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { withControl } from './ControlContext';

const styles = theme => ({
  root: {

  },
});

class AutoPlay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    };
    this.interval = null;
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { speed } = nextProps;
    if (this.props.speed !== speed) {
      clearInterval(this.interval);
      this.interval = null;
      if (this.state.play) {
        this.interval = setInterval(() => {
          const div = this.props.division;
          this.props.setDivision(div + 1);
        }, speed * 10);
      }
    }
  }

  handlePlay() {
    const { setDivision, speed } = this.props;
    this.setState({ play: !this.state.play }, () => {
      if (this.state.play) {
        this.interval = setInterval(() => {
          const div = this.props.division;
          setDivision(div + 1);
        }, speed * 10);
      } else {
        clearInterval(this.interval);
        this.interval = null;
      }
    });
  }

  render() {
    const {
      children, division, setDivision, factor, setFactor,
    } = this.props;
    const { play } = this.state;
    return (
      <div>
        <Button
          color={play ? 'primary' : 'default'}
          variant="contained"
          onClick={this.handlePlay}
        >
        Autoplay
        </Button>
      </div>
    );
  }
}

export default withControl(AutoPlay);
