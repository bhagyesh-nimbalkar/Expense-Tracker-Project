import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context/context';
import App from './App';



ReactDOM.render(
  <StrictMode>
  <Provider>
  <App/>
  </Provider>
 </StrictMode>,
 document.getElementById('root')
)