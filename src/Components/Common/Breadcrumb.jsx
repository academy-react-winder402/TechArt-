import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pages = location.pathname
    .split("/")
    .filter((page) => page)
    .map((page, index, array) => {
      const href = `/${array.slice(0, index + 1).join("/")}`;
      return {
        name: page.charAt(0).toUpperCase() + page.slice(1),
        href,
        current: index === array.length - 1,
      };
    });

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <Link
                to={page.href}
                className="ml-4 text-sm font-medium text-white hover:text-amber-400"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </Link>
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-white"
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
        <li>
          <div>
            <Link to="/" className="text-white hover:text-amber-400">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
