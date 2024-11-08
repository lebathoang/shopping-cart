import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from '~/App';
import Job from './components/jobs';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from '~/Store/Jobs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      {/* <App /> */}
      <Job />
    </StoreProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
