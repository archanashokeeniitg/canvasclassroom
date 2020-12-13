import React, { useState, useEffect } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
} from "reactstrap";

import DeleteIcon from "@material-ui/icons/Delete";

import { API, graphqlOperation } from "aws-amplify";
import "./CourseGallery.css";

function ProfileGallery(props) {

  return (
    <div>
      <div className=" card-list ">
        {props.profile.map((profiles, i) => (
          <div className="" key={profiles.id}>
            <Card className="jumbotron m-2">
              <CardBody>
                <CardTitle tag="h5">{profiles.name}</CardTitle>
                <CardText>
                  Course Description: {profiles.description}
                </CardText>
                <CardText>Category: {profiles.accountType}</CardText>
              </CardBody>
            </Card>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileGallery;
