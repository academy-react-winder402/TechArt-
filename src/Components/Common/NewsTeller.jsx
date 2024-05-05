import React, { useState } from "react";

const NewsTellerSignup = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to handle the email submission
    console.log("Submitting email:", email);
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mt-8"
      >
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Subscribe
        </button>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
          className="border border-gray-400 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </form>
    </div>
  );
};

export default NewsTellerSignup;
