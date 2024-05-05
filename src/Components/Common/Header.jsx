import Toggle from "./DarkModeToggle";
import UserProfileDropdown from "./ProfileDropdown";

export default function Heading() {
  return (
    <div className="border-b border-gray-200 bg-amber-400	 px-4 py-2 sm:px-6 dark:bg-dark">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-lg font-medium leading-6 text-black dark:text-white">
            مدرسه هوشمند تک آرت
          </h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <div className="flex">
            <Toggle />
            <div className="px-4 z-10">
              <UserProfileDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
