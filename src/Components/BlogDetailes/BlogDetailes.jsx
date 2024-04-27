import React from "react";
import { useParams } from "react-router-dom";
import BlogDetailContent from "./BlogDetailContent";
import BlogMainContent from "./BlogMainContent";

export default function BlogDetailes() {
  const { id } = useParams();
  return (
    <BlogDetailContent>
      <BlogMainContent blogId={id} />
    </BlogDetailContent>
  );
}
