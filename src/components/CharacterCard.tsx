import {rmCharacter} from "../model/rmCharacter";
import "./CharacterCard.css"
import {useNavigate} from "react-router-dom";


type characterCardProps = {
    character:rmCharacter;
}

export default function CharacterCard({character}: characterCardProps) {

    const navigate = useNavigate();


    function onCardClick() {
        navigate(`/character/${character.id}`)
    }

    return <div className={"cardContainer"} onClick={onCardClick}>
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

