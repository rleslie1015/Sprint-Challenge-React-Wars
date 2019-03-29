import React from "react";

const Character = props => {
    return (
        <div className="char">
            <h3>  {props.item.name} </h3>
            <p>Eye Color: {props.item.eye_color} </p>
            <p>Hair Color: {props.item.hair_color}</p>
            <p>Gender: {props.item.gender}</p>
            <p>Height: {props.item.height}</p>
        </div>
    )
    
}
export default Character;