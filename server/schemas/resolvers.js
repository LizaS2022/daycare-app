const { Student, Inquiry, Subscribe } = require("../models");

const resolvers = {
  Query: {
    viewStudents: async () => {
      return await Student.find();
    },
    viewStudent: async (parent, { studentId }) => {
      return await Student.findById(studentId);
    },

    viewInquiries: async () => {
      return await Inquiry.find();
    },
    viewInquiry: async (parent, { inquiryId }) => {
      return await Inquiry.findById(inquiryId);
    },
  },
  Mutation: {
    addStudent: async (parent, { input }) => {
      const student = await Student.create(input);
      console.log(student);
      return patient;
    },

    updateStudent: async (parent, { studentId, input }) => {
      return await Student.findOneAndUpdate({ _id: studentId }, input, {
        new: true,
      });
    },
    deleteStudent: async (parent, { studentId }) => {
      const removeStudent = await Student.findOneAndDelete({ _id: studentId });

      if (!removeStudent) {
        throw new Error("no student found");
      }
      return removeStudent;
    },
    addInquiry: async (parent, { input }) => {
      const inquiry = await Inquiry.create(input);
      console.log(inquiry);
      return inquiry;
    },
    deleteInquiry: async (parent, { inquiryId }) => {
      const deleteInquiry = await Inquiry.findOneAndDelete({
        _id: inquiryId,
      });
      return deleteInquiry;
    },
  },
};

module.exports = resolvers;
