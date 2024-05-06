import React from "react";

const testimonialData = [
  {
    quote: "Lorem ipsum dolor sit amet,",
    author: "John Doe",
    company: "CEO, Company X",
    avatar: "https://via.placeholder.com/150",
  },
  {
    quote: "Ut enim ad ex ea commodo consequat.",
    author: "Jane Smith",
    company: "Marketing Director, Company Y",
    avatar: "https://via.placeholder.com/150",
  },
  {
    quote: "illum dolore eu fugiat nulla pariatur.",
    author: "Alice Johnson",
    company: "CTO, Company Z",
    avatar: "https://via.placeholder.com/150",
  },
  {
    quote: "mollit anim id est laborum.",
    author: "Bob Brown",
    company: "COO, Company W",
    avatar: "https://via.placeholder.com/150",
  },
];

const Testimonial = ({ quote, author, company, avatar }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="p-8">
            <blockquote>
              <div className="text-lg font-medium text-gray-800">{quote}</div>
            </blockquote>
            <div className="mt-4">
              <div className="text-base font-semibold text-gray-700">
                {author}
              </div>
              <div className="text-base text-gray-600">{company}</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-12 w-12 rounded-full object-cover md:w-12"
        src={avatar}
        alt={`${author}'s Avatar`}
      />
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {testimonialData.map((testimonial, index) => (
        <Testimonial
          key={index}
          quote={testimonial.quote}
          author={testimonial.author}
          company={testimonial.company}
          avatar={testimonial.avatar}
        />
      ))}
    </div>
  );
};

export default TestimonialSection;
