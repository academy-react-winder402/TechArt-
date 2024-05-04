import React, { useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle form submission (e.g., sending the comment to a backend server)
    console.log("Comment submitted:", comment);
    // Reset the comment input after submission
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        placeholder="Add a comment..."
        value={comment}
        onChange={handleChange}
        rows={4}
        required
      ></textarea>
      <div className="flex justify-end mt-2">
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
