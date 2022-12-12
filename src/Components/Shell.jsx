import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';

const font = "'Lora', serif";

const theme = createTheme({
  typography: {
    fontFamily: font,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
