import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import imgHomeBanner from "../assets/banner/homeBanner.png";
import Gallery from "../components/gallery";
import Footer from "../components/footer"; 


const Home = () => {
    return (
      <div className="home">
        <Header/>
        <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} /> 
        <Gallery />       
      </main>
       <Footer /> 
      </div>
    );
  };
  
  export default Home;