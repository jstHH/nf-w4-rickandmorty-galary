import React, {useEffect, useState} from 'react';
import './App.css';
import {rmCharacter} from "./model/rmCharacter";
import GaleryPage from "./pages/GaleryPage";
import {BrowserRouter} from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import ImpressumPage from "./pages/ImpressumPage";
import fetchCharacters from "./services/rmApiService";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";


function App() {
    const [characters, setCharacters] = useState<rmCharacter[]>([]);

    useEffect(() => {
        fetchCharacters()
            .then(body => setCharacters(body.results))
    }, [])

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<GaleryPage characters={characters} />}/>
                  <Route path="/impressum" element={<ImpressumPage/>}/>
              <Route path="/character/:id" element={<CharacterDetailsPage characters={characters}/>}/>
          </Routes>
      </BrowserRouter>
  );
}



export default App