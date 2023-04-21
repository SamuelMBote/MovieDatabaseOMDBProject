import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import Home from './components/Home';
import Header from './components/head-footer/Header';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import SearchForm from './components/SearchForm';
import SearchStorage from './providers/SearchStorage';
import Movie from './components/movie/Movie';
import Pages from './components/Pages';
import Footer from './components/head-footer/Footer';

const OMDb = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Space Grotesk', 'sans-serif'].join(','),

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
        fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
      },
      subtitle2: {
        fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
      },
      button: {
        fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
        fontWeight: 'bold',
      },
      body1: {
        fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
      },
      body2: {
        fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
      },
    },
  });
  const type = ['movie', 'series', 'episode'];
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <SearchStorage>
            <SearchForm />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page/:page" element={<Pages />} />
              {type.map((type) => {
                return (
                  <Route key={type} path={`${type}/:id`} element={<Movie />} />
                );
              })}
            </Routes>
          </SearchStorage>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default OMDb;

