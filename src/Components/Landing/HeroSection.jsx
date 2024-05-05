import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import image from "../../assets/Images/09.jpg";

const navigation = [
  { name: "صفحه اصلی", href: "/" },
  { name: "دوره ها", href: "/courses" },
  { name: "اخبار مدرسه", href: "/blogs" },
  { name: "ثبت نام مقاطع", href: "#" },
  { name: "درباره ی ما ", href: "#" },
  { name: " تماس  با ما", href: "#" },
];

export default function HeroSections() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div
      className="bg-cover relative"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="inset-0 bg-gradient-to-b from-transparent to-indigo-950 opacity-80 absolute"></div>
      <div className="px-6 pt-6 lg:px-8 relative">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden text-white  lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 text-white relative ${
                  location.pathname === item.href ? "selected-nav-item" : ""
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </Link>
            ))}
          </div>
          <div className=""></div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6  flow-root">
              <div className="-my-6 divide-y  divide-gray-500/10">
                <div className="space-y-2  py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-sm font-semibold leading-6 text-white relative ${
                        location.pathname === item.href ? "underline" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        {/* اینجا خط اولیه زیر navigation */}
        <div className="border-b-2 border-white mt-2 mb-4"></div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className=" max-w-2xl py-32 sm:py-48 lg:py-23">
            <div className="text-start text-justify">
              <h1 className="text-4xl text-white font-bold tracking-tight text-gray-900 sm:text-6xl">
                بستری برای رشد----
              </h1>
              <p className="mt-6 text-white text-lg leading-8 text-gray-600">
                هدف ما تربیت رهبرانی برای فرداست...
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-transparent border-2 border-white px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  شرکت در وبینار
                </a>
                <a
                  href="#"
                  className="rounded-md bg-amber-400 px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  همه دوره ها
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
