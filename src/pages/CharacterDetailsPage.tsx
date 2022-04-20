import {rmCharacter} from "../model/rmCharacter";
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header";
import CharacterDetailsView from "../components/CharacterDetailsView";
import "./CharacterDetailsPage.css"

type CharacterGaleryProps = {
    characters:rmCharacter[]
}




export default function CharacterDetailsPage({characters}: CharacterGaleryProps) {
    const params = useParams();
    const id: number = Number(params.id)
    const character = characters[id - 1]

    const navigate = useNavigate();


    function onButtonClick() {
        navigate(`/`)
    }

    return <div>
        <Header/>
        <CharacterDetailsView character={character} />
        <div className={"footer"}>
            <button className={"backButton"} onClick={onButtonClick}>Zurück</button>
        </div>

    </div>
    }




