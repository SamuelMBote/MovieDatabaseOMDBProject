import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import Home from './components/Home';
import Header from './components/head-footer/Header';

function OMDb() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default OMDb;

