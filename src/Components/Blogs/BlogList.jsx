// src/components/PostList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../Common/Card";
import { News } from "../../Core/Services/api/News";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await News();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts?.news?.map((post, index) => (
        <Link key={post.id} to={`/blogdetail/${post.id}`}>
          <CardComponent
            key={index}
            title={post.name}
            imageUrl={post.imageUrl}
            description={post.description}
            price={post.price}
            athor={post.athor}
            date={post.date}
          />
        </Link>
      ))}
    </div>
  );
};

export default PostList;
