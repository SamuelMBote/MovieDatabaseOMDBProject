import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import Home from './components/Home';
import Header from './components/head-footer/Header';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const OMDb = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
      fontWeightRegular: 'initial',
      h1: {
        fontFamily: ['Sedgwick Ave Display', 'cursive'].join(','),
      },
      h2: {
        fontFamily: ['Sedgwick Ave Display', 'cursive'].join(','),
      },
      h3: {
        fontFamily: ['Sedgwick Ave Display', 'cursive'].join(','),
      },
      h4: {
        fontFamily: ['Sedgwick Ave Display', 'cursive'].join(','),
      },
      h5: {
        fontFamily: ['Sedgwick Ave Display', 'cursive'].join(','),
      },
      h6: {
        fontFamily: ['Sedgwick Ave Display', 'cursive'].join(','),
      },
      subtitle1: {
        fontFamily: ['Playfair Display SC', 'serif'].join(','),
      },
      subtitle2: {
        fontFamily: ['Playfair Display SC', 'serif'].join(','),
      },
      button: {
        fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
        fontWeight: 'bold',
      },
    },
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default OMDb;

