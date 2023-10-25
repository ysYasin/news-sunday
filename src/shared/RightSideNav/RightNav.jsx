import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "./RightNav.css";
import Qzone from "./Q-zone/Q-zone";
import CreateNewsPaper from "./CreateNewsPaper/CreateNewsPaper";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const RightNav = () => {
  const { signupWithGoogle } = useContext(authContext);
  const location = useLocation();
  // console.log(location);
  const from = location?.state?.from?.pathname || location;

  const hangleGoogleLogin = (event) => {
    event.preventDefault();
    hangleGoogleLogin();
    <Navigate to={from}></Navigate>;
  };

  return (
    <div className="">
      <div id="login" className="my-4">
        <h4 className="fw-semibold">Login</h4>
        <div>
          <Button
            onClick={hangleGoogleLogin}
            variant="outline-primary"
            className="mb-2"
          >
            <FaGoogle /> Login with Google
          </Button>
          <Button variant="outline-secondary">
            <FaGithub /> Login with Github
          </Button>
        </div>
      </div>
      <div id="FindUsOn" className="my-2">
        <h4 className="fw-semibold">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <div className=" fs-5 icon d-inline-block text-primary">
              <FaFacebook />
            </div>{" "}
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="icon fs-5 icon d-inline-block text-warning">
              <FaInstagram />{" "}
            </div>{" "}
            Instagram
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="icon fs-5 icon d-inline-block text-primary">
              <FaTwitter />{" "}
            </div>{" "}
            Tweeter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone />
      <CreateNewsPaper />
    </div>
  );
};

export default RightNav;
