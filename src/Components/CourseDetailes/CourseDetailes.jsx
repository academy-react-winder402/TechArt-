import React from "react";
import CourseDetailContent from "./CourseDetailContent";
import CourseInfoTab from "./CourseInfoTab";
import RecentCourse from "./RecentCourse";

export default function CourseDetailes() {
  return (
    <CourseDetailContent>
      <CourseInfoTab />
      <RecentCourse />
    </CourseDetailContent>
  );
}
