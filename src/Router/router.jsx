import { createBrowserRouter } from "react-router-dom";
import { BlogPage } from "../Screens/BlogPage";
import { CoursePage } from "../Screens/CoursePage";
import { Landing } from "../Screens/Landing";
import { LoginPage } from "../Screens/LoginPage";
import { PublicLayout } from "../Components/Common/Layout";
import { BlogDetailRouter } from "./BlogDetailRouter";
import { BlogPageRouter } from "./BlogPageRouter";
import { CourseDetailRouter } from "./CourseDetailRouter";
import { CoursePageRouter } from "./CoursePageRouter";
import { EditProfilePageRouter } from "./EditProfileRouter";
import { LoginPageRouter } from "./LoginRouter";
import { PanellRouter } from "./PanellRouter";
import { SignUpPageRouter } from "./SignUpPageRouter";
import { ForgetFormRouter } from "./ForgetFormRouter";
import { ForgetFormStep2Router } from "./ForgetFormStep2Router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
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
      // اضافه کردن مسیرهای دیگر به درستی زیر PublicLayout
      ...CoursePageRouter,
      ...BlogPageRouter,
      ...CourseDetailRouter,
      ...BlogDetailRouter,
      ...EditProfilePageRouter,
      ...PanellRouter,
      ...SignUpPageRouter,
      ...ForgetFormRouter,
      ...ForgetFormStep2Router,
    ],
  },
]);

export { router };
