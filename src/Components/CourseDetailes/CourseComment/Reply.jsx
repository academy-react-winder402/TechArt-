import { useEffect, useState } from "react";
// import redlike from "../../../asset/images/panel/icons8-dislike-30.png";
// import whitelike from "../../../asset/images/panel/icons8-dislike-30 (1).png";
import { useParams } from "react-router-dom";
import { Field } from "formik";
import {
  AddReplyCommentCourse,
  CommentDisslikeCourse,
  CommentLikeCourse,
  CourseReplyComment,
  DeleteLikeCourse,
} from "../../../Core/Services/api/courseComment";
import { useSelector } from "react-redux";
import { Forms } from "../../Common/Form";

const Reply = ({
  title,
  desc,
  like,
  pictureAddress,
  date,
  author,
  likeId,
  id,
  userInfo,
  disLike,
  currentUserEmotion,
  refetch,
}) => {
  const [reply, setReply] = useState();
  const { fName, userImage } = useSelector((state) => state.user);

  const { courseId } = useParams();
  // send like
  const sendLike = async () => {
    const send = await CommentLikeCourse(id);
    refetch();
    console.log("Send reply Like", send);
    if (send.success == true) {
      toast.success("لایک کردید");
    } else toast.error(send.message);
  };

  console.log("id", courseId);

  // DissLike Comment
  const disliked = async () => {
    const diss = await CommentDisslikeCourse(id);
    console.log(id);
    refetch();
    console.log("DissLike Comment Reply", diss);
    if (diss.success == true) {
      toast.success("دیس لایک کردید");
    }
  };

  //DeleteLike Comment
  const deleteLike = async () => {
    const handleDelete = await DeleteLikeCourse(likeId);
    console.log(id);
    refetch();
    console.log("DeleteLikeReply", handleDelete);
    if (handleDelete.success == true) {
      toast.success("لایک حذف شد");
    } else toast.error(handleDelete.message);
  };

  // show reply form functuin
  const [showForm, setShowForm] = useState("h-0");
  const show = () => {
    setShowForm("h-auto");
  };
  const close = () => {
    setShowForm("h-0");
  };

  // onSubmit and send api

  const onSubmit = async (value) => {
    var formdata = new FormData();
    formdata.append("CommentId", id);
    formdata.append("CourseId", CardId);
    formdata.append("Title", value.title);
    formdata.append("Describe", value.text);

    // add comment api
    const send = await AddReplyCommentCourse(formdata);
    refetch();
    console.log("formdata", formdata);
    console.log("send reply to reply", send);
  };

  const getReply = async () => {
    const get = await CourseReplyComment(CardId, id);
    refetch();
    setReply(get);
  };

  useEffect(() => {
    getReply();
  }, []);

  return (
    <li className="flex flex-col items-center   w-[80%] p-4 rounded-xl bg-zinc-100  border border-[rgba(236,238,239)] ">
      <ul className=" w-[95%] flex flex-col gap-4 m-auto ">
        <li className=" flex  border-b border-[#d3d6d8] justify-between  w-full h-[90px]">
          <ul className="flex w-[40%] h-full">
            <li className="flex justify-center w-[32%] h-full">
              {/* <div className="-mr-2 w-[60px] h-[60px] border-[rgba(210,214,222,1)] border-[5px] rounded-full">
                <img
                  className="hover:scale-[1.02] transform cursor-pointer transition duration-200 rounded-full"
                  src={pictureAddress ? pictureAddress : comment}
                  alt="use avatar"
                />
              </div> */}
            </li>
            <li className="flex flex-col  w-[68%] h-full ">
              <h6 className="indent-2 font-shabnamMeduim  py-4 hover:text-[#7946c5] cursor-pointer text-[20px] text-[rgba(75,90,120,1)] ">
                {author}
              </h6>
              <span className="indent-2 font-shabnam -mt-3 text-[rgba(121,137,158)] text-[20px]">
                {date?.replaceAll("-", "/").substr(0, 10)}
              </span>
            </li>
          </ul>
          <ul className="flex justify-between gap-2 w-[30%] mt-5  h-full">
            <li className="w-[50%] h-full mr-2 " onClick={show}>
              <div className="w-full flex justify-center items-center rounded-[6px] h-[40%] text-[rgba(78,89,104,1)] bg-gray-500 bg-opacity-10 hover:bg-[#a57ac9] hover:text-white transition duration-200 cursor-pointer">
                <svg
                  width="20"
                  height="19"
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
                <p className="font-shabnam text-[14px] mr-1">پاسخ</p>
              </div>
            </li>
            <li
              className="w-[48%] h-full"
              onClick={
                currentUserEmotion == "LIKED"
                  ? () => deleteLike(likeId)
                  : () => sendLike()
              }
            >
              <div className="flex justify-center items-center w-full cursor-pointer  hover:text-white hover:bg-opacity-100 rounded-[6px] h-[40%] bg-red-600 bg-opacity-30">
                <svg
                  className={`${
                    currentUserEmotion == "LIKED"
                      ? "text-red-600"
                      : "text-white"
                  }
              cursor-pointer mt-1`}
                  width="20"
                  height="20"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current "
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.60977 0C3.74605 0 0.511719 2.89525 0.511719 6.5867C0.511719 10.1217 2.52013 12.8603 4.7213 14.8002C6.92648 16.7437 9.42643 17.9791 10.6576 18.5217C11.3636 18.8328 12.1658 18.8328 12.8719 18.5217C14.103 17.9792 16.603 16.7437 18.8081 14.8003C21.0093 12.8604 23.0177 10.1218 23.0177 6.58685C23.0177 2.89543 19.7834 0 15.9197 0C14.3158 0 12.8825 0.676635 11.7647 1.47662C10.647 0.676635 9.21366 0 7.60977 0Z"
                  ></path>
                </svg>
                <p className="font-shabnam mt-1 indent-2 text-[18px] ">
                  {like}
                </p>
              </div>
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
                  className="w-[22px] h-[22px]"
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
          <p className="py-4 px-1 font-shabnam text-right text-[rgba(55,65,81,1)] font-normal text-[18px] leading-10">
            {desc}
          </p>
        </li>
        {/* send reply form */}
        <li
          className={`${showForm} transition duration-500 w-full flex justify-end  overflow-hidden `}
        >
          <section className=" w-[80%]">
            <Forms initialValues={{ text: "", title: "" }} onSubmit={onSubmit}>
              <div className="w-full flex flex-col gap-8 overflow-hidden border-2 bg-white border-zinc-200 p-6 rounded-md ">
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
                    type="text"
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
        {/* get reply's reply */}
        {/* <li className="w-full  flex justify-end  ">
          <div className="w-[80%] bg-white">
            <h1>{reply?.title}</h1>
          </div>
        </li> */}
      </ul>
    </li>
  );
};

export { Reply };
