import React, { useState, useEffect, useContext } from "react";
//import { ReferenceDataContext } from "../ReferenceDataContext";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { listCourseByProfs, searchCourseByProfs } from "../../graphql/queries";

import {
  updateCourseByProf,
  deleteCourseByProf,
} from "../../graphql/mutations";
import UploadCourse from "./UploadCourse";
import CourseGallery from "./CourseGallery";
import { Col, Row } from "reactstrap";
import Amplify, { Auth, Hub } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "../../aws-exports";

export default function Courses(props) {
  //const [courses, setCourses] = useContext(ReferenceDataContext);
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState("");
  const [picture] = useState("");
  const [myAlert, setMyAlert] = useState(false);

  useEffect(() => {
    getAllCoursesToState();
    let updateUser = async (authState) => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch {
        setUser(null);
      }
    };
    Hub.listen("auth", updateUser); // listen for login/signup events
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove("auth", updateUser); // cleanup
  }, [picture]);

  console.log("user isss", user);
  // useEffect(() => {
  //   getAllCoursesToState();
  // }, [picture]);
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
      //   owner: image.owner,
      //   tag: image.tag,
      //   lables: image.labels,
      //   celeb: image.celeb,
      //   createdAt: image.createdAt,
      //   updatedAt: image.updatedAt,
      //   key: image.file.key,
    };
  };
  const deleteCourse = async (imageId) => {
    const id = {
      id: imageId,
    };
    console.log("courseID selected", id);
    try {
      await API.graphql(graphqlOperation(deleteCourseByProf, { input: id }));
      console.log("inside delete API");

      const i = courses.filter((value, index, arr) => {
        return value.id !== id;
      });
      setCourses(i);
      setMyAlert(true);
    } catch (error) {
      console.log(error);
      alert("Cannot delete: User doesn't own this image");
    }
  };

  const downloadImage = async (image) => {
    console.log("image", image);
    const data = await Storage.get(image.key, { download: true }).then((res) =>
      downloadBlob(res.Body, image.key)
    );
  };

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "download";
    const clickHandler = () => {
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.removeEventListener("click", clickHandler);
      }, 150);
    };
    a.addEventListener("click", clickHandler, false);
    a.click();
    return a;
  }
  return (
    <div>
      {myAlert ? (
        <div
          id="success-alert"
          className="alert alert-danger text-center"
          role="alert"
        >
          Course Deleted successfully!!!
        </div>
      ) : null}
      <Row>
        <Col className="col-lg-8">
          <CourseGallery
            courses={courses}
            deleteCourse={deleteCourse}
            downloadImage={downloadImage}
          />
        </Col>
        {user.username === "professor1" ? (
          <Col className="col-lg-4">
            <UploadCourse />
          </Col>
        ) : (
          ""
        )}
      </Row>
    </div>
  );
}
