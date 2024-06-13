import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import CategoryFilter from "../Components/Courses/CategotyFilter";
import { useLocation } from "react-router-dom";

import Pagination from "../Components/Common/Pagination";
import MiniHero from "../Components/Common/MiniHero";

function CoursePage() {
  const location = useLocation();
  return (
    <div className="container border-2 border-red mx-auto">
      <Heading />
      <MiniHero currentPath={location.pathname} />

      <CategoryFilter />

      <Footer />
    </div>
  );
}

export { CoursePage };
