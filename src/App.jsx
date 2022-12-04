import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Components/Header';
import Post from './Components/Post';

const font = "'Tenor Sans', sans-serif";

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
        <Post />
      </ThemeProvider>
    </div>
  );
}

export default App;
