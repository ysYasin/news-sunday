import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import Ragister from "../pages/RagistrationPage/Ragister";
import Login from "../pages/Login/Login";
import ProtectedRout from "../protectedRout/ProtectedRout";
import AboutPage from "../pages/Aboute/AboutPage";
import CareerPage from "../pages/Career/CareerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Ragister />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/about",
        element: (
          <ProtectedRout>
            <AboutPage />
          </ProtectedRout>
        ),
      },
      {
        path: "/career",
        element: (
          <ProtectedRout>
            <CareerPage />
          </ProtectedRout>
        ),
      },
    ],
  },
]);

export default router;
