import {rmCharacter} from "../model/rmCharacter";
import "./CharacterCard.css"


type characterCardProps = {
    character:rmCharacter;
}

export default function characterCard({character}: characterCardProps) {
    return <div className={"cardContainer"}>
        <h1>{character.name}</h1>
        <h2>ID: {character.id}</h2>
        <img src={character.image} />
        <div className={"bottom"}>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
        </div>
    </div>

}