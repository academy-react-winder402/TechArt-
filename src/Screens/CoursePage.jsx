import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import CategoryFilter from "../Components/Courses/CategotyFilter";

import Pagination from "../Components/Common/Pagination";
import MiniHero from "../Components/Common/MiniHero";

function CoursePage() {
  return (
    <div className="container border-2 border-red mx-auto">
      <Heading />
      <MiniHero />

      <CategoryFilter />

      <Pagination />
      <Footer />
    </div>
  );
}

export { CoursePage };
