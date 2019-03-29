import React from "react";

const CharactersList = props => {
  console.log(props);
  return (<div className="characters-list">
    {props.characters.map( item => <div key={item.name}> {item.name} </div>)} 
    </div>
  )}
export default CharactersList;

