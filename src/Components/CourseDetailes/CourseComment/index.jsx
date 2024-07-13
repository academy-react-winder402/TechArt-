import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CourseComment } from "../../../Core/Services/api/courseComment";
import { Comment } from "./Cm";
import { FormComment } from "./CmForm";
import { getItem } from "../../../Core/Services/Common/storage.services";

const CommentHolder = () => {
  const CardId = useParams().courseId;
  const [data, setData] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  console.log("comment id", CardId);

  const getComment = async () => {
    const items = await CourseComment(CardId);
    setData(items);
  };
  console.log("comment", data);

  useEffect(() => {
    getComment();
  }, [CardId, reFetch]);

  const token = getItem("token");
  const [showForm, setShowForm] = useState("h-0");
  const show = () => {
    if (token) {
      setShowForm("h-auto");
    } else {
      toast.error("برای ارسال نظر لاگین کن ");
    }
  };
  const close = () => {
    setShowForm("h-0");
  };

  return (
    <>
      <ToastContainer />
      <ul
        className={` w-[100%] flex flex-col gap-12 shadow-lg p-6 rounded-lg  m-auto`}
      >
        <ul className="flex justify-between w-full h-[100px]  ">
          <li className="flex mt-4 w-[30%] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-3"
              width="14 "
              height="12"
              viewBox="0 0 10 10"
            >
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="5"
                cy="5"
                r="5"
                fill="#164e63"
              />
            </svg>
            <h4 className="mr-3   text-[#164e63] font-shabnamBold text-[26px]">
              دیدگاه و پرسش
            </h4>
          </li>
          <li className="flex flex-wrap justify-between mt-1 w-[44%]">
            {/* <div className="hover:border-transparent hover:bg-[#a57ac9] text-[#8d5db4] hover:text-white border-[2px] border-[#8d5db4] transition duration-300 cursor-pointer rounded-[6px] flex justify-center items-center w-[39%] h-[50%]">
              <p className="font-shabnamMeduim  mt-1 text-[18px]">
                دنبال کردن نظرات
              </p>
            </div> */}
            <div className=" border-transparent text-[#eab308] border-[2px] hover:text-[#164e63] hover:border-[#164e63] hover:bg-[#eab308] transition duration-300 cursor-pointer  flex justify-center items-center  w-[58%] h-[50%] rounded-[6px] bg-[#164e63]">
              <p
                className="indent-2 font-shabnamMeduim text-[16px]"
                onClick={show}
              >
                افزودن دیدگاه و پرسش{" "}
              </p>
              <svg
                className="mr-1 mt-1"
                width="35"
                height="35"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  opacity="0.5"
                  d="M4.75 12.5C4.75 14.2328 4.84383 15.5741 5.07592 16.6184C5.30612 17.6543 5.66226 18.3514 6.15542 18.8446C6.64859 19.3377 7.34575 19.6939 8.38157 19.9241C9.4259 20.1562 10.7672 20.25 12.5 20.25C14.2328 20.25 15.5741 20.1562 16.6184 19.9241C17.6543 19.6939 18.3514 19.3377 18.8446 18.8446C19.3377 18.3514 19.6939 17.6543 19.9241 16.6184C20.1562 15.5741 20.25 14.2328 20.25 12.5C20.25 10.7672 20.1562 9.4259 19.9241 8.38157C19.6939 7.34575 19.3377 6.64859 18.8446 6.15542C18.3514 5.66226 17.6543 5.30613 16.6184 5.07592C15.5741 4.84383 14.2328 4.75 12.5 4.75C10.7672 4.75 9.4259 4.84383 8.38157 5.07592C7.34575 5.30613 6.64859 5.66226 6.15542 6.15542C5.66226 6.64859 5.30612 7.34575 5.07592 8.38157C4.84383 9.4259 4.75 10.7672 4.75 12.5Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  stroke="currentColor"
                  opacity="0.5"
                  d="M7.01992 17.9803C8.24521 19.2055 9.25998 20.0876 10.1626 20.662C11.0578 21.2316 11.8026 21.4728 12.5 21.4728C13.1974 21.4728 13.9422 21.2316 14.8374 20.662C15.74 20.0876 16.7548 19.2055 17.9801 17.9803C19.2054 16.755 20.0874 15.7402 20.6618 14.8376C21.2314 13.9424 21.4726 13.1976 21.4726 12.5002C21.4726 11.8027 21.2314 11.058 20.6618 10.1627C20.0874 9.26017 19.2054 8.24539 17.9801 7.0201C16.7548 5.79482 15.74 4.91274 14.8374 4.33839C13.9422 3.76874 13.1974 3.5276 12.5 3.5276C11.8026 3.5276 11.0578 3.76874 10.1626 4.33839C9.25998 4.91274 8.24521 5.79482 7.01992 7.0201C5.79463 8.24539 4.91255 9.26017 4.33821 10.1627C3.76856 11.058 3.52741 11.8027 3.52741 12.5002C3.52741 13.1976 3.76856 13.9424 4.33821 14.8376C4.91255 15.7402 5.79463 16.755 7.01992 17.9803Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  stroke="currentColor"
                  d="M9.66699 12.4997H12.5003M15.3337 12.4997H12.5003M12.5003 12.4997V9.66634V15.333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </li>
        </ul>
        {/* send comment form */}
        <ul className={`${showForm}  overflow-hidden`}>
          <FormComment close={close} data={data} />
        </ul>

        {/* comments */}
        <ul className="flex flex-col gap-8  ">
          {data?.map((item, i) => {
            return (
              <Comment
                key={i}
                id={item.id}
                title={item.title}
                desc={item.describe}
                date={item.insertDate}
                like={item.likeCount}
                disLike={item.disslikeCount}
                likeId={item.currentUserLikeId}
                currentUserEmotion={item.currentUserEmotion}
                author={item.author}
                pictureAddress={item.pictureAddress}
                refetch={() => setReFetch((old) => !old)}
              />
            );
          })}
        </ul>
      </ul>
    </>
  );
};

export { CommentHolder };
