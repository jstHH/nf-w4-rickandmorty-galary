

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