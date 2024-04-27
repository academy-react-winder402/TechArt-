import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import CourseDetailes from "../Components/CourseDetailes/CourseDetailes";

function CourseDetailPage() {
  return (
    <div className="container border-2 border-red mx-auto">
      <Heading />
      <CourseDetailes />
      <Footer />
    </div>
  );
}

export { CourseDetailPage };
