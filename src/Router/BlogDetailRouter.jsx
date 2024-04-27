import React from "react";
import { BlogDetailPage } from "../Screens/BlogDetailPage";

const BlogDetailRouter = [
  {
    path: "/blogdetail/:blogId",
    element: <BlogDetailPage />,
  },
];
export { BlogDetailRouter };
