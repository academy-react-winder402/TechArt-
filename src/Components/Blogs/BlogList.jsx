import React from "react";
import { Link } from "react-router-dom";
import CardComponent from "../Common/Card";

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts?.map((post, index) => (
        <Link key={post.id} to={`/blogdetail/${post.id}`}>
          <CardComponent
            key={index}
            title={post.name}
            image={post.image}
            description={post.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default PostList;
