import React, { useEffect, useState } from "react";

import { Field } from "formik";

import { useParams } from "react-router-dom";
// import { UserInfo } from "../../../core/services/api/userInfo";

import { useSelector } from "react-redux";
import { CourseComments } from "../CourseCommet";
import { AddCommentCourse } from "../../../Core/Services/api/courseComment";
import { Forms } from "../../Common/Form";

export const FormComment = ({ close }) => {
  const CardId = useParams().id;
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const { fName, userImage } = useSelector((state) => state.user);

  // get comment api

  const getComment = async () => {
    const items = await CourseComments(CardId);
    setData(items);
  };

  // get user Info api

  // const getUserInfo = async () => {
  //     const getInfo = await UserInfo();
  //     setUserInfo(getInfo);
  // };

  // submit

  const onSubmit = async (value) => {
    var formdata = new FormData();
    formdata.append("CourseId", CardId);
    formdata.append("Title", value.title);
    formdata.append("Describe", value.text);

    // add comment api
    const send = await AddCommentCourse(formdata);

    console.log("send", send);
  };

  useEffect(() => {
    getComment();
    // getUserInfo();
  }, []);

  return (
    <section>
      <Forms initialValues={{ text: "", title: "" }} onSubmit={onSubmit}>
        <div className="w-full flex flex-col gap-8 overflow-hidden border-2 border-zinc-200 p-6 rounded-md ">
          {/* user Name */}
          <div className="flex gap-6 w-full items-center border-b border-zinc-200 p-4">
            <img
              src={userImage}
              alt="..."
              className="w-20 h-20 border-[6px] border-green-300 rounded-full"
            />
            {/* name */}
            <h1 className="font-shabnamBold text-xl text-zinc-700">{fName}</h1>
          </div>
          {/* title */}
          <div className="w-full border-2 border-gzinc-300 rounded-md">
            <Field
              placeholder="عنوان مورد نظر خود را وارد کنید"
              className="w-full border-none focus:outline-[#7946c5] p-2 font-shabnam"
              name="title"
              type="text"
              rows="5"
            ></Field>
          </div>
          {/* describe */}
          <div className="w-full border-2 border-gzinc-200 rounded-md">
            <Field
              placeholder="متن مورد نظر خود را وارد کنید"
              className="w-full border-none focus:outline-[#7946c5] p-2 font-shabnam"
              name="text"
              as="textarea"
              rows="10"
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
  );
};
