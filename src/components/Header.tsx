import React from "react";
import './Header.css';
import {Link} from "react-router-dom";


export default function Header() {
    return <header className={"header"}>
        <div>
            <Link to={"/"}>Galery</Link>
            <img className={"image"} src={"https://rickandmortyapi.com/icons/icon-512x512.png"} />
            <Link to={"/impressum"}>Impressum</Link>
        </div>
        <h1>Rick and Morty Character Galery</h1>
    </header>
}