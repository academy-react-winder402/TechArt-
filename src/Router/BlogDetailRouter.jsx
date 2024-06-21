import React from "react";
import { BlogDetailPage } from "../Screens/BlogDetailPage";

const BlogDetailRouter = [
  {
    path: "/blogdetail/:id",
    element: <BlogDetailPage />,
  },
];
export { BlogDetailRouter };
