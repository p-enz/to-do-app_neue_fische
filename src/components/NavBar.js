import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home </NavLink>
      </li>
      <li>
        <NavLink to="/Archive">Archive </NavLink>
      </li>
      <li>
        <NavLink to="/Random">Random </NavLink>
      </li>
    </ul>
  );
}
