/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
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
  ) {
    searchCourseByProfs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        creator
        category
        coursename
        coursedescription
        studentsenrolled
        labels
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
