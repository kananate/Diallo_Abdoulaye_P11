import React from "react";
import Footer from "../components/footer"; 
import Header from "../components/header";
import Banner from "../components/banner";
import imgBannerAbout from "../assets/banner/aboutBanner.png";
import Collapse from "../components/collapse";
import CollapseData from "../data/collapse.json";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgBannerAbout} titre="" />

        <div className="collapse">
          <div className="collapseDropdown">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
     <Footer />
    </div>
  );
};

export default About;
