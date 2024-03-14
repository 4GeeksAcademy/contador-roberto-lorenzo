import React from "react";

const Card = (props) => {
    return (
        <div className="d-flex card text-center align-items-center bg-secondary text-bg-secondary mb-2 cardStyle">
                 <p className="align-self-center" >{props.item}</p>
        </div>
    )
}; 


export default Card