import React, { useState, useEffect } from "react";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { listCourseByProfs, searchCourseByProfs } from "../../graphql/queries";
import { Typography } from "@material-ui/core";

export default function ListCourses(props) {
  const [courses, setCourses] = useState([]);
  const [picture] = useState("");
  useEffect(() => {
    getAllCoursesToState();
  }, [picture]);
  const getAllCoursesToState = async () => {
    //     console.log("inside courses oprn");
    const result = await API.graphql(graphqlOperation(listCourseByProfs));
    let courseArray = await buildCourseArray(
      result.data.listCourseByProfs.items
    );
    setCourses(courseArray);
  };
  const buildCourseArray = async (listCourseByProfs) => {
    return await getCourseList(listCourseByProfs);
  };
  const getCourseList = async (courseList) => {
    return Promise.all(
      courseList.map(async (i) => {
        return getOneFormatedCourse(i);
      })
    );
  };

  const getOneFormatedCourse = async (singleCourse) => {
    console.log("getOneFormatedCourse 11", singleCourse);
    return {
      src: await Storage.get(singleCourse.file.key),
      id: singleCourse.id,
      creator: singleCourse.creator,
      category: singleCourse.category,
      coursedescription: singleCourse.coursedescription,
      coursename: singleCourse.coursename,
      labels: singleCourse.labels,
      createdat: singleCourse.createdAt,
      studentsenrolled: singleCourse.studentsenrolled,
      updatedat: singleCourse.updatedat,
      key: singleCourse.file.key,
    };
  };

  return (
    <div>
      {courses.map((course, i) => (
        <Typography variant="body2" key={course.id}>
          {course.coursename}
        </Typography>
      ))}
    </div>
  );
}
