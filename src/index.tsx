import React from 'react';
import ReactDOM from 'react-dom/client';
import OMDb from './OMDb';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <OMDb />
  </React.StrictMode>,
);

