import { createBrowserRouter } from "react-router-dom";
import { BlogPage } from "../Screens/BlogPage";
import { CoursePage } from "../Screens/CoursePage";
import { Landing } from "../Screens/Landing";
import { LoginPage } from "../Screens/LoginPage";
import { BlogDetailRouter } from "./BlogDetailRouter";
import { BlogPageRouter } from "./BlogPageRouter";
import { CourseDetailRouter } from "./CourseDetailRouter";
import { CoursePageRouter } from "./CoursePageRouter";
import { LoginPageRouter } from "./LoginRouter";
import { PanellRouter } from "./PanellRouter";
const router = createBrowserRouter([
  ...CoursePageRouter,
  ...BlogPageRouter,
  ...LoginPageRouter,
  ...PanellRouter,
  ...CourseDetailRouter,
  ...BlogDetailRouter,

  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/courses",
    element: <CoursePage />,
  },
  {
    path: "/blogs",
    element: <BlogPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <PanellRouter />,
  },
  {
    path: "/coursedetail",
    element: <CourseDetailRouter />,
  },
  {
    path: "/blogdetail",
    element: <BlogDetailRouter />,
  },
]);

export { router };
