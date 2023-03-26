import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContacView from './components/Contac/ContacView';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

import reportWebVitals from './reportWebVitals';
import Landing from './components/Landing/Landing';
import UseState from './UseState/UseState';
import Pokemons from './FetchApiCall/Pokemons';
import Navbar from './components/Navbar/Navbar';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Landing />
      <UseState />
   
 


      <Routes>
        <Route exact path="/" element={<Pokemons />} />
        <Route exact path="/contac" element={<ContacView />} />
        <Route exact path="/pokemon/:id" element={<PokemonDetail />} />
    
      </Routes>
    </BrowserRouter>



  </React.StrictMode>
);


reportWebVitals();
