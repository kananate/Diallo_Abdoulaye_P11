import React from 'react';


function Card({image, title}) {
    return (
      <div className="card">
        <img src={image} alt={title} className="cardImg" />
        <div className="cardOverlay"></div>
        <h2 className="cardTitle">{title}</h2>
      </div>
    );
}

export default Card;