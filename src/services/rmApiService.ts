import axios from "axios";


export default function fetchCharacters () {
    return axios.get('https://rickandmortyapi.com/api/character')
        .then(response => response.data)
        .catch(console.error)
}

export function fetchCharacter (characterID: number) {
    return axios.get(`https://rickandmortyapi.com/api/character/${characterID}`)
        .then(response => response.data)
        .catch(console.error)
}