/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
