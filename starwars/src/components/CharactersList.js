import React from "react";
import Character from "./Character"

import "./StarWars.css"
const CharactersList = props => {
  console.log(props);
  return (<div className="characters-list">
    {props.characters.map( item => <Character key="name" item={item} /> )} 
    </div>
  )}
export default CharactersList;

