import React, { useEffect, useState } from "react";
import { MyCommentCourse } from "../../Core/Services/api/PanellCourseComment";

export default function MyComment() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const comments = await MyCommentCourse();
      setComments(comments || []);
    };

    fetchData();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">کامنت های من</h1>
          <p className="mt-2 text-sm text-gray-700">
            اینجا میتونی کامنت هات رو مدیریت کنی.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            افزودن کامنت
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                    >
                      موضوع
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      دسته بندی
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      وضعیت
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      زمان
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      عملیات
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {comments.map((comment) => (
                    <tr key={comment.id}>
                      <td className="whitespace-nowrap py-4 pl-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {comment.about}
                      </td>
                      <td className="whitespace-nowrap pl-3 py-4 text-sm text-gray-500">
                        {comment.category}
                      </td>
                      <td className="whitespace-nowrap pl-3 py-4 text-sm text-gray-500">
                        {comment.status}
                      </td>
                      <td className="whitespace-nowrap pl-3 py-4 text-sm text-gray-500">
                        {comment.time}
                      </td>
                      <td className="whitespace-nowrap pr-3 py-4 text-sm text-gray-500">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          ویرایش
                        </a>{" "}
                        |
                        <a href="#" className="text-red-600 hover:text-red-900">
                          حذف
                        </a>{" "}
                        |
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          جزئیات
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
