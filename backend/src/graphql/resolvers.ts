import { Project } from '../models/Project';
import { Skill } from '../models/Skill';
import { ContactSubmission } from '../models/Contact';

export const resolvers = {
  Query: {
    projects: async () => {
      return await Project.find({});
    },
    project: async (_: unknown, { id }: { id: string }) => {
      return await Project.findById(id);
    },
    skills: async () => {
      return await Skill.find({});
    },
    skillsByCategory: async (_: unknown, { category }: { category: string }) => {
      return await Skill.find({ category });
    }
  },
  Mutation: {
    submitContact: async (_: unknown, { 
      name, 
      email, 
      message 
    }: { 
      name: string;
      email: string;
      message: string;
    }) => {
      const newSubmission = new ContactSubmission({
        name,
        email,
        message,
        submittedAt: new Date()
      });
      
      await newSubmission.save();
      return newSubmission;
    }
  }
};