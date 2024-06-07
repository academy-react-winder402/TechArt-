import React from "react";
import image from "../../assets/Images/04.jpg";
import BookmarkButton from "../Common/Bookmark";
import LikeButton from "../Common/Like";

export default function CouresExplain() {
  return (
    <div className="flex-col ">
      <div className="rounded-xl overflow-hidden">
        <img className="w-full h-80" src={image} alt="" />
      </div>
      {/* Integrate LikeButton component here */}
      <div className="flex">
        <div className="flex items-center mt-2 ml-2">
          <LikeButton />
        </div>
        <div className="flex items-center mt-2">
          <BookmarkButton
            successMessage="این  دوره به لیست علاقه مندی شما اضافه شد"
            errorMessage="این دوره از لیست علاقه مندی شما حذف شد"
          />
        </div>
      </div>
      <p className="mt-6  text-md leading-8 text-gray-600 text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
        رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
    </div>
  );
}
