import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user/1">User</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default NavBar;
