import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Ragister from "../pages/RagistrationPage/Ragister";
import Login from "../pages/Login/Login";
import ProtectedRout from "../protectedRout/ProtectedRout";
import AboutPage from "../pages/Aboute/AboutPage";
import CareerPage from "../pages/Career/CareerPage";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/Main/NewsLayout";
import News from "../pages/News/News";
import Main from "../Layout/Main/Main";
import AllNews from "../pages/AllNews/AllNews";

const router = createBrowserRouter([
  {
    path: "/main",
    element: <Main />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Ragister />,
      },
      {
        path: "about",
        element: (
          <ProtectedRout>
            <AboutPage />
          </ProtectedRout>
        ),
      },
      {
        path: "career",
        element: (
          <ProtectedRout>
            <CareerPage />
          </ProtectedRout>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <AllNews></AllNews>,
        loader: () =>
          fetch(
            "https://news-sunday-server-lqh4zhyv9-ysyasins-projects.vercel.app/news"
          ),
      },
      {
        path: "category/:id",
        element: <Category />,
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: ({ params }) =>
          fetch(
            `https://news-sunday-server-lqh4zhyv9-ysyasins-projects.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
