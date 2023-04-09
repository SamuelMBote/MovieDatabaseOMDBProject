import React from 'react';
import ReactDOM from 'react-dom/client';
import OMDb from './OMDb';
import CssBaseline from '@mui/material/CssBaseline';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <OMDb />
  </React.StrictMode>,
);

