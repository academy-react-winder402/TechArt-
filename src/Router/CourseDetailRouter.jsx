import React from "react";
import { CourseDetailPage } from "../Screens/CourseDetailPage";

const CourseDetailRouter = [
  {
    path: "/coursedetail/:courseId",
    element: <CourseDetailPage />,
  },
];
export { CourseDetailRouter };
