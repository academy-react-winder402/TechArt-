import React from "react";
import CourseDetailContent from "./CourseDetailContent";
import CourseInfoTab from "./CourseInfoTab";
import RecentCourse from "./RecentCourse";
import { useParams } from "react-router-dom";
import CouresExplain from "./CourseExplain";

export default function CourseDetailes() {
  const { id } = useParams();
  return (
    <CourseDetailContent>
      <CouresExplain courseId={id} />
      <CourseInfoTab courseId={id} />
      <RecentCourse courseId={id} />
    </CourseDetailContent>
  );
}
