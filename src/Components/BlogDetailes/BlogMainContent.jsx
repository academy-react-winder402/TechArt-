import LikeButton from "./../Common/Like";
import BookmarkButton from "./../Common/Bookmark";
import VoiceCommentForm from "../Comment/VoiceCm";
import CommentForm from "../Comment/textCm";
import BlogDetailCmTab from "./BlogDetailCmTab";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// export default function BlogMainContent() {
//   const [data, setData] = useState([]);

//   const NewsId = useParams();
//   const getData = async () => {
//     const items = await NewsDetail(CardId);
//     setData(items.detailsNewsDto);
//     console.log(items);
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div className="relative overflow-hidden bg-white py-16">
//       <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
//         <div
//           className="relative mx-auto h-full max-w-prose text-lg"
//           aria-hidden="true"
//         >
//           <svg
//             className="absolute top-12 left-full translate-x-32 transform"
//             width={404}
//             height={384}
//             fill="none"
//             viewBox="0 0 404 384"
//           >
//             <defs>
//               <pattern
//                 id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
//                 x={0}
//                 y={0}
//                 width={20}
//                 height={20}
//                 patternUnits="userSpaceOnUse"
//               >
//                 <rect
//                   x={0}
//                   y={0}
//                   width={4}
//                   height={4}
//                   className="text-gray-200"
//                   fill="currentColor"
//                 />
//               </pattern>
//             </defs>
//             <rect
//               width={404}
//               height={384}
//               fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
//             />
//           </svg>
//           <svg
//             className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
//             width={404}
//             height={384}
//             fill="none"
//             viewBox="0 0 404 384"
//           >
//             <defs>
//               <pattern
//                 id="f210dbf6-a58d-4871-961e-36d5016a0f49"
//                 x={0}
//                 y={0}
//                 width={20}
//                 height={20}
//                 patternUnits="userSpaceOnUse"
//               >
//                 <rect
//                   x={0}
//                   y={0}
//                   width={4}
//                   height={4}
//                   className="text-gray-200"
//                   fill="currentColor"
//                 />
//               </pattern>
//             </defs>
//             <rect
//               width={404}
//               height={384}
//               fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
//             />
//           </svg>
//           <svg
//             className="absolute bottom-12 left-full translate-x-32 transform"
//             width={404}
//             height={384}
//             fill="none"
//             viewBox="0 0 404 384"
//           >
//             <defs>
//               <pattern
//                 id="d3eb07ae-5182-43e6-857d-35c643af9034"
//                 x={0}
//                 y={0}
//                 width={20}
//                 height={20}
//                 patternUnits="userSpaceOnUse"
//               >
//                 <rect
//                   x={0}
//                   y={0}
//                   width={4}
//                   height={4}
//                   className="text-gray-200"
//                   fill="currentColor"
//                 />
//               </pattern>
//             </defs>
//             <rect
//               width={404}
//               height={384}
//               fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
//             />
//           </svg>
//         </div>
//       </div>
//       <div className="relative px-6 lg:px-8">
//         <div className="mx-auto max-w-prose text-lg">
//           <h1>
//             <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
//               ترلو (Trello) چیست؟
//             </span>
//           </h1>
//         </div>
//         <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
//           <h2>ابزار مدیریت پروژه حرفه ای</h2>

//           <figure>
//             <div className="flex justify-center">
//               <img
//                 className="max-h-64	w-auto rounded-lg"
//                 src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
//                 alt=""
//                 width={1310}
//                 height={873}
//               />
//             </div>
//             <figcaption>
//               Sagittis scelerisque nulla cursus in enim consectetur quam.
//             </figcaption>
//           </figure>
//           {/* Integrate LikeButton component here */}
//           <div className="flex">
//             <div className="flex items-center mt-2 ml-2">
//               <LikeButton />
//             </div>
//             <div className="flex items-center mt-2">
//               <BookmarkButton
//                 successMessage="این مطلب به لیست علاقه مندی شما اضافه شد"
//                 errorMessage="این مطلب از لیست علاقه مندی شما حذف شد"
//               />
//             </div>
//           </div>
//           <div className="pt-10">
//             <h2>ترلو (Trello) چیست؟ -ابزار مدیریت پروژه حرفه ای</h2>
//             <p>
//               ادغام ترلو با دیگر اپلیکیشن‌ها این پلتفرم به سازمان‌ها این امکان
//               را می‌دهد که برنامه‌های تیم خود را به گردش کاری Trello متصل کنند.
//               صدها افزونه و ادغام (Power-Ups) در دسترس هستند تا فرآیندهای کاری
//               شما به راحتی و بدون مشکل انجام شود. در زیر به برخی از محبوب‌ترین
//               ادغام‌ها اشاره می‌کنیم. Slack: برای ارتباط داخلی تیم و به‌روزرسانی
//               اعضای تیم با پیام‌های فوری. Google Drive: برای اشتراک‌گذاری و
//               ذخیره اسناد، تصاویر و فایل‌ها. GitHub: برای پیگیری کدها و همکاری
//               با توسعه‌دهندگان نرم‌افزار. Telegram: برای اعلان‌های فوری به تیم
//               از طریق این پیام‌رسان محبوب. Salesforce: برای مدیریت و پیگیری
//               داده‌های مشتریان و پروژه‌های فروش. IBM Connect: برای
//               به‌اشتراک‌گذاری داده‌ها بین سیستم‌های سازمانی مختلف. Twitter: برای
//               مدیریت حساب‌های رسانه‌های اجتماعی و پیگیری محتوا. این ادغام‌ها به
//               تیم‌ها کمک می‌کنند تا از Trello به شکلی جامع‌تر و منظم‌تر برای
//               پیگیری وظایف، اشتراک‌گذاری اطلاعات و بهبود بهره‌وری استفاده کنند.
//             </p>
//           </div>
//           {/* Related articles section */}
//           <div className="mt-12">
//             {/* <h2 className="text-2xl font-semibold mb-4">Related Articles</h2> */}
//             {/* Added grid layout for related articles */}
//             <div className="grid pt-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
//               {/* Related article 1 */}
//               <div className="border border-gray-200 border-r-amber-500 border-r-4 rounded-lg p-4">
//                 <h3 className="text-lg  font-semibold mb-2">مقالات مرتبط</h3>
//                 <p className="text-blue-600"> CDN چیست و چه کاربردی دارد؟</p>
//               </div>
//             </div>
//           </div>
//           <p className="pt-8">
//             معایب: نیاز به اتصال به اینترنت: بدون اتصال به اینترنت، امکان دسترسی
//             به Trello وجود ندارد. اگر اینترنت شما قطع شود، قادر به استفاده از
//             این ابزار نخواهید بود. محدودیت فضای ذخیره‌سازی: در حساب‌های کاربری
//             رایگان، حجم هر بارگذاری به 10 مگابایت محدود می‌شود. در حالی که با
//             حساب‌های پولی این حجم به 250 مگابایت افزایش می‌یابد، همچنان
//             محدودیت‌های ذخیره‌سازی وجود دارد. ویرایش نظرات: نظرات ارسال‌شده روی
//             کارت‌ها قابل ویرایش نیستند و تنها گزینه برای اصلاح، ارسال نظر جدید
//             است.
//           </p>
//         </div>
//         <div className="py-10">
//           <BlogDetailCmTab />
//         </div>
//       </div>
//     </div>
//   );
// }

import http from "../../Core/interceptor/index";

export const ArticleData = async (id) => {
  try {
    const result = await http.get(`/News/${id}`);
    return result; //
  } catch (error) {
    alert("خطا: " + error?.message);
    throw error;
  }
};

export default function BlogMainContent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams(); // Extracting id from the URL parameters

  const getData = async () => {
    try {
      const items = await ArticleData(id);
      setData(items?.detailsNewsDto);
      console.log(items);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (error) {
    return <div>خطا: {error.message}</div>;
  }

  if (!data) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {data.title}
            </span>
          </h1>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <h2>{data.miniDescribe}</h2>

          <figure>
            <div className="flex justify-center">
              {data.currentImageAddress ? (
                <img
                  className="max-h-64 w-auto rounded-lg"
                  src={data.currentImageAddress}
                  alt={data.title}
                  width={1310}
                  height={873}
                />
              ) : (
                <img
                  className="max-h-64 w-auto rounded-lg"
                  src="https://via.placeholder.com/1310x873"
                  alt="placeholder"
                  width={1310}
                  height={873}
                />
              )}
            </div>
            <figcaption>{data.googleDescribe}</figcaption>
          </figure>
          {/* Integrate LikeButton component here */}
          <div className="flex">
            <div className="flex items-center mt-2 ml-2">
              <LikeButton />
            </div>
            <div className="flex items-center mt-2">
              <BookmarkButton
                successMessage="این مطلب به لیست علاقه مندی شما اضافه شد"
                errorMessage="این مطلب از لیست علاقه مندی شما حذف شد"
              />
            </div>
          </div>
          <div className="pt-10">
            <h2>{data.googleTitle}</h2>
            <p>{data.describe}</p>
          </div>
          {/* Related articles section */}
          <div className="mt-12">
            <div className="grid pt-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="border border-gray-200 border-r-amber-500 border-r-4 rounded-lg p-4">
                <h3 className="text-lg  font-semibold mb-2">مقالات مرتبط</h3>
                {/* Here you can map through related articles if they exist */}
              </div>
            </div>
          </div>
          <p className="pt-8">{data.keyword}</p>
        </div>
        <div className="py-10">
          <BlogDetailCmTab />
        </div>
      </div>
    </div>
  );
}
