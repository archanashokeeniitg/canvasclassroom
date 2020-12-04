/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudents = /* GraphQL */ `
  mutation CreateStudents(
    $input: CreateStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    createStudents(input: $input, condition: $condition) {
      id
      name
      year
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStudents = /* GraphQL */ `
  mutation UpdateStudents(
    $input: UpdateStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    updateStudents(input: $input, condition: $condition) {
      id
      name
      year
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudents = /* GraphQL */ `
  mutation DeleteStudents(
    $input: DeleteStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    deleteStudents(input: $input, condition: $condition) {
      id
      name
      year
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCourseByProf = /* GraphQL */ `
  mutation CreateCourseByProf(
    $input: CreateCourseByProfInput!
    $condition: ModelCourseByProfConditionInput
  ) {
    createCourseByProf(input: $input, condition: $condition) {
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
        courses {
          id
          creator
          category
          coursename
          coursedescription
          studentsenrolled
          labels
          createdAt
          updatedAt
        }
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
    }
  }
`;
export const updateCourseByProf = /* GraphQL */ `
  mutation UpdateCourseByProf(
    $input: UpdateCourseByProfInput!
    $condition: ModelCourseByProfConditionInput
  ) {
    updateCourseByProf(input: $input, condition: $condition) {
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
        courses {
          id
          creator
          category
          coursename
          coursedescription
          studentsenrolled
          labels
          createdAt
          updatedAt
        }
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
    }
  }
`;
export const deleteCourseByProf = /* GraphQL */ `
  mutation DeleteCourseByProf(
    $input: DeleteCourseByProfInput!
    $condition: ModelCourseByProfConditionInput
  ) {
    deleteCourseByProf(input: $input, condition: $condition) {
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
        courses {
          id
          creator
          category
          coursename
          coursedescription
          studentsenrolled
          labels
          createdAt
          updatedAt
        }
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
    }
  }
`;
