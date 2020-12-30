import React from 'react';
import { CssBaseline, Typography } from '@material-ui/core';
import Control from '../components/Control';
import Mandelbrot from '../components/Mandelbrot';
import { ControlProvider } from '../components/ControlContext';

function Container({ children }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <Container>
      <CssBaseline />
      <ControlProvider>
        <div style={{ textAlign: 'center', margin: '16px 4px' }}>
          <Typography variant="h3" component="h1">
            Ensemble de Mandelbrot
          </Typography>
          <a style={{ fontSize: '1.5rem' }} href="https://fr.wikipedia.org/wiki/Ensemble_de_Mandelbrot">Wiki</a>
        </div>
        <br />
        <Control />
        <Mandelbrot />
      </ControlProvider>
    </Container>
  );
}

export default App;
