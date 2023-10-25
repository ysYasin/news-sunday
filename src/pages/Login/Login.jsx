import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../../shared/Header/Naveber/Navbar";
import { authContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState(" ");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { loginWithPass } = useContext(authContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    setError(" ");
    event.preventDefault();
    setError(" ");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithPass(email, password)
      .then((authUser) => {
        const err = { message: "please varified your email" };
        if (!authUser.user.emailVerified) {
          throw new Error(err.message);
        } else {
          toast("login succesfull!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate(from);
          }, 4000);
        }
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div>
      <div className="mb-5">
        <NavigationBar></NavigationBar>
      </div>
      <div className="w-25 mx-auto my-5 pt-5 pb-3 rounded-2 shadow-lg px-3 bg-body-tertiary">
        <h2 className="text-center mb-2">Please Login!</h2>

        <form onSubmit={handleLogin}>
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
          <small className="text-danger d-block">
            {error ? error + "*" : ""}
          </small>

          <Button variant="primary" type="submit" className="w-100 mt-3 mb-4">
            Register
          </Button>
        </form>
        <p>
          Allready have an account ? <Link to="/register">Please Register</Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
