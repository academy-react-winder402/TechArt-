import BlogFilter from "../Components/Blogs/BlogFilter";
import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import MiniHeroBlog from "../Components/Common/MiniHeroBlog";
import Pagination from "../Components/Common/Pagination";

function BlogPage() {
  return (
    <div className="container border-2 border-red mx-auto">
      <Heading />
      <MiniHeroBlog />
      <BlogFilter />

      <Pagination />
      <Footer />
    </div>
  );
}

export { BlogPage };
