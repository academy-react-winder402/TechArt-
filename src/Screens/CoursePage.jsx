import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import CategoryFilter from "../Components/Courses/CategotyFilter";
import CourseList from "../Components/Courses/CourseList";
import PageContainer from "../Components/Common/PageContainer";

function CoursePage() {
  return (
    <div className="container border-2 border-red mx-auto">
      <Heading />
      <CategoryFilter />

      <Footer />
    </div>
  );
}

export { CoursePage };
