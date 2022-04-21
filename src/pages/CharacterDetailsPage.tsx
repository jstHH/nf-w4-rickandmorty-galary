import {rmCharacter} from "../model/rmCharacter";
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header";
import CharacterDetailsView from "../components/CharacterDetailsView";
import "./CharacterDetailsPage.css"
import {useEffect, useState} from "react";
import {fetchCharacter} from "../services/rmApiService";


export default function CharacterDetailsPage() {
    const params = useParams();
    const id: number = Number(params.id)
    const [character, setCharacter] = useState<rmCharacter>();

    useEffect(() => {
        fetchCharacter(id)
            .then(body => setCharacter(body))
    }, [])

    const navigate = useNavigate();


    function onButtonClick() {
        navigate(`/`)
    }

    return <div>
        <Header/>
        {character ? <CharacterDetailsView character={character} />: <p>No Character found</p>}
        <div className={"footer"}>
            <button className={"backButton"} onClick={onButtonClick}>Zurück</button>
        </div>

    </div>
    }





