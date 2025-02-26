import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar Date

  enum SkillCategory {
    FRONTEND
    BACKEND
    DEVOPS
    DATABASE
    TOOLS
  }

  type Skill {
    id: ID!
    name: String!
    category: SkillCategory!
    proficiencyLevel: Int!
    icon: String
  }

  type Project {
    id: ID!
    title: String!
    description: String!
    technologies: [String!]!
    githubLink: String
    liveLink: String
    coverImage: String
    startDate: Date
    endDate: Date
    features: [String!]
    challenges: [String!]
    learnings: [String!]
  }

  type ContactSubmission {
    id: ID!
    name: String!
    email: String!
    message: String!
    submittedAt: Date!
  }

  type Query {
    projects: [Project!]!
    project(id: ID!): Project
    skills: [Skill!]!
    skillsByCategory(category: SkillCategory!): [Skill!]!
  }

  type Mutation {
    submitContact(
      name: String!
      email: String!
      message: String!
    ): ContactSubmission!
  }
`;