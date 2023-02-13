export const typeDefs = `#graphql
  type Book {
    id: Int
    title: String
    author: String
  }

  type Employee {
    category:     Int
    id:           Int
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
    id:           Int
    employeeId:    Int
    title: String
    level: Int
  }

  type CV{
    category:     Int
    id:           Int
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
  id: Int
  user: String
  name: String
  phone: String
  professional: String
  email: String
  github: String
  linkedin: String
  sourceImage: String
  }

  type Post {
    id: Int
  businessId: Int
  hashtag: String
  time: Int
  content: String
  imageSource: String
  job: String
  status: Int
  }

  type Query {
    books: [Book]
    book(id: Int!): Book
    employees: [Employee]
    employee(id: Int!): Employee
    employeeByUser(user: String): Employee
    skillsByEmployeeId(employeeId: Int!): [Skill]
    cv(employeeId: Int!): CV
    businesses: [Business]
    business(id: Int!): Business
    businessByUser(user: String): Business
    posts: [Post]
    postsByBusinessId(businessId: Int): [Post]
    post(postId: Int!): Post
  }
`;
