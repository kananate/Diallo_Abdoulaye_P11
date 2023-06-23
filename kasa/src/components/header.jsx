import logo from "../assets/logo/logo.png";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="header">
      <figure className="headerLogo">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav className= {({ isActive }) =>
            isActive ? "active" : "inactive"
          }/>
    </header>
  );
}
