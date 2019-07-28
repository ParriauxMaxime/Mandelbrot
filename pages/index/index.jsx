import React from 'react';
import Control from './Control';
import Mandelbrot from './Mandelbrot';
import { ControlProvider } from './ControlContext';

function Container({ children }) {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
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
      <ControlProvider>
        <Control />
        <Mandelbrot />
      </ControlProvider>
    </Container>
  );
}

export default App;
