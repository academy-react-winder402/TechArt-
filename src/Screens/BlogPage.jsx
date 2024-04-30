import BlogFilter from "../Components/Blogs/BlogFilter";
import Footer from "../Components/Common/Footer";
import Heading from "../Components/Common/Header";
import MiniHero from "../Components/Common/MiniHero";
import Pagination from "../Components/Common/Pagination";

function BlogPage() {
  return (
    <div className="container border-2 border-red mx-auto">
      <Heading />
      <MiniHero />
      <BlogFilter />

      <Pagination />
      <Footer />
    </div>
  );
}

export { BlogPage };
