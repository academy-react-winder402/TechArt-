import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { UserInfo } from "../../../core/services/api/userInfo";
// import redlike from "../../../asset/images/panel/icons8-dislike-30.png";
// import whitelike from "../../../asset/images/panel/icons8-dislike-30 (1).png";

import { Field } from "formik";

import { Reply } from "./Reply";
import { useSelector } from "react-redux";
import { Forms } from "../../Common/Form";
import {
  AddReplyCommentCourse,
  CommentDisslikeCourse,
  CommentLikeCourse,
  CourseReplyComment,
  DeleteLikeCourse,
} from "../../../Core/Services/api/courseComment";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getItem } from "../../../Core/Services/Common/storage.services";

const Comment = ({
  title,
  desc,
  author,
  date,
  pictureAddress,
  like,
  likeId,
  id,
  disLike,
  currentUserEmotion,
  refetch,
}) => {
  const { courseId } = useParams();
  const [data, setData] = useState([]);
  const [commentId, setCommentId] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const { fName, userImage } = useSelector((state) => state.user);

  const getComment = async () => {
    const items = await CourseReplyComment(courseId, id);
    setData(items);
  };

  const token = getItem("token");
  const [showForm, setShowForm] = useState("h-0");
  const show = () => {
    if (token) {
      setShowForm("h-auto");
      setCommentId(id);
    } else {
      toast.error("برای ارسال نظر لاگین کن سید");
    }
  };
  const close = () => {
    setShowForm("h-0");
  };

  const onSubmit = async (value) => {
    var formdata = new FormData();
    formdata.append("CommentId", commentId);
    formdata.append("CourseId", courseId);
    formdata.append("Title", value.title);
    formdata.append("Describe", value.text);
    const send = await AddReplyCommentCourse(formdata);
    refetch();
    toast.success("پاسخ ارسال شد");
  };

  const sendLike = async () => {
    const send = await CommentLikeCourse(id);
    refetch();
    if (send.success) {
      toast.success("لایک کردی سید");
    }
  };

  const disliked = async () => {
    const diss = await CommentDisslikeCourse(id);
    refetch();
    if (diss.success) {
      toast.success("دیس لایک کردی سید");
    }
  };

  const deleteLike = async () => {
    const handleDelete = await DeleteLikeCourse(likeId);
    refetch();
    if (handleDelete.success) {
      toast.success("لایک حذف شد سید");
    } else {
      toast.error(handleDelete.message);
    }
  };

  useEffect(() => {
    getComment();
  }, [courseId, reFetch]);

  return (
    <div className="flex flex-col items-center w-full m-auto  rounded-xl p-4 border border-[rgba(236,238,239)] ">
      <ToastContainer />
      <ul className=" w-[95%] m-auto ">
        <li className=" flex  border-b border-[rgba(236,238,239)] justify-between  w-full h-[100px]">
          <ul className="flex w-[40%] h-full">
            <li className="flex justify-center w-[32%]  h-full">
              {/* <div className="-mr-2 w-[70px] h-[70px] border-[rgba(210,214,222,1)] border-[5px] rounded-full">
                <img
                  className="hover:scale-[1.02] transform cursor-pointer transition duration-200 rounded-full"
                  src={pictureAddress ? pictureAddress : comment}
                  alt="use avatar"
                />
              </div> */}
            </li>
            <li className="flex flex-col w-[68%] h-full ">
              <h6 className="indent-2 font-shabnamMeduim  py-4 hover:text-[#7946c5] cursor-pointer text-[23px] text-[rgba(75,90,120,1)] ">
                {author}
              </h6>
              <span className="indent-2 font-shabnam -mt-3 text-[rgba(121,137,158)] text-[20px]">
                {date?.replaceAll("-", "/").substr(0, 10)}
              </span>
            </li>
          </ul>
          <ul className="flex justify-between gap-2 w-[30%] h-full">
            <li className="w-[50%] h-full mr-2 " onClick={show}>
              <div className="w-full flex justify-center items-center rounded-[6px] h-[40%] text-[rgba(78,89,104,1)] bg-gray-500 bg-opacity-10 hover:bg-[#a57ac9] hover:text-white transition duration-200 cursor-pointer">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    d="M5.25065 8.23266L2.33398 5.29242L5.25065 2.35217"
                    strokeWidth="0.857886"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    stroke="currentColor"
                    d="M11.6673 11.7609V7.64455C11.6673 7.02071 11.4215 6.42242 10.9839 5.9813C10.5463 5.54018 9.95282 5.29236 9.33398 5.29236H2.33398"
                    strokeWidth="0.857886"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-shabnam text-[18px] mr-1">پاسخ</p>
              </div>
            </li>
            <li
              className="w-[40%] flex h-fit"
              onClick={
                currentUserEmotion == "LIKED"
                  ? () => deleteLike(likeId)
                  : () => sendLike()
              }
            >
              <div className="flex  justify-center items-center cursor-pointer  hover:text-white hover:bg-opacity-60  rounded-full w-[45px] h-[45px] bg-red-600 bg-opacity-30">
                <svg
                  className={`${
                    currentUserEmotion == "LIKED"
                      ? "text-red-600"
                      : "text-white"
                  }
              cursor-pointer mt-[6px]`}
                  width="24"
                  height="24"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current "
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.60977 0C3.74605 0 0.511719 2.89525 0.511719 6.5867C0.511719 10.1217 2.52013 12.8603 4.7213 14.8002C6.92648 16.7437 9.42643 17.9791 10.6576 18.5217C11.3636 18.8328 12.1658 18.8328 12.8719 18.5217C14.103 17.9792 16.603 16.7437 18.8081 14.8003C21.0093 12.8604 23.0177 10.1218 23.0177 6.58685C23.0177 2.89543 19.7834 0 15.9197 0C14.3158 0 12.8825 0.676635 11.7647 1.47662C10.647 0.676635 9.21366 0 7.60977 0Z"
                  ></path>
                </svg>
              </div>
              <p className="font-shabnamMeduim mt-[10px] indent-2 text-[20px] ">
                {like}
              </p>
            </li>
            <li
              onClick={
                currentUserEmotion == "DISSLIKED"
                  ? () => deleteLike(likeId)
                  : () => disliked()
              }
              className="w-[40%] h-full"
            >
              {/* <div className="flex justify-center items-center w-full cursor-pointer  hover:text-white hover:bg-opacity-100 rounded-[6px] h-[40%] bg-red-600 bg-opacity-30">
                <img
                  className="w-[27px] h-[27px]"
                  src={currentUserEmotion == "DISSLIKED" ? redlike : whitelike}
                  alt="..."
                />
                <p className="font-shabnam indent-2 text-[18px] mt-1">
                  {disLike}
                </p>
              </div> */}
            </li>
          </ul>
        </li>
        <li className="w-full h-fit p-4">
          {/* title */}
          <div className="flex gap-2 font-shabnamBold text-xl">
            <span>عنوان :</span>
            <h2 className="text-[#7946c5]">{title}</h2>
          </div>
          {/* describe */}
          <p className="py-4 px-1 font-shabnam text-right text-[rgba(55,65,81,1)] font-normal text-[20px] leading-10">
            {desc}
          </p>
        </li>
        {/* send reply form */}
        <li
          className={`${showForm} w-full flex justify-end mb-4  overflow-hidden `}
        >
          <section className=" w-[80%]">
            <Forms initialValues={{ title: "", text: "" }} onSubmit={onSubmit}>
              <div className="w-full flex flex-col gap-8 overflow-hidden border-2 border-zinc-200 p-6 rounded-md ">
                {/* user Name */}
                <div className="flex gap-6 w-full items-center border-b border-zinc-200 p-2">
                  <img
                    src={userImage}
                    alt="..."
                    className="w-16 h-16 border-[6px] border-green-300 rounded-full"
                  />
                  {/* name */}
                  <h1 className="font-shabnamBold text-xl text-zinc-700">
                    {fName}
                  </h1>
                </div>
                {/* title */}
                <div className="w-full border-2 border-zinc-300 rounded-md">
                  <Field
                    placeholder="عنوان مورد نظر خود را وارد کنید"
                    className="w-full border-none focus:outline-[#7946c5] p-2 font-shabnam"
                    name="title"
                    type=""
                    rows="5"
                  ></Field>
                </div>
                {/* describe */}
                <div className="w-full border-2 border-zinc-200 rounded-md">
                  <Field
                    placeholder="متن مورد نظر خود را وارد کنید"
                    className="w-full border-none focus:outline-[#7946c5] p-2 font-shabnam"
                    name="text"
                    as="textarea"
                    rows="5"
                  ></Field>
                </div>
                {/* submit button */}
                <div className="w-full flex justify-end gap-2">
                  <button
                    type="submit"
                    className="bg-[#a57ac9] p-2 w-24 rounded-md text-white hover:bg-zinc-100 hover:text-zinc-700 transition duration-300 hover:border hover:border-[#a57ac9]"
                  >
                    ثبت دیدگاه
                  </button>
                  <button
                    onClick={close}
                    type="button"
                    className="bg-zinc-100 p-2 w-24 rounded-md text-zinc-700  hover:bg-gray-400 hover:text-zinc-100 transition duration-300 border border-[#a57ac9]"
                  >
                    انصراف{" "}
                  </button>
                </div>
              </div>
            </Forms>
          </section>
        </li>
      </ul>
      <div className="w-full flex flex-col gap-4 mr-[300px] ">
        {data?.map((item, i) => {
          return (
            <Reply
              key={i}
              id={item.id}
              title={item.title}
              desc={item.describe}
              date={item.insertDate}
              like={item.likeCount}
              disLike={item.disslikeCount}
              currentUserEmotion={item.currentUserEmotion}
              author={item.author}
              likeId={item?.currentUserLikeId}
              pictureAddress={item.pictureAddress}
              refetch={() => setReFetch((old) => !old)}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Comment };
