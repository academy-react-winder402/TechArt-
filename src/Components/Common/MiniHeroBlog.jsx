import React from "react";
import image from "../../assets/Images/13.jpg";
import Breadcrumb from "./Breadcrumb";
import Navigation from "./Navigation";

export default function MiniHeroBlog({ location }) {
  return (
    <>
      <div
        className="bg-cover relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="lg:flex lg:gap-x-12">
          <Navigation />
        </div>
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8 bg-gradient-to-b from-transparent to-indigo-950 opacity-80 ">
          <div className="text-center ">
            <h1 className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              اخبار و مقالات
            </h1>
            <div className="flex justify-center items-center pt-6">
              <div>
                <Breadcrumb />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
