import React, { useContext, useEffect, useState } from "react";
import NavigationBar from "../../shared/Header/Naveber/Navbar";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import "react-toastify/dist/ReactToastify.css";

const Ragister = () => {
  const [error, setError] = useState(" ");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  //contex
  const { signinByEmailandPass } = useContext(authContext);

  const handleResistration = (event) => {
    event.preventDefault();
    setError(" ");
    //getting form inputs by name
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("password didn't match");
      return;
    } else if (!password.length > 7) {
      setError("Password must be at least 8 characters long");
      return;
    } else if (!/[^a-zA-Z0-9\s]/.test(password)) {
      setError("Password should contain a number and special character");
      return;
    }

    signinByEmailandPass(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((err) => setError(err.message));
        sendEmailVerification(auth.currentUser)
          .then(() => {
            toast("please verify your email!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
          .catch((err) => setError(err.message));
        setInterval(() => {
          navigate("/main/login");
        }, 4000);
      })

      .catch((err) => {
        setError(err.message);
      });
  };

  // tooltip function
  const Link = ({ id, children, title, to }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href={to}>{children}</a>
    </OverlayTrigger>
  );

  // Accept terms and condition
  const [accept, setAccept] = useState(false);

  const handleAcceptTerms = (event) => {
    const check = event.target.checked;
    setAccept(check);
  };

  return (
    <div>
      <div className="w-25 mx-auto my-5 pt-5 pb-3 rounded-2 shadow-lg px-3 bg-body-tertiary">
        <h2 className="text-center mb-2">Please Register!</h2>
        <form onSubmit={handleResistration}>
          <Form.Label htmlFor="name">Name*</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            className="mb-2"
            placeholder="write you'r name"
            id="inputEmail5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="email">email*</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            className="mb-2"
            placeholder="writ you'r email"
            id="inputEmail5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="password">Password*</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            name="password"
            required
            className="mb-2"
            placeholder="write you'r password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <p style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
            {show ? "Hide password" : "Show Password"}
          </p>
          <Form.Label htmlFor="confirm"> confirm Password*</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            name="confirm"
            required
            className="mb-2"
            placeholder="re-write your password"
            id="inputPassword6"
            aria-describedby="passwordHelpBlock"
          />
          <small className="text-danger d-block">
            {error !== " " ? error + "*" : ""}
          </small>
          <Form.Check
            onClick={handleAcceptTerms}
            type="checkbox"
            label={
              <>
                Accept{" "}
                <Link
                  className="link-underline-primary text-primary"
                  to="/terms"
                >
                  Terms and condition
                </Link>
              </>
            }
          />
          <Form.Text id="passwordHelpBlock" className="text-center" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must contain special characters.
          </Form.Text>
          <Link
            title={`${
              !accept
                ? `Please accept terms and condition`
                : "Complite Ragistration"
            }`}
            id={`${!accept && "t-1"}`}
          >
            <Button
              variant="primary"
              disabled={!accept}
              type="submit"
              className="w-100 mt-3 mb-4"
            >
              Register
            </Button>
          </Link>
        </form>
        <p>
          Allready have an account ? <Link to="/main/login">Please Login</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Ragister;
