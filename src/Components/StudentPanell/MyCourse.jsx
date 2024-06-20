import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MyCoursesPanel as fetchCoursesData } from "../../Core/Services/api/MyCourses";
import { Link } from "react-router-dom";

export default function MyCoursesPanel({ Query }) {
  const [PageNumber, setPageNumber] = useState(1);
  const [RowsOfPage, setRowsOfPage] = useState(10);
  const [SortingCol, setSortingCol] = useState("DESC");
  const [SortType, setSortType] = useState("LastUpdate");

  const [myCourses, setMyCourses] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const result = await fetchCoursesData({
          PageNumber,
          RowsOfPage,
          SortingCol,
          SortType,
          Query,
        });

        // Check if result exists and has the expected structure
        if (
          result &&
          result.listOfMyCourses !== undefined &&
          result.totalCount !== undefined
        ) {
          setMyCourses(result.listOfMyCourses || []);
          setTotalCount(result.totalCount || 0);
        } else {
          setError("Invalid response structure");
        }
      } catch (err) {
        setError("Error fetching courses: " + (err.message || err));
      }
    };

    fetchCourses();
  }, [PageNumber, RowsOfPage, SortingCol, SortType, Query]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">دوره های من</h1>
          <p className="mt-2 text-sm text-gray-700">
            دوست عزیز اینجا میتونید تمام دوره هایی رو که در اون شرکت دارید
            ببینید
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            افزودن دوره
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        {error && <p className="text-red-500">{error}</p>}
        {myCourses.length === 0 ? (
          <p className="text-center text-gray-500">هیچ دوره ای یافت نشد.</p>
        ) : (
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="table-auto w-full rounded-xl border-separate border-spacing-y-2 dark:shadow-[0px_4px_60px_0px_rgba(1,1,1,0.09)] shadow-xl">
                  <thead className="bg-gray-300 divide-gray-300 dark:bg-dark">
                    <tr className="h-10 font-shabnamBold text-[13px] ">
                      <th className="">ردیف</th>
                      <th className="">تصاویر</th>
                      <th className="">نام دوره</th>
                      <th className="">نام گروه</th>
                      <th className=""> نام استاد</th>
                      <th className=""> سطح دوره</th>
                      <th className="">نوع کلاس</th>
                      <th className="">قیمت</th>
                      <th className="  border-gray-100">وضعیت پرداخت</th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 "
                      >
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#f7edfc] border-separate border-spacing-2">
                    {myCourses.map((course, index) => (
                      <tr
                        key={course.courseId}
                        className="text-center h-16 border-2 odd:bg-white"
                      >
                        <td>{index + 1}</td>
                        <td className="justify-center items-center flex py-2">
                          <img
                            className="w-12 h-12 object-cover"
                            src={
                              course.tumbImageAddress
                                ? course.tumbImageAddress
                                : reactImg
                            }
                            alt="Course"
                          />
                        </td>
                        <td className="font-shabnam text-[14px] transition duration-200 text-[#252627] hover:text-[#602f88]">
                          <Link
                            to={`/course-details/${course.courseId}/mainDetails`}
                          >
                            {course.courseTitle}
                          </Link>
                        </td>
                        <td className="font-shabnam text-[14px] text-[#252627]">
                          {course.groupName}
                        </td>
                        <td className="font-shabnam text-[14px] text-[#252627]">
                          {course.fullName}
                        </td>
                        <td className="font-shabnam text-[14px] text-[#252627]">
                          {course.levelName}
                        </td>
                        <td className="font-shabnam text-[14px] text-[#252627]">
                          {course.typeName}
                        </td>
                        <td className="font-shabnam text-[14px] text-[#252627]">
                          {course.cost}
                        </td>
                        <td className="font-shabnam text-[14px] text-[#252627]">
                          {course.paymentStatus === "پرداخت نشده" ? (
                            <button className="hover:bg-opacity-90 transition duration-200 dark:hover:bg-opacity-70 dark:text-white dark:bg-blue cursor-pointer text-[14px] font-shabnam bg-blue-900	 rounded-[10px] text-center px-2 py-2 text-white">
                              پرداخت
                            </button>
                          ) : (
                            "پرداخت شده"
                          )}
                        </td>
                        <td className="whitespace-nowrap pr-3 py-4 text-sm text-gray-500">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            ویرایش
                          </a>{" "}
                          |
                          <a
                            href="#"
                            className="text-red-600 hover:text-red-900"
                          >
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
        )}
      </div>
    </div>
  );
}

MyCoursesPanel.propTypes = {
  PageNumber: PropTypes.number.isRequired,
  RowsOfPage: PropTypes.number.isRequired,
  SortingCol: PropTypes.string.isRequired,
  SortType: PropTypes.string.isRequired,
  Query: PropTypes.string,
};

MyCoursesPanel.defaultProps = {
  Query: "",
};
