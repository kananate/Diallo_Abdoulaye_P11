import React from "react";
import ErrorPage from "../components/error";
import Footer from "../components/footer";
import Header from "../components/header";

const NotFound = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
          <ErrorPage />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
