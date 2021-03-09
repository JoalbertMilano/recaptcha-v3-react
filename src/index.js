import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3' 
import App from './App';

import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LfcCncaAAAAAGiaTzkhj7lfHZQajcf6s4WrjZum">
        <App />
    </GoogleReCaptchaProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);
