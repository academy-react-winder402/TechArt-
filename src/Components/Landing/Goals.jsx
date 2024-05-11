import image from "../../assets/Images/05.png";
import DynamicButton from "../Common/Button";
import Button from "./../Common/Button";

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "5" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
];

export default function Goals() {
  return (
    <div className="relative bg-white dark:bg-dark py-16 sm:py-24">
      <div className=" lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative  max-w-md px-6 sm:max-w-3xl lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
              ماموریت تیم قدرتمند مدرسه تک آرت{" "}
            </h2>
            <div className="mt-6 space-y-6 text-justify text-gray-500 dark:text-white">
              <p className="text-lg">
                اگر با مفاهیم برنامه نویسی آشنا نیستی و قصد شرکت در دوره آموزش
                طراحی سایت را داری، پیشنهاد می‌کنیم ابتدا در دوره آموزش برنامه
                نویسی مقدماتی لقمان آوند شرکت کنی و بعد از آن مسیر یادگیری
                برنامه نویسی را به درستی انتخاب کنی.
              </p>
              <p className="text-base leading-7 dark:text-white">
                اگر در دنیای برنامه‌نویسی تازه‌وارد هستید، یادگیری طراحی وب برای
                شما دوست داشتنی و نسبتا ساده است. برای کسب‌وکارهای بزرگ، طراحی
                سایت با استفاده از زبان‌های برنامه‌نویسی وب جذابیت و اهمیت زیادی
                دارد. بنابراین با یک جستجوی ساده در بین آگهی‌های استخدامی متوجه
                داغ بودن بازار این حوزه و نیاز شرکت‌ها به طراح وب حرفه‌ای
                می‌شویم. در چنین شرایطی، یادگیری طراحی وب نویدبخش کسب درآمد بالا
                و حتی همکاری با شرکت‌های خارجی و کسب درآمد ارزی خواهد بود.
              </p>
            </div>
            <div className="flex py-6 items-start ">
              <Button />
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
