import * as React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import PostPage from './Posts/PostPage';

const font = "'Lora', serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
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
            <Route index element={<div>harvard is home.</div>} />
            <Route path="post" element={<PostPage />} />
            <Route path="*" element={<div>Error, no match.</div>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}
