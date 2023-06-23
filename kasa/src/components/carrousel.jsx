import React, { useState } from "react";

function Carrousel({ slides }) {
  /*Création d'un hook*/
  const [current, setCurrent] = useState(0); 
  const slidesLength = slides.length;
  /******Fonction pour l'image precedente******/
  const nextImage = () => {
    // on repart au premier slide quand on arrive au dernier
    setCurrent(current === slidesLength - 1 ? 0 : current + 1); 
  };
  /*******Fonction pour l'image suivante ******/
  const prevImage = () => {
     // on repart au dernier slide quand on est au premier
    setCurrent(current === 0 ? slidesLength - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slide">
      {slidesLength > 1 && (
        <p className="left-Arrow" onClick={prevImage}>
          <i className="fa-solid fa-chevron-left"></i>
        </p>
      )}
      {slidesLength > 1 && (
        <p className="right-Arrow" onClick={nextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </p>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {index === current && (
              <img src={image} alt="img-appartement" className="slide-image" />
            )}
            {index === current && slidesLength > 1 && (
              <span className="slider-number">
                {current + 1}/{slidesLength}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;
