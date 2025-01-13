import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../Common/Card";
import { News } from "../../Core/Services/api/News"; // Assuming NewsAPI is a function
import Pagination from "../Common/Pagination";
import { toast } from "react-toastify";

const PostList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await News(currentPage, 10);
      setPosts(response.news || []);
      setTotalCount(response.totalCount || 0);
    } catch (error) {
      console.error("Failed to fetch posts", error);
      toast.error("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link key={post.id} to={`/blogdetail/${post.id}`}>
              <CardComponent
                title={post.title}
                imageUrl={post.tumbImageAddress}
                description={post.describe}
                price={post.price}
                author={post.author}
                date={post.date}
              />
            </Link>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalCount / 10)}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
};

export default PostList;
