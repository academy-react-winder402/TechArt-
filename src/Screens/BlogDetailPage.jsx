import BlogDetailes from "../Components/BlogDetailes/BlogDetailes";
import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";

function BlogDetailPage() {
  return (
    <div className="container border-2 border-red mx-auto">
      <Heading />
      <BlogDetailes />
      <Footer />
    </div>
  );
}

export { BlogDetailPage };
