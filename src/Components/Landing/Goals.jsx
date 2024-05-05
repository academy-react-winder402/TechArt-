import image from "../../assets/Images/05.png";
import DynamicButton from "../Common/Button";

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "5" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
];

export default function Goals() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className=" lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative  max-w-md px-6 sm:max-w-3xl lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              On a mission to empower teams
            </h2>
            <div className="mt-6 space-y-6 text-justify text-gray-500">
              <p className="text-lg">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                senectus vitae.
              </p>
              <p className="text-base leading-7">
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
            </div>
            <div className="flex py-6 items-start">
              <DynamicButton />
            </div>
          </div>
        </div>
        <div className=" sm:py-16 lg:py-0">
          <div className=" mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className=" relative bg-amber-400	  rounded-2xl   shadow-xl">
              <img
                className="  pt-10 pb-10  h-full w-full object-cover -mr-10"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
