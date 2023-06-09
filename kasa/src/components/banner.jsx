import React from "react";


function Banniere({ image, texte }) {
  return (
    <div className="banner">
      <img className="bannerImg" src={image} alt="Bannière" /> 
      <div className="bannerBack"></div>     
      <span className="bannerTxt">{texte}</span>
    </div>
  );
}

export default Banniere;