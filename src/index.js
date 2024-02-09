import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { Provider } from './context/context';
import App from './App';


const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
  <Provider>
  <App/>
  </Provider>
 </StrictMode>
)