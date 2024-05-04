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
          {/* <button
            type="button"
            className="relative inline-flex items-center rounded-md border border-transparent bg-blue-950	 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            وررود و ثبت نام
          </button> */}
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
