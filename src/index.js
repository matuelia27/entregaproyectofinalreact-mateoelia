import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Landing from './components/Landing/Landing';
import UseState from './UseState/UseState';
import ClickTracker from './ClickTracker/ClickTracker';
import FetchExample from './FetchApi/FetchExample';
import Pokemons from './FetchApiCall/Pokemons';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <Landing />
  <UseState />
  <ClickTracker />
  <FetchExample />
  <Pokemons/>



  </React.StrictMode>
);


reportWebVitals();
  