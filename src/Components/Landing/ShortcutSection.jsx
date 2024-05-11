import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import image07 from "../../assets/Images/07.png";
import image08 from "../../assets/Images/08.png";
import image10 from "../../assets/Images/10.png";

const supportLinks = [
  {
    name: "دوره های برنامه نویسی",
    href: "#",
    description: "دوره های برنامه نویسی ",
    image: image07,
  },
  {
    name: "کارگاه های backend و frontend",
    href: "#",
    description: "کارگاه های backend و frontend",
    image: image08,
  },
  {
    name: "کارگاه رزومه نویسی",
    href: "#",
    description: "کارگاه رزومه نویسی",
    image: image10,
  },
];

export default function Shortcut() {
  return (
    <div className="bg-white dark:bg-dark">
      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-6xl px-6 pb-32 lg:px-8 bg-slate-200 dark:bg-teal-100	shadow-lg	rounded-2xl"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl  ">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <img
                  src={link.image}
                  alt={link.name}
                  className="h-auto w-auto mx-auto"
                />

                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
