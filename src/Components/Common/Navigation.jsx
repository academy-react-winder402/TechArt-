import { Link } from "react-router-dom";

const Navigation = ({ currentPath, className }) => {
  const navigation = [
    { name: "صفحه اصلی", href: "/" },
    { name: "دوره ها", href: "/courses" },
    { name: "اخبار و مقالات", href: "/blogs" },
    // { name: "ثبت نام مقاطع", href: "#" },
    { name: "درباره ی ما ", href: "#" },
    // { name: " تماس  با ما", href: "#" },
  ];
  return (
    <div className={`lg:flex lg:gap-x-12 pr-8  ${className}`}>
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`text-sm  font-semibold leading-10 text-white relative ${
            currentPath === item.href ? "selected-nav-item" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
