import React from "react";
import { NavLink } from "react-router-dom";

const active = {
  color: "#000",
  backgoundColor: "tertiary",
};
const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={`text-decoration-none fw-semibold d-block w-100 px-3 py-3 text-body-tertiary ${({
          isActive,
        }) => (isActive ? active : "")}`}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
