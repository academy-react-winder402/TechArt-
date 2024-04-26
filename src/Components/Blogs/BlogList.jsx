import React from "react";
import CardComponent from "../Common/Card";

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts?.map((post, index) => (
        <CardComponent
          key={index}
          title={post.name}
          image={post.image}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default PostList;
