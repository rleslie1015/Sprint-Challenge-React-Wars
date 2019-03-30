import React from "react";
import Character from "./Character"

import "./StarWars.css"
const CharactersList = props => {
    return ( 
    <div className = "characters-list"> {props.characters.map(item => 
      <Character 
        key = { item.name }
        item = { item }
      />)}  
    </div>
    )
}

export default CharactersList;