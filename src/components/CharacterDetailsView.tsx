import {rmCharacter} from "../model/rmCharacter";
import "./CharacterDetailsView.css"

type CharacterGaleryProps = {
    character:rmCharacter
}

export default function CharacterDetailsView({character}: CharacterGaleryProps) {

    return <div>
        <div className={"header"}>
            <h1>{character.name}</h1>
        </div>
        <div className={"characterInfoContainer"}>
            <div>
                <img src={character.image}/>
            </div>
            <div>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Type: {character.type}</p>
                <p>Gender: {character.gender}</p>
            </div>
            <div>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
            </div>
        </div>

    </div>

}