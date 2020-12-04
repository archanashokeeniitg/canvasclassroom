/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudents = /* GraphQL */ `
  query GetStudents($id: ID!) {
    getStudents(id: $id) {
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
          grades
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
      grades
      createdAt
      updatedAt
    }
  }
`;
export const listStudentss = /* GraphQL */ `
  query ListStudentss(
    $filter: ModelStudentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        grades
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourseByProf = /* GraphQL */ `
  query GetCourseByProf($id: ID!) {
    getCourseByProf(id: $id) {
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
          owner
        }
        grades
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
  }
`;
export const listCourseByProfs = /* GraphQL */ `
  query ListCourseByProfs(
    $filter: ModelCourseByProfFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseByProfs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          grades
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
      nextToken
    }
  }
`;
export const searchCourseByProfs = /* GraphQL */ `
  query SearchCourseByProfs(
    $filter: SearchableCourseByProfFilterInput
    $sort: SearchableCourseByProfSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchCourseByProfs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
          grades
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
      nextToken
      total
    }
  }
`;
