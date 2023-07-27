const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Student {
    _id: ID!
    first_name: String
    last_name: String
    date_of_birth: String
    street_adress: String
    city: String
    zip_code: Int
    gender: String
    allergies: String
    special_notes: String
    mother_first_name: String
    mother_last_name: String
    father_first_name: String
    father_last_name: String
    phone_number1: String
    phone_number2: String
    email: String
    username: String
    password: String
  }

  type Inquiry {
    _id: ID!
    first_name: String
    last_name: String
    phone_number: String
    email: String
  }
  type Query {
    viewStudents: [Student]
    viewStudent(studentId: ID): Student
    viewInquiries: [Inquiry]
    viewInquiry(inquiryId: ID): Inquiry
  }

  type Mutation {
    addStudent(input: StudentInput): Student
    deleteStudent(studentId: ID!): Student
    updateStudent(studentId: ID): Student
    addInquiry(input: InquiryInput): Inquiry
    deleteInquiry(inquiryId: ID!): Inquiry
  }

  input StudentInput {
    _id: ID
    first_name: String
    last_name: String
    date_of_birth: String
    street_adress: String
    city: String
    zip_code: Int
    gender: String
    allergies: String
    special_notes: String
    mother_first_name: String
    mother_last_name: String
    father_first_name: String
    father_last_name: String
    phone_number1: String
    phone_number2: String
    email: String
    username: String
    password: String
  }

  input InquiryInput {
    _id: ID
    first_name: String
    last_name: String
    phone_number: String
    email: String
  }
`;

module.exports = typeDefs;
