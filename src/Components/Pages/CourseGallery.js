import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

import { API, graphqlOperation } from "aws-amplify";
import { updateCourseByProf } from "../../graphql/mutations";
import "./CourseGallery.css";

function CourseGallery(props) {
  console.log("inside Imagegallery", props, props.courses);

  return (
    <div>
      <div className="container card-list ">
        {props.courses.map((course) => (
          <div className="" key={course.id}>
            <Card className="jumbotron ">
              <img
                width="100%"
                className="card-image"
                // src={course.src}
                src="https://images.fabric.com/images/605/605/AP-895.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">coursename : {course.coursename}</CardTitle>

                <CardText>
                  Course Description: {course.coursedescription}
                </CardText>
                <CardText>Category: {course.category}</CardText>
                <CardText>
                  Students Enrolled: {course.studentsenrolled}
                </CardText>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Created By : {course.creator}
                  <br />
                  last Updated :{course.updatedAt}
                </CardSubtitle>
                <CardSubtitle></CardSubtitle>
              </CardBody>
            </Card>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseGallery;
