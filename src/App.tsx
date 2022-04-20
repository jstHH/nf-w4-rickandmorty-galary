import React, {useEffect, useState} from 'react';
import './App.css';
import {rmCharacter} from "./model/rmCharacter";
import GaleryPage from "./pages/GaleryPage";
import {BrowserRouter} from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import ImpressumPage from "./pages/ImpressumPage";


function App() {
    const [characters, setCharacters] = useState<rmCharacter[]>([]);

    const fetchCharacters = () => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network error")
            })
            .catch(console.error)
    }

    useEffect(() => {
        fetchCharacters()
            .then(body => setCharacters(body.results))
    }, [])

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<GaleryPage characters={characters} />}/>
                  <Route path="/impressum" element={<ImpressumPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}



export default App