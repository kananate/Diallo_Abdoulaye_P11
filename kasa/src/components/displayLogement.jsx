//import React, { useState } from "react";
import React from "react";
import { useParams, Navigate } from "react-router-dom"
import DataFichLogement from "../data/kasa.json";
import Tag from "./tag";
import Collapse from "./collapse";
import Carrousel from "./carrousel";
import Rate from "./rating";
import Host from "./host";

const DisplayLogement = () => {
  /* Récupère la bonne fiche */
  let { id } = useParams();

  const ficheLogement = DataFichLogement.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  /* Équipements */
  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {ficheLogement ? (
        <div className="Fiche-container">
          <Carrousel slides={ficheLogement?.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info-tagtitle">
                <div className="description-info-tagtitle-title">
                  <span className="title-logement">{ficheLogement?.title}</span>
                  <span className="endroit-logement">
                    {ficheLogement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="description-info-tagtitle-tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info-proprietaire">
                {/* Hosting */}
                <div className="description-info-proprietaire-nom">
                  <Host
                    name={ficheLogement?.host.name}
                    picture={ficheLogement?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info-proprietaire-rate">
                  <Rate score={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>
          {/* Collapse */}
          <div className="col-desc">
            <div className="col-centent-desc">
              <Collapse
                title="Desc"
                content={ficheLogement?.description}
              />
            </div>
            <div className="col-centent-desc-equipement">
              <Collapse title="equipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default DisplayLogement;
