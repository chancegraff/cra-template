import React from 'react';
import ReactDOM from 'react-dom';
import { ReportHandler } from 'web-vitals';

import Components from './components';

async function reportWebVitals(onPerfEntry?: ReportHandler) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import(
      'web-vitals'
    );
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Components />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
