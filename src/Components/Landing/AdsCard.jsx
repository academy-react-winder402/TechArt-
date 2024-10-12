import image from "../../assets/Images/06.png";
import NewsTellerSignup from "../Common/NewsTeller";

export default function AdsCard() {
  return (
    <div className="grid px-2 dark:bg-dark grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="relative  items-center space-x-3 rounded-lg  bg-amber-400	 border border-gray-300  px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
        <div className=" text-white text-justify py-4">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
        <div className="">
          <NewsTellerSignup />
        </div>
      </div>
      <div className="relative flex items-center space-x-3 rounded-lg bg-sky-950 dark:bg-medium	 border border-gray-300  px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
        <div className="min-w-0 flex-1">
          <img src={image} alt="" className="max-w-20 max-h-40" />
        </div>
        <div className="flex w-8/12 text-white text-justify">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
      </div>
    </div>
  );
}
