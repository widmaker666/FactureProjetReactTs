import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new-estimate">New Estimate</NavLink>
      <NavLink to="/new-receipt">New Receipt</NavLink>
      <NavLink to="/my-estimates">My estimate</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
    </nav>
  );
};

export default NavBar;
