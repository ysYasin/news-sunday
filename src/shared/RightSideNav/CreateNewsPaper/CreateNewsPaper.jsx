import React, { useContext } from "react";
import "./CreateNewsPaper.css";
import bg from "../../../assets/bg1.png";
import { authContext } from "../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateNewsPaper = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const handleCNP = (event) => {
    event.preventDefault();

    if (!user) {
      navigate("/login");
    } else {
      navigate("/createnews");
    }
  };
  return (
    <div className="position-relative my-5">
      <img src={bg} width={"100%"} alt="" />
      <div className="text-center bg-black h-100 d-flex flex-column gap-3 justify-content-center bg-opacity-75 z-3 position-absolute align-content-center top-0 px-2 text-white">
        <h1>Create an Amaizing Newspaper</h1>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button
          onClick={handleCNP}
          className="btn rounded-0 btn-danger w-50 mx-auto text-light"
        >
          Learn More.
        </button>
      </div>
    </div>
  );
};

export default CreateNewsPaper;
