import React, { Component } from "react";
// import "./Profile.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Jumbotron,
  Row,
  Col,
} from "reactstrap";

function StudentProfile() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">testguest</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Student Account
                  </CardSubtitle>
                  <CardText>Here is some information on the Student</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default StudentProfile;