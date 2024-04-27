import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import CategoryFilter from "../Components/Courses/CategotyFilter";

import Pagination from "../Components/Common/Pagination";

function CoursePage() {
  return (
    <div className="container border-2 border-red mx-auto">
      <Heading />

      <CategoryFilter />

      <Pagination />
      <Footer />
    </div>
  );
}

export { CoursePage };
