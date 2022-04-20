import {rmCharacter} from "../model/rmCharacter";
import CharacterGalery from "../components/CharacterGalery";
import Header from "../components/Header";

type CharacterGaleryProps = {
    characters:rmCharacter[]
}

export default function GaleryPage({characters}: CharacterGaleryProps) {


    return <div>
        <Header/>
        <CharacterGalery characters={characters} />
    </div>
}