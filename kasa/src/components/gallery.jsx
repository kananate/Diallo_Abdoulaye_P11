import React from "react";
import { Link } from "react-router-dom";
import logements from "../data/kasa.json";
import Card from "./card";

const Gallery = () => {
  return (
    <div className="home-gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/kasa/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
