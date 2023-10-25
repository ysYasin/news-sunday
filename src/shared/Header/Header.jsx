import React from "react";
import Logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button } from "react-bootstrap";
import NavigationBar from "./Naveber/Navbar";

const Header = () => {
  return (
    <div className="mb-2">
      <div className="container">
        <div className="d-flex my-2 bg-light gap-3 p-2">
          <Button variant="danger">Letest</Button>
          <Marquee pauseOnHover>
            I can be a React component, multiple React components, or just some
            text.... I can be a React component, multiple React components, or
            just some text.... I can be a React component, multiple React
            components, or just some text.... I can be a React component,
            multiple React components, or just some text....
          </Marquee>
        </div>
        <div className="text-center d-flex flex-column mb-3">
          <div>
            <img src={Logo} width={"30%"} alt="" />
          </div>
          <p className="text-secondary fs-5">
            Journalism Without Fear or Favour
          </p>
          <p className="d-flex fw-semibold fs-5 text-center justify-content-center align-items-center gap-3">
            {moment().format("dddd, MMMM DD, YYYY")}
          </p>
        </div>
        <NavigationBar></NavigationBar>
      </div>
    </div>
  );
};

export default Header;
