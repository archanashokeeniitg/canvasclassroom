import React from "react";
import { Table } from "reactstrap";

export default function StudentsTable(props) {
  console.log("props", props);
  return (
    <div className="container">
      <div className=" jumbotron">
        <Table striped>
          <thead>
            <tr>
              <th>Students Name</th>
              <th>Enrollment Year</th>
              <th>Courses</th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((student) => (
              <tr key={student.studentId}>
                <td>{student.studentName}</td>
                <td>{student.studentYear}</td>
                <td>{student.studentCourse.coursename}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <br />
      <br />
      <h2>Course 2</h2>
      <div className=" jumbotron">
        <Table striped>
          <thead>
            <tr>
              <th>Students Name</th>
              <th>Enrollment Year</th>
              <th>Courses</th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((student) => (
              <tr key={student.studentId}>
                <td>{student.studentName}</td>
                <td>{student.studentYear}</td>
                <td>{student.studentCourse.coursename}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <br />
      <br />
      <h2>Course 3</h2>
      <div className=" jumbotron">
        <Table striped>
          <thead>
            <tr>
              <th>Students Name</th>
              <th>Enrollment Year</th>
              <th>Courses</th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((student) => (
              <tr key={student.studentId}>
                <td>{student.studentName}</td>
                <td>{student.studentYear}</td>
                <td>{student.studentCourse.coursename}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
