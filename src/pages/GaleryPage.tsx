import {rmCharacter} from "../model/rmCharacter";
import CharacterGalery from "../components/CharacterGalery";
import Header from "../components/Header";
import {useCharacters} from "../hooks/CharacterHooks";

type CharacterGaleryProps = {
    characters:rmCharacter[]
}

export default function GaleryPage() {
    const characters = useCharacters()

    return <div>
        <Header/>
        <CharacterGalery characters={characters} />
    </div>
}