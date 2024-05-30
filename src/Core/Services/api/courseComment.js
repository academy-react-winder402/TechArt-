import http from "../../interceptor/index";
//  Course comment
export const CourseComment = async (id) => {
  try {
    const result = await http.get(`/Course/GetCourseCommnets/${id}`);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};

// Course reply comment

export const CourseReplyComment = async (CourseId, CommentId) => {
  try {
    const result = await http.get(
      `/Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`
    );

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};

//  Add course Comment

export const AddCommentCourse = async (obj) => {
  try {
    const result = await http.post(`/Course/AddCommentCourse`, obj);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};

// Add Reply Course comment

export const AddReplyCommentCourse = async (obj) => {
  try {
    const result = await http.post(`/Course/AddReplyCourseComment`, obj);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};

// Add Like comment Course

export const CommentLikeCourse = async (CommentId) => {
  try {
    const result = await http.post(
      `/Course/AddCourseCommentLike?CourseCommandId=${CommentId}`
    );

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};

// Add Disslike comment Course

export const CommentDisslikeCourse = async (CommentId) => {
  try {
    const result = await http.post(
      `/Course/AddCourseCommentDissLike?CourseCommandId=${CommentId}`
    );
    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};

// DeleteLike comment Course

export const DeleteLikeCourse = async (CommentId) => {
  try {
    const result = await http.delete(
      `/Course/DeleteCourseCommentLike?CourseCommandLikeId=${CommentId}`
    );

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};
