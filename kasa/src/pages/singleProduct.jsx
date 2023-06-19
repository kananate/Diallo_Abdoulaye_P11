import React from "react";
import DisplayLogement from "../components/displayLogement";
import Footer from "../components/footer";
import Header from "../components/header";

const FicheLogement = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <DisplayLogement />
      </main>
      <Footer />
    </div>
  );
};

export default FicheLogement;
