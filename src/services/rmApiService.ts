import axios from "axios";

type rmApiServiceProps = {
    characterID: number;
}

export default function fetchCharacters () {
    return axios.get('https://rickandmortyapi.com/api/character')
        .then(response => response.data)
        .catch(console.error)
}

export function fetchCharacter({characterID}: rmApiServiceProps) {
    return axios.get(`https://rickandmortyapi.com/api/character/${characterID}`)
        .then(response => response.data)
        .catch(console.error)
}