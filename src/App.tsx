import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGalery from "./components/CharacterGalery";
import {rmCharacter} from "./model/rmCharacter";


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
    <div className="App">
      <header>
        <img className={"image"} src={"https://rickandmortyapi.com/icons/icon-512x512.png"} />
        <h1>Rick and Morty Character Galery</h1>
      </header>
      <main>
        <CharacterGalery characters={characters} />
      </main>
    </div>
  );
}



export default App