import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRout = ({ children }) => {
  const { user, loadding } = useContext(authContext);
  const location = useLocation();

  if (loadding) {
    return (
      <div
        style={{ width: "100%", height: "100%" }}
        className="d-felx align-content-center justify-content-center"
      >
        <h1 className="fw-bolder text-center text-uppercase">Loadding....</h1>
      </div>
    );
  } else if (user) {
    return children;
  } else {
    return <Navigate to={"/main/login"} state={{ from: location }}></Navigate>;
  }
};

export default ProtectedRout;
