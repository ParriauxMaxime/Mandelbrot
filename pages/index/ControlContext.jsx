/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react';

export const ControlContext = createContext({
  division: 8,
  factor: 2,
  speed: 50,
  setDivision: () => null,
  setFactor: () => null,
  setSpeed: () => null,
});

export class ControlProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      division: 8,
      factor: 2,
      speed: 50,
      setDivision: (division) => { this.setState({ division }); },
      setFactor: factor => this.setState({ factor }),
      setSpeed: speed => this.setState({ speed }),
    };
  }

  render() {
    return (
      <ControlContext.Provider value={this.state}>
        {this.props.children}
      </ControlContext.Provider>
    );
  }
}

export const ControlConsumer = Component => props => (
  <ControlContext.Consumer>
    {value => <Component {...props} {...value} />}
  </ControlContext.Consumer>
);

export const withControl = ControlConsumer;
