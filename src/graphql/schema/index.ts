export const typeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
  }

  type Employee {
    category:     Int
    id:           ID
    user:         String
    name:         String
    phone:        String
    professional: String
    email:        String
    github:       String
    linkedin:     String
    sourceImage:  String
  }

  type Skill {
    id:           ID
    employeeId:    ID
    title: String
    level: Int
  }

  type CV{
    category:     Int
    id:           ID
    user:         String
    name:         String
    phone:        String
    professional: String
    email:        String
    github:       String
    linkedin:     String
    sourceImage:  String
    skills: [Skill]
  }

  # business
  type Business {
    category: Int
  id: ID
  user: String
  name: String
  phone: String
  professional: String
  email: String
  github: String
  linkedin: String
  sourceImage: String
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    employees: [Employee]
    employee(id: ID!): Employee
    employeeByUser(user: String): Employee
    skillsByEmployeeId(employeeId: ID!): [Skill]
    cv(employeeId: ID!): CV
    businesses: [Business]
    businessByUser(user: String): Business
  }
`;
