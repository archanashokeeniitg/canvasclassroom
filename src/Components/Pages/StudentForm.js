import React, { useState, useEffect } from "react";
import { Storage, API, graphqlOperation } from "aws-amplify";
import awsExports from "../../aws-exports";
import "./UploadCourse.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const createStudents = /* GraphQL */ `
  mutation CreateStudents(
    $studentCoursesId: String!
    $name: String!
    $year: String!
    $grade: String!
    $credits: String!
  ) {
    createStudents(input: {studentCoursesId: $studentCoursesId, name: $name, year: $year, grade: $grade, credits: $credits}) {
      _typename
      id
      name
      year
      credits
    }
  }
`;

const updateStudents = /* GraphQL */ `
  mutation UpdateStudents(
    $input: UpdateStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    updateStudents(input: $input, condition: $condition) {
      id
      name
      year
      credits
      courses {
        id
        creator
        category
        coursename
        coursedescription
        studentsenrolled
        labels
        studentsincourse {
          id
          name
          year
          credits
          grade
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        owner
      }
      grade
      createdAt
      updatedAt
    }
  }
`;

function StudentForm(props) {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [studentCourseId, setStudentCourseId] = useState("");
  const [year, setYear] = useState("");
  const [grade, setGrade] = useState("");
  const [credits, setCredits] = useState("");

  const sendImageToDB = async (image) => {
    console.log("inside db write", image);
    try {
      await API.graphql(graphqlOperation(createStudents, image));
      console.log("image payload", image);
    } catch (err) {
      console.log("db write error");
    }
  };

  const handleFormSubmit = async (e) => {
    console.log("inside handleFormSubmit");

    //storing image in S3
    const image = {
      id: studentId,
      studentCoursesId: studentCourseId,
      name: name,
      year: year,
      grade: grade,
      credits: credits,
    };
    console.log("image payload", image);
    sendImageToDB(image);
  };

  return (
    <div className="jumbotron ">
      <Form onSubmit={handleFormSubmit}>
        <h1> Add Student </h1>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input
            type="text"
            value={name}
            placeholder=""
            onChange={({ target }) => setName(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ID">ID</Label>
          <Input
            type="text"
            value={studentId}
            placeholder=""
            onChange={({ target }) => setStudentId(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Course ID">Course ID</Label>
          <Input
            type="text"
            value={studentCourseId}
            placeholder=""
            onChange={({ target }) => setStudentCourseId(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Labels">Year</Label>
          <Input
            type="text"
            value={year}
            placeholder=""
            onChange={({ target }) => setYear(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Grade">Grade</Label>
          <Input
            type="text"
            value={grade}
            placeholder=""
            onChange={({ target }) => setGrade(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="credits">Credits</Label>
          <Input
            type="text"
            value={credits}
            placeholder=""
            onChange={({ target }) => setCredits(target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default StudentForm;
