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
        <div className={"galery"}>{characters.filter(c => c.name.toLowerCase().includes(text.toLowerCase())).map(c => <CharacterCard character={c} />)}</div>
    </div>

    function onTextChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }
}

