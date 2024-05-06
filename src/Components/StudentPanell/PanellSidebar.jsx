import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "داشبورد", icon: HomeIcon, href: "#", current: true },
  { name: " پروفایل من", icon: UsersIcon, href: "#", current: false },
  { name: "دورره های من", icon: FolderIcon, href: "#", current: false },
  { name: "تقویم آموزشی", icon: CalendarIcon, href: "#", current: false },
  { name: "کامنت ها", icon: InboxIcon, href: "#", current: false },
  { name: "مالی", icon: ChartBarIcon, href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PanellSidebar() {
  return (
    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
      <div className="mt-5 flex flex-grow flex-col">
        <div className="space-y-1">
          <h3
            className="px-3 text-sm font-medium text-gray-500"
            id="projects-headline"
          >
            Projects
          </h3>
        </div>
        <nav className="flex-1 space-y-8 bg-white px-2" aria-label="Sidebar">
          <div className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-amber-500	text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-gray-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
