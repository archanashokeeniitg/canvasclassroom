import React, { useState, useEffect } from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
// import "./Dashboard.css";

import NotificationsIcon from "@material-ui/icons/Notifications";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MakeAnnouncement from "./MakeAnnouncement";
import { yellow } from "@material-ui/core/colors";

import { Storage, API, graphqlOperation } from "aws-amplify";
import { listCourseByProfs, searchCourseByProfs } from "../../graphql/queries";

export default function Dashboard() {
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
      //   owner: image.owner,
      //   tag: image.tag,
      //   lables: image.labels,
      //   celeb: image.celeb,
      //   createdAt: image.createdAt,
      //   updatedAt: image.updatedAt,
      //   key: image.file.key,
    };
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <Grid container spacing={3} justify="center">
          <Grid item>
            <Card className="card infected">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Courses
                  <br />
                  <ImportContactsIcon color="primary" />
                </Typography>
                <Typography variant="h5"></Typography>
                <Typography color="textSecondary"></Typography>
                {courses.map((course, i) => (
                  <Typography variant="body2" key={course.id}>
                    {course.coursename}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card infected">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Upcoming Meetings
                  <br />
                  <WatchLaterIcon style={{ color: yellow[500] }} />
                </Typography>
                <Typography variant="h5"></Typography>
                <Typography color="textSecondary"></Typography>
                <Typography variant="body2">
                  Lorem Ipsum is simply dummy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card infected">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Notifications
                  <br />
                  <NotificationsIcon color="secondary" />
                </Typography>
                <Typography variant="h5"></Typography>
                <Typography></Typography>
                <Typography variant="body2">
                  Lorem Ipsum is simply dummy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div container style={{ justifyContent: "center" }}>
        <MakeAnnouncement courses={courses} />
      </div>
    </div>
  );
}
