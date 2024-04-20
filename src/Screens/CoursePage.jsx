import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import CategoryFilter from "../Components/Courses/CategotyFilter";
import CourseList from "../Components/Courses/CourseList";

function CoursePage() {
  // Mock data for products
  const course = [
    {
      id: 1,
      name: "Product 1",
      imageUrl: "",
      description: "Description of Product 1",
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: "",
      description: "Description of Product 2",
    },
  ];
  return (
    <div className="container border-2 border-red mx-auto">
      <Heading />
      <CategoryFilter />
      <CourseList courses={courses} />
      <Footer />
    </div>
  );
}

export { CoursePage };
