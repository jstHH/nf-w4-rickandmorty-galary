type rmApiServiceProps = {
    characterId: number;
}

export default function fetchCharacters () {
    return fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Network error")
        })
        .catch(console.error)
}

export function fetchCharacter({characterId}: rmApiServiceProps) {
    return fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Network error")
        })
        .catch(console.error)
}
