import * as React from 'react';
import {
  Routes, Route, Outlet,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Home from './Home/Home';
import Post from './Posts/Post';

const font = "'Lora', serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    mediumGray: {
      main: '#373737',
      darker: '#272727',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 2,
  },
});

function Layout() {
  // Use an outlet to display whichever child component is active.
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts/:slug" element={<Post />} />
            <Route path="*" element={<div>Error, no match.</div>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}
