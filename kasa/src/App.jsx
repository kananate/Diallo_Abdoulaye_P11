//react Framework
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//style by Sass Partials
import "./styles/main.css";

//pages by React BrowserRouter
import Home from "./pages/home";
import About from "./pages/about";
import FicheLogement from "./pages/singleProduct";
import NotFound from "./pages/errorPage";
/* import Footer from "./components/footer";  */


function App() {
  return (
    <div>
      <div className="App">
        <Router>         
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/kasa/:id" element={<FicheLogement />} />
            <Route path="/" element={<Navigate replace  to="/accueil" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>           
        </Router>
      </div>
    </div>
  );
}

export default App;
