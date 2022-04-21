import {rmCharacter} from "../model/rmCharacter";
import CharacterCard from "./CharacterCard";
import './CharacterGalery.css';
import {ChangeEvent, useState} from "react";

type CharacterGaleryProps = {
    characters:rmCharacter[]
}


export default function CharacterGalery({characters}: CharacterGaleryProps) {
    const [text, setText] = useState<string>("");

    return <div>
        <div className={"inputField"}>
            <input value={text} onChange={onTextChange}/>
        </div>
        <div>
            {showGalerySpace(characters)}
        </div>
    </div>

    function onTextChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }

    function showGalerySpace(characters: rmCharacter[]) {
        if (characters.filter(c => c.name.toLowerCase().includes(text.toLowerCase())).length === 0) {
            return showEmptyHint()
        } else {
           return showCharacterGalery(characters)
        }
    }

     function showCharacterGalery(characters: rmCharacter[]) {
        return <div className={"galery"}>{characters.filter(c => c.name.toLowerCase().includes(text.toLowerCase())).map(c => <CharacterCard character={c} />)}</div>
    }

    function showEmptyHint() {
        return <p>No Searchresults availeable!</p>
    }
}

