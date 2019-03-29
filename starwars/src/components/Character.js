import React from "react";

const Character = props => {
    console.log(props)
    return (
     
        <div className="char">
      {props.item.name}
        </div>
    )
    
}
export default Character;