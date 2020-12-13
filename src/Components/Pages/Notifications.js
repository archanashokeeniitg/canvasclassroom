import React, { useState, useEffect } from "react";
import { listMeetings } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import awsExports from "../../aws-exports";
import NotificationGallery from "./NotificationGallery";

export default function Notifications(props) {
  const [notifications, setNotifications] = useState([]);
  const [picture] = useState("");
  useEffect(() => {
    getAllCoursesToState();
  }, [picture]);
  const getAllCoursesToState = async () => {
    console.log("inside courses oprn");
    const result = await API.graphql(graphqlOperation(listMeetings));
    //const result2 = result.data.listMeetings.items;
    // console.log("mettings are", result, result2);
    let courseArray = await buildCourseArray(result.data.listMeetings.items);
    setNotifications(courseArray);
    //setNotifications(result2);
  };
  console.log("notificationa @ 11", notifications);

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
      id: singleCourse.id,
      subject: singleCourse.meetingsubject,
      time: singleCourse.meetingtime,
    };
  };
  console.log("inside notification props", notifications);

  return <NotificationGallery notifications={notifications} />;
}
