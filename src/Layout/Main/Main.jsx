import React from "react";
import NavigationBar from "../../shared/Header/Naveber/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet />
    </div>
  );
};

export default Main;
