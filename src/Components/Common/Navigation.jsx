import { Link } from "react-router-dom";

const Navigation = ({ currentPath }) => {
  const navigation = [
    { name: "صفحه اصلی", href: "/" },
    { name: "دوره ها", href: "/courses" },
    { name: "اخبار مدرسه", href: "/blogs" },
    { name: "ثبت نام مقاطع", href: "#" },
    { name: "درباره ی ما ", href: "#" },
    { name: " تماس  با ما", href: "#" },
  ];
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`text-sm font-semibold leading-6 text-black relative ${
            currentPath === item.href ? "selected-nav-item" : ""
          }`}
        >
          {item.name}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
