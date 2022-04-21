import React, {useEffect, useState} from 'react';
import './App.css';
import {rmCharacter} from "./model/rmCharacter";
import GaleryPage from "./pages/GaleryPage";
import {BrowserRouter} from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import ImpressumPage from "./pages/ImpressumPage";
import fetchCharacters from "./services/rmApiService";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import {useCharacters} from "./hooks/CharacterHooks";


function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<GaleryPage/>}/>
                  <Route path="/impressum" element={<ImpressumPage/>}/>
              <Route path="/character/:id" element={<CharacterDetailsPage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App