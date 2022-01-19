import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProductsContextProvider} from "./Context/ProductsContextProvider"
ReactDOM.render(
  <ProductsContextProvider>
    <App />
  </ProductsContextProvider>,
  document.getElementById('root')
);
