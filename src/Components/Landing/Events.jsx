import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

const timeline = [
  {
    id: 1,
    content: "محمد حسین بحرالعلوم",
    target: "استعداد سنجی",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "محمد حسین بحرالعلوم",

    target: "اینترفیس حرفه ای ",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "محمد حسین بحرالعلوم",
    target: "انیمیشن",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "محمد حسین بحرالعلوم",
    target: "آژاکس و وب سرویس",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    target: "کارگاه ری اکت و دات نت",
    content: "محمد حسین بحرالعلوم",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Events() {
  return (
    <div className="flow-root">
      <div className="text-45 ">
        <h2 className="">مسیر آموزشی آکادمی</h2>
      </div>
      <ul role="list" className="">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative px-6 py-4  dark:bg-dark">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-medium"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full my-2 flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-medium">
                      <a
                        href={event.href}
                        className="font-medium text-gray-900 dark:text-white mx-6"
                      >
                        {event.target}
                      </a>
                      {event.content}{" "}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500 dark:text-medium">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
