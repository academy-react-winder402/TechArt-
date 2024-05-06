import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SidebarNav from "./SidebarNav";
import LoginForm from "./LoginForm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PageSections() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}

      {/* 3 column wrapper */}
      <div className="flex-grow max-w-7xl mx-auto flex lg:px-8 ">
        {/* Left sidebar */}
        <div className="border-b  border-gray-200 xl:w-64 xl:flex-shrink-0 xl:border-b-0 xl:border-r xl:border-gray-200">
          <div className="h-full  py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
            {/* Start left column area */}
            <div
              className="h-full rounded-lg bg-yellow-400 "
              style={{ minHeight: "calc(50vh - 4rem)" }}
            >
              <SidebarNav />
            </div>
            {/* End left column area */}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="bg-indigo-950    lg:border-gray-200 lg:mr-0 lg:ml-0">
          <div className="h-full py-6    lg:w-80">
            {/* Start right column area */}
            <div
              className="h-full"
              style={{ minHeight: "calc(50vh - 4rem)" }}
            ></div>
            {/* End right column area */}
          </div>
        </div>

        {/* Main content */}
        <div className=" lg:min-w-0 lg:flex-1 ">
          <div className="h-full py-6 lg:px-0  flex justify-center items-center">
            {/* Start main area*/}
            <div
              className="h-full  bg-yellow-400 rounded-lg"
              style={{ minHeight: "calc(100vh - 8rem)" }}
            >
              <LoginForm className="" />
            </div>
            {/* End main area */}
          </div>
        </div>
      </div>
    </div>
  );
}
