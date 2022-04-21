import {useEffect, useState} from "react";
import {rmCharacter} from "../model/rmCharacter";
import fetchCharacters, {fetchCharacter} from "../services/rmApiService";


export function useCharacters() {
    const [characters, setCharacters] = useState<rmCharacter[]>([]);

    useEffect(() => {
        fetchCharacters()
            .then(body => setCharacters(body.results))
    }, [])

    return characters;
}

export function useCharacter(characterID: number) {
    const [character, setCharacter] = useState<rmCharacter>();

    useEffect(() => {
        fetchCharacter(characterID)
            .then(body => setCharacter(body))
    }, [])

    return character;
}