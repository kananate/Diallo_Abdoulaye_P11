import logo from "../assets/logo/logo.png";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="header">
      <figure className="header-logo">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}
